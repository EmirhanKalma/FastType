// static/Settings/main.js

document.addEventListener("DOMContentLoaded", async () => {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    
    if (!username) {
        alert("Вы не вошли в аккаунт!");
        window.location.href = "/";
        return;
    }

    // Загружаем актуальную инфу с сервера
    try {
        const response = await fetch(`/api/get_stats/${username}`);
        if (response.status === 200) {
            const data = await response.json();
            document.getElementById("info-username").textContent = username;
            document.getElementById("info-date").textContent = data.created_at || "Ранее 10.07.2026";
        }
    } catch (e) {
        console.error(e);
    }

    // --- ОБРАБОТЧИК: СМЕНА НИКНЕЙМА ---
    document.getElementById("save-username-btn").onclick = async () => {
        const newName = document.getElementById("new-username-input").value.trim();
        const status = document.getElementById("username-status");

        if (!newName) {
            status.textContent = "Введите новый ник!";
            status.style.color = "red";
            return;
        }

        try {
            const response = await fetch('/api/change_username', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ old_username: username, new_username: newName })
            });
            const res = await response.json();

            if (res.status === "success") {
                // Обновляем текущую сессию
                localStorage.setItem("currentUser", res.new_username);
                localStorage.setItem("username", res.new_username);
                status.textContent = "Никнейм успешно изменен!";
                status.style.color = "green";
                setTimeout(() => location.reload(), 1000);
            } else {
                status.textContent = res.message;
                status.style.color = "red";
            }
        } catch (e) {
            status.textContent = "Ошибка сети.";
            status.style.color = "red";
        }
    };

    // --- ОБРАБОТЧИК: СМЕНА ПАРОЛЯ ---
    document.getElementById("save-password-btn").onclick = async () => {
        const newPass = document.getElementById("new-password-input").value;
        const status = document.getElementById("password-status");

        if (newPass.length < 3) {
            status.textContent = "Пароль слишком короткий!";
            status.style.color = "red";
            return;
        }

        try {
            const response = await fetch('/api/change_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, new_password: newPass })
            });
            const res = await response.json();

            if (res.status === "success") {
                status.textContent = "Пароль успешно обновлен!";
                status.style.color = "green";
                document.getElementById("new-password-input").value = "";
            } else {
                status.textContent = res.message;
                status.style.color = "red";
            }
        } catch (e) {
            status.textContent = "Ошибка сети.";
            status.style.color = "red";
        }
    };

    // --- ОБРАБОТЧИК: СБРОС СТАТИСТИКИ ---
    document.getElementById("reset-stats-btn").onclick = async () => {
        if (!confirm("Вы уверены, что хотите сбросить всю игровую статистику? Это действие необратимо!")) return;

        const status = document.getElementById("danger-status");
        try {
            const response = await fetch('/api/reset_stats', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username })
            });
            const res = await response.json();

            if (res.status === "success") {
                status.textContent = "Статистика успешно сброшена!";
                status.style.color = "green";
                // Стираем локальную статистику
                localStorage.setItem("TotalFP", "0");
                localStorage.setItem("stats_totalTests", "0");
                localStorage.setItem("stats_bestWpm", "0");
                localStorage.setItem("stats_totalWpmSum", "0");
                localStorage.setItem("stats_totalAccSum", "0");
                localStorage.setItem("stats_totalMistakes", "0");
                localStorage.setItem("stats_wpm_history", "[]");
                localStorage.setItem("key_stats", "{}");
            }
        } catch (e) {
            status.textContent = "Ошибка сети.";
            status.style.color = "red";
        }
    };

    // --- ОБРАБОТЧИК: УДАЛЕНИЕ АККАУНТА ---
    document.getElementById("delete-acc-btn").onclick = async () => {
        if (!confirm("ВНИМАНИЕ! Ваш аккаунт будет удален навсегда. Продолжить?")) return;

        try {
            const response = await fetch('/api/delete_account', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username })
            });
            const res = await response.json();

            if (res.status === "success") {
                localStorage.clear(); // Полностью очищаем память
                alert("Ваш аккаунт был успешно удален.");
                window.location.href = "/"; // Выкидываем на регистрацию
            }
        } catch (e) {
            alert("Ошибка сети при удалении.");
        }
    };
});