import json
import os
import requests
import mimetypes
import threading
import telebot
import random
import re
from datetime import datetime
from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

mimetypes.init()
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/javascript", ".js")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

DB_FILE = "data.json"
generator = pipeline("text-generation", model="gpt2")

def load_data():
    if not os.path.exists(DB_FILE):
        with open(DB_FILE, "w", encoding="utf-8") as file:
            json.dump({"users": {}}, file)
    with open(DB_FILE, "r", encoding="utf-8") as file:
        return json.load(file)

def save_data(data):
    with open(DB_FILE, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

def bubble_sort_leaderboard(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j]["bestWpm"] < arr[j + 1]["bestWpm"]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def format_generated_text(text):
    text = re.sub(r'\s+', ' ', text).strip()
    sentences = re.split(r'(?<=[.!?]) +', text)
    formatted_sentences = []
    for s in sentences:
        if s:
            formatted_sentences.append(s[0].upper() + s[1:].lower())
    return " ".join(formatted_sentences)

@app.get("/")
def get_registration_page():
    return FileResponse("static/mainpage.html")

@app.get("/training")
def get_training_page():
    return FileResponse("static/MainTrainingPage/index.html")

@app.post("/api/register")
async def register_user(request: Request):
    data = await request.json()
    username = data.get("username", "").strip()
    password = data.get("password")

    if not username or not password:
        return JSONResponse(content={"status": "error", "message": "Заполните все поля!"}, status_code=400)

    db = load_data()
    if username in db["users"]:
        return JSONResponse(content={"status": "error", "message": "Пользователь уже существует!"})

    db["users"][username] = {
        "password": password,
        "created_at": datetime.now().strftime("%d.%m.%Y"),
        "fastpanel": "false",
        "aitxt": "false",
        "wpm": 0,
        "acc": 0,
        "TotalFP": 0,
        "UnlockedBGs": ["1"],
        "Difficult": "Normal",
        "selectedTheme": "NightNeon",
        "stats_bestWpm": 0,
        "stats_totalTests": 0,
        "stats_totalWpmSum": 0,
        "stats_totalAccSum": 0,
        "stats_totalMistakes": 0,
        "stats_wpm_history": "[]",
        "key_stats": "{}"
    }
    save_data(db)
    return {"status": "success", "message": "Регистрация успешна!"}

@app.post("/api/login")
async def login_user(request: Request):
    data = await request.json()
    username = data.get("username", "").strip()
    password = data.get("password")

    db = load_data()
    user = db["users"].get(username)

    if not user or user.get("password") != password:
        return JSONResponse(content={"status": "error", "message": "Неверный никнейм или пароль!"})

    return {"status": "success", "message": "Вход выполнен успешно!"}

@app.post("/api/save_stats")
async def save_user_stats(request: Request):
    user_data = await request.json()
    username = user_data.get("username")
    
    if not username:
        return JSONResponse(content={"error": "Username not provided"}, status_code=400)

    db = load_data()
    if username not in db["users"]:
        db["users"][username] = {}

    for key, value in user_data.items():
        if key != "password":
            db["users"][username][key] = value
            
    save_data(db)
    return {"status": "success", "message": "Данные успешно синхронизированы!"}

@app.get("/api/get_stats/{username}")
def get_user_stats(username: str):
    db = load_data()
    user_info = db["users"].get(username)
    if user_info:
        safe_info = {k: v for k, v in user_info.items() if k != "password"}
        return safe_info
    return JSONResponse(content={"error": "User not found"}, status_code=404)

@app.get("/api/get_random_text")
def get_random_text():
    prompts = [
    # 1. Экономический / Технологический вектор
    "The rapid development of renewable energy technologies has fundamentally transformed the global economy. Experts note that",
    
    # 2. Социальный контекст
    "In recent years, technology has significantly altered how we process information and communicate. This shift is evident when",
    
    # 3. Бизнес / Психология
    "A fundamental aspect of effective problem-solving is the ability to adapt to changing environments. For example,",
    
    # 4. Наука / Футурология
    "When considering the future of space exploration, researchers must account for several major challenges, including",
    
    # 5. История / Медицина
    "One of the most important discoveries in modern science occurred when researchers finally realized that",
    
    # 6. Когнитивистика / Поведение
    "Human behavior is often influenced by underlying cognitive biases. Psychologists explain this phenomenon by demonstrating how",
    
    # 7. Астрономия / Природа
    "The universe is vast and largely unexplored. However, recent observations from advanced telescopes strongly suggest that",
    
    # 8. Индустрия ИИ
    "Artificial intelligence has become deeply integrated into everyday industrial applications. As a result, software developers are now focusing on",
    
    # 9. Образование / Нейробиология
    "Learning a new skill requires consistent practice and targeted feedback. Recent studies in neuroplasticity show that",
    
    # 10. Экология / Океанология
    "Deep in the ocean, we find complex ecosystems that thrive in extreme conditions. Marine biologists have recently discovered that"
    ]
    prompt = random.choice(prompts)
    try:
        result = generator(prompt, max_new_tokens=100, do_sample=True, temperature=1.1, top_k=40, top_p=0.9)
        gen_text = result[0]["generated_text"]
        clean_text = format_generated_text(gen_text)
        return {"text": clean_text}
    except Exception:
        return {"text": "Practice makes perfect. Keep typing to improve your typing speed and accuracy. Success is not final, failure is not fatal: it is the courage to continue that counts."}
     
@app.get("/api/leaderboard")
def get_leaderboard():
    db = load_data()
    users_data = db.get("users", {})
    leaderboard = []
    for username, data in users_data.items():
        best_wpm = data.get("stats_bestWpm") or data.get("bestWpm") or data.get("wpm") or 0
        total_fp = data.get("TotalFP") or 0
        leaderboard.append({ "username": username, "bestWpm": int(best_wpm), "totalFp": int(total_fp) })
    
    sorted_leaderboard = bubble_sort_leaderboard(leaderboard)
    return sorted_leaderboard[:10]

@app.get("/api/admin/data")
def get_admin_data():
    db = load_data()
    users_data = db.get("users", {})
    
    total_users = len(users_data)
    total_fp_on_server = 0
    total_tests_played = 0
    total_errors_made = 0
    
    users_list = []
    for username, data in users_data.items():
        total_fp_on_server += int(data.get("TotalFP") or 0)
        total_tests_played += int(data.get("stats_totalTests") or 0)
        total_errors_made += int(data.get("stats_totalMistakes") or 0)
        
        users_list.append({
            "username": username,
            "created_at": data.get("created_at", "Ранее"),
            "bestWpm": int(data.get("stats_bestWpm") or data.get("bestWpm") or 0),
            "TotalFP": int(data.get("TotalFP") or 0),
            "totalTests": int(data.get("stats_totalTests") or 0),
            "selectedTheme": data.get("selectedTheme", "NightNeon")
        })
        
    return {
        "status": "success",
        "metrics": {
            "totalUsers": total_users,
            "totalFp": total_fp_on_server,
            "totalTests": total_tests_played,
            "totalMistakes": total_errors_made
        },
        "users": users_list
    }

@app.post("/api/admin/edit_user")
async def admin_edit_user(request: Request):
    data = await request.json()
    target_username = data.get("target_username")
    field = data.get("field")  
    new_value = data.get("value")

    if not target_username or not field:
        return {"status": "error", "message": "Неверные параметры запроса"}

    db = load_data()
    if target_username in db["users"]:
        if field in ["TotalFP", "stats_bestWpm", "stats_totalTests"]:
            try:
                new_value = int(new_value)
            except ValueError:
                return {"status": "error", "message": "Значение должно быть числом!"}
                
        db["users"][target_username][field] = new_value
        save_data(db)
        return {"status": "success", "message": f"Поле {field} успешно обновлено!"}
        
    return {"status": "error", "message": "Пользователь не найден."}

@app.post("/api/admin/delete_user")
async def admin_delete_user(request: Request):
    data = await request.json()
    target_username = data.get("target_username")

    db = load_data()
    if target_username in db["users"]:
        db["users"].pop(target_username)
        save_data(db)
        return {"status": "success", "message": "Пользователь удален из базы данных!"}
        
    return {"status": "error", "message": "Пользователь не найден."}

@app.post("/api/change_username")
async def change_username(request: Request):
    data = await request.json()
    old_name = data.get("old_username")
    new_name = data.get("new_username", "").strip()

    if not old_name or not new_name:
        return {"status": "error", "message": "Никнейм не может быть пустым!"}

    db = load_data()
    if new_name in db["users"]:
        return {"status": "error", "message": "Этот никнейм уже занят!"}

    if old_name in db["users"]:
        db["users"][new_name] = db["users"].pop(old_name)
        db["users"][new_name]["username"] = new_name
        save_data(db)
        return {"status": "success", "new_username": new_name}
    
    return {"status": "error", "message": "Пользователь не найден."}

@app.post("/api/change_password")
async def change_password(request: Request):
    data = await request.json()
    username = data.get("username")
    new_pass = data.get("new_password")

    if not username or not new_pass or len(new_pass) < 3:
        return {"status": "error", "message": "Пароль слишком короткий!"}

    db = load_data()
    if username in db["users"]:
        db["users"][username]["password"] = new_pass
        save_data(db)
        return {"status": "success"}
    return {"status": "error", "message": "Пользователь не найден."}

@app.post("/api/reset_stats")
async def reset_stats(request: Request):
    data = await request.json()
    username = data.get("username")

    db = load_data()
    if username in db["users"]:
        db["users"][username].update({
            "wpm": 0, "acc": 0, "TotalFP": 0,
            "stats_bestWpm": 0, "stats_totalTests": 0,
            "stats_totalWpmSum": 0, "stats_totalAccSum": 0,
            "stats_totalMistakes": 0, "stats_wpm_history": "[]",
            "key_stats": "{}"
        })
        save_data(db)
        return {"status": "success"}
    return {"status": "error", "message": "Пользователь не найден."}

@app.post("/api/delete_account")
async def delete_account(request: Request):
    data = await request.json()
    username = data.get("username")

    db = load_data()
    if username in db["users"]:
        db["users"].pop(username)
        save_data(db)
        return {"status": "success"}
    return {"status": "error", "message": "Пользователь не найден."}

BOT_TOKEN = "8902350134:AAEhi-HEnk0sAEOk06iYKNt_iNlLLkY5Gy4"

bot = None
if BOT_TOKEN and ":" in BOT_TOKEN:
    try:
        bot = telebot.TeleBot(BOT_TOKEN)
    except Exception as e:
        print(f"Error: {e}")
else:
    print("No bot token.")

if bot:
    @bot.message_handler(commands=['start'])
    def send_welcome(message):
        welcome_text = (
            "👋 *Приветствую!*\n\n"
            "Я бот тренажёра **FastType** ⌨️\n\n"
            "🔹 `/reg [логин] [пароль]` — создать аккаунт.\n"
            "🔹 `/sign [логин] [пароль]` — войти и посмотреть статистику."
        )
        bot.send_message(message.chat.id, welcome_text, parse_mode="Markdown")

    @bot.message_handler(commands=['reg'])
    def register_via_bot(message):
        raw_args = message.text.replace("/reg", "").strip()
        raw_args = raw_args.replace(",", " ")
        parts = [p.strip() for p in raw_args.split() if p.strip()]

        if len(parts) < 2:
            bot.reply_to(message, "❌ Ошибка ввода! Пример: `/reg User 123`", parse_mode="Markdown")
            return

        username = parts[0]
        password = parts[1]
        db = load_data()
        
        if username in db["users"]:
            bot.reply_to(message, f"❌ Никнейм `{username}` занят!", parse_mode="Markdown")
            return

        db["users"][username] = {
            "password": password,
            "created_at": datetime.now().strftime("%d.%m.%Y"),
            "fastpanel": "false",
            "aitxt": "false",
            "wpm": 0,
            "acc": 0,
            "TotalFP": 0,
            "UnlockedBGs": ["1"],
            "Difficult": "Normal",
            "selectedTheme": "NightNeon",
            "stats_bestWpm": 0,
            "stats_totalTests": 0,
            "stats_totalWpmSum": 0,
            "stats_totalAccSum": 0,
            "stats_totalMistakes": 0,
            "stats_wpm_history": "[]",
            "key_stats": "{}"
        }
        save_data(db)
        bot.send_message(message.chat.id, f"🎉 Аккаунт `{username}` создан!", parse_mode="Markdown")

    @bot.message_handler(commands=['sign'])
    def login_via_bot(message):
        raw_args = message.text.replace("/sign", "").strip()
        raw_args = raw_args.replace(",", " ")
        parts = [p.strip() for p in raw_args.split() if p.strip()]

        if len(parts) < 2:
            bot.reply_to(message, "❌ Ошибка ввода! Пример: `/sign User 123`", parse_mode="Markdown")
            return

        username = parts[0]
        password = parts[1]
        db = load_data()
        user = db["users"].get(username)

        if not user or user.get("password") != password:
            bot.reply_to(message, "❌ Неверный логин или пароль.")
            return

        best_wpm = user.get("stats_bestWpm") or user.get("bestWpm") or user.get("wpm") or 0
        total_fp = user.get("TotalFP") or 0
        total_tests = user.get("stats_totalTests") or 0
        theme = user.get("selectedTheme") or "NightNeon"

        stats_card = (
            f"👤 *ИГРОК: {username}*\n"
            f"🎨 Тема: `{theme}`\n"
            f"📊 Тестов: `{total_tests}`\n"
            f"⚡ WPM: `{best_wpm}`\n"
            f"🪙 FP: `{total_fp}`"
        )
        bot.send_message(message.chat.id, stats_card, parse_mode="Markdown")

def run_bot():
    if bot:
        bot.infinity_polling()

app.mount("/", StaticFiles(directory="static", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    if bot:
        threading.Thread(target=run_bot, daemon=True).start()
    uvicorn.run(app, host="127.0.0.1", port=8000)