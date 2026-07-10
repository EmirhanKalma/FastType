document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const nameInput = document.getElementById("name");
    const passInput = document.getElementById("password");
    const passConfirmInput = document.getElementById("passwordagain");
    
    const err1 = document.getElementById("incorect"); 
    const err2 = document.getElementById("incorect2"); 
    const err3 = document.getElementById("incorect3"); 

    // 1. ОПРЕДЕЛЯЕМ ФУНКЦИЮ ПЕРЕКЛЮЧЕНИЯ (теперь она доступна везде)
    const initPasswordToggle = (inputId, toggleId) => {
        const passwordInput = document.getElementById(inputId);
        const toggleBtn = document.getElementById(toggleId);

        if (passwordInput && toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    toggleBtn.textContent = "Hide";
                } else {
                    passwordInput.type = "password";
                    toggleBtn.textContent = "Show";
                }
            });
        }
    };

    // 2. СРАЗУ АКТИВИРУЕМ КНОПКИ SHOW/HIDE ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
    initPasswordToggle("password", "toggle-pass1");
    initPasswordToggle("passwordagain", "toggle-pass2");

    // 3. ОБРАБОТЧИК КНОПКИ РЕГИСТРАЦИИ
    btn.addEventListener("click", async (e) => {
        e.preventDefault();

        err1.innerText = "";
        err2.innerText = "";
        err3.innerText = "";

        const username = nameInput.value.trim();
        const password = passInput.value;
        const passwordConfirm = passConfirmInput.value;

        if (!username) {
            err1.innerText = "Введите никнейм!";
            return;
        }
        if (password.length < 3) {
            err2.innerText = "Пароль слишком короткий!";
            return;
        }
        if (password !== passwordConfirm) {
            err3.innerText = "Пароли не совпадают!";
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: username, 
                    password: password 
                })
            });

            const data = await response.json();

            if (data.status === "error") {
                err1.innerText = data.message; 
            } 
            else if (data.status === "success") {
                localStorage.setItem("currentUser", username);
                window.location.href = "/MainTrainingPage/index.html"; 
            }
        } catch (error) {
            console.error("Ошибка сервера:", error);
            err1.innerText = "Ошибка соединения с сервером.";
        }
    });
});

console.log("Скрипт регистрации успешно загружен и распутан!");