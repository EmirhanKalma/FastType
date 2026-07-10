document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const nameInput = document.getElementById("name");
    const passInput = document.getElementById("password");
    
    const err = document.getElementById("incorect"); // Вывод ошибок

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
    initPasswordToggle("password", "toggle-pass2");



    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        err.innerText = "";

        const username = nameInput.value.trim();
        const password = passInput.value;

        if (!username || !password) {
            err.innerText = "Заполните все поля!";
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.status === "error") {
                err.innerText = data.message; 
            } else if (data.status === "success") {
                localStorage.setItem("currentUser", username); // Запоминаем, кто вошел
                window.location.href = "/MainTrainingPage/index.html"; 
            }
        } catch (error) {
            console.error("Ошибка:", error);
            err.innerText = "Ошибка сервера.";
        }
    });
});