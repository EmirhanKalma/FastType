// static/Profile/main.js

document.addEventListener("DOMContentLoaded", async () => {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    
    let usernameDisplay = document.getElementById('user-name');
    if (usernameDisplay) {
        usernameDisplay.textContent = username ? `Добро пожаловать, ${username}` : "Гость";
    }

    if (!username) {
        console.warn("Пользователь не авторизован.");
        return;
    }

    try {
        const response = await fetch(`/api/get_stats/${username}`);
        if (response.status === 200) {
            const data = await response.json();

            // 1. Отрисовываем базовую статистику профиля (безопасно)
            renderBaseProfileStats(data);

            // 2. Отрисовываем тепловую карту клавиш (безопасно)
            renderKeyHeatmap(data.key_stats);

            // 3. Рассчитываем и разблокируем достижения (безопасно)
            checkAchievements(data);
        }
    } catch (e) {
        console.error("Ошибка загрузки профиля с сервера:", e);
    }
});

// Рендеринг базовой статистики с проверкой на null каждого элемента
function renderBaseProfileStats(data) {
    const totalTests = parseInt(data.stats_totalTests) || 0;
    const bestWpm = parseInt(data.stats_bestWpm) || 0;
    const totalWpmSum = parseInt(data.stats_totalWpmSum) || 0;
    const totalAccSum = parseInt(data.stats_totalAccSum) || 0;
    const totalFp = parseInt(data.TotalFP) || 0;
    const totalMistakes = parseInt(data.stats_totalMistakes) || 0;

    const avgWpm = totalTests > 0 ? Math.round(totalWpmSum / totalTests) : 0;
    const avgAcc = totalTests > 0 ? Math.round(totalAccSum / totalTests) : 0;

    const setElText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    setElText("profile-tests", totalTests);
    setElText("profile-avg-wpm", avgWpm);
    setElText("profile-best-wpm", bestWpm);
    setElText("profile-avg-acc", avgAcc + "%");
    setElText("profile-fp", totalFp);
    setElText("profile-total-mistakes", totalMistakes);
}

// Построение тепловой карты с защитой от ошибок
function renderKeyHeatmap(keyStatsString) {
    let keyStats = {};
    try {
        keyStats = typeof keyStatsString === "string" ? JSON.parse(keyStatsString) : (keyStatsString || {});
    } catch (e) {
        console.error("Ошибка парсинга key_stats:", e);
    }

    let maxPresses = 1;
    for (let char in keyStats) {
        if (keyStats[char].presses > maxPresses) {
            maxPresses = keyStats[char].presses;
        }
    }

    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#6c7cff';

    const keyElements = document.querySelectorAll(".h-key");
    keyElements.forEach((keyEl) => {
        const char = keyEl.getAttribute("data-key");
        const stats = keyStats[char];

        if (stats && stats.presses > 0) {
            const heatRatio = stats.presses / maxPresses;
            const opacity = 0.15 + (heatRatio * 0.7);
            
            const calculatedColor = colorToRgba(mainColor, opacity);
            keyEl.style.backgroundColor = calculatedColor;
            keyEl.style.borderColor = mainColor;
            keyEl.style.boxShadow = `0 0 10px ${colorToRgba(mainColor, opacity * 0.5)}`;
        }

        keyEl.onmouseenter = () => {
            const instr = document.getElementById("key-instruction");
            const dataBox = document.getElementById("key-stats-data");
            const nameEl = document.getElementById("stat-key-name");
            const pressEl = document.getElementById("stat-key-presses");
            const errEl = document.getElementById("stat-key-errors");
            const accEl = document.getElementById("stat-key-accuracy");

            if (instr) instr.style.display = "none";
            if (dataBox) dataBox.style.display = "block";
            if (nameEl) nameEl.textContent = char === "SPACE" ? "SPACE (Пробел)" : char;
            
            if (stats) {
                const accuracy = stats.presses > 0 ? Math.round(((stats.presses - stats.errors) / stats.presses) * 100) : 100;
                if (pressEl) pressEl.textContent = stats.presses;
                if (errEl) errEl.textContent = stats.errors;
                if (accEl) accEl.textContent = (accuracy < 0 ? 0 : accuracy) + "%";
            } else {
                if (pressEl) pressEl.textContent = "0";
                if (errEl) errEl.textContent = "0";
                if (accEl) accEl.textContent = "100%";
            }
        };
    });
}

// Защищенный алгоритм разблокировки достижений
function checkAchievements(data) {
    const totalTests = parseInt(data.stats_totalTests) || 0;
    const bestWpm = parseInt(data.stats_bestWpm) || 0;
    const totalFp = parseInt(data.TotalFP) || 0;
    const totalMistakes = parseInt(data.stats_totalMistakes) || 0;

    const unlockAch = (id) => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("locked");
    };

    if (totalTests >= 1) unlockAch("ach-first");
    if (bestWpm >= 70) unlockAch("ach-speed");
    if (totalTests >= 1 && totalMistakes === 0) unlockAch("ach-sniper");
    if (totalFp >= 200) unlockAch("ach-rich");
}

// Умный парсер цвета (HEX/RGB)
function colorToRgba(color, alpha) {
    if (!color) return `rgba(108, 124, 255, ${alpha})`;
    if (color.startsWith("rgb")) {
        return color.replace("rgb(", "rgba(").replace(")", `, ${alpha})`).replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, `rgba($1,$2,$3,${alpha})`);
    }
    let hex = color.replace('#', '').trim();
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}