// static/sync.js

const themesList = {
  NightNeon: { bg: "#0b0f1a", text: "#eaeaff", panel: "#161b2e", sub: "#2a2f4a", main: "#6c7cff" },
  TechBlue: { bg: "#001233", text: "#ffffff", panel: "#001845", sub: "#002855", main: "#00a6fb" },
  DarkGraphite: { bg: "#1c1c1c", text: "#f5f5f5", panel: "#262626", sub: "#52525b", main: "#a1a1aa" },
  LightMinimal: { bg: "#f2f2f2", text: "#1a1a1a", panel: "#ffffff", sub: "#a1a1aa", main: "#2563eb" },
  PurpleCyber: { bg: "#0f051d", text: "#ede7ff", panel: "#1a0b2e", sub: "#3b1b5e", main: "#bc95ff" },
  GreenCode: { bg: "#08140e", text: "#cfffe1", panel: "#0d261a", sub: "#144029", main: "#4ade80" },
  SandComfort: { bg: "#fdf6e3", text: "#4a3f35", panel: "#eee8d5", sub: "#ddd6c1", main: "#b58900" },
  RedAccent: { bg: "#1a0505", text: "#ffffff", panel: "#2d0a0a", sub: "#4a1010", main: "#ef4444" },
  ColdBlueGray: { bg: "#0f172a", text: "#e8ecf1", panel: "#1e293b", sub: "#334155", main: "#38bdf8" },
  BlackPremium: { bg: "#000000", text: "#d4af37", panel: "#111111", sub: "#1a1a1a", main: "#facc15" },
  Oceanic: { bg: "#001b2e", text: "#d1f2ff", panel: "#00253e", sub: "#163a5f", main: "#00d4ff" },
  DeepForest: { bg: "#0a1a0a", text: "#e0ffe0", panel: "#122612", sub: "#1b331b", main: "#2ecc71" },
  Midnight: { bg: "#050505", text: "#f0f0f0", panel: "#111111", sub: "#222222", main: "#ffffff" },
  Sakura: { bg: "#2d1b24", text: "#ffe0ed", panel: "#3d2631", sub: "#5e3a4b", main: "#ff85a1" },
  Solarized: { bg: "#002b36", text: "#839496", panel: "#073642", sub: "#586e75", main: "#268bd2" },
  Nord: { bg: "#2e3440", text: "#eceff4", panel: "#3b4252", sub: "#4c566a", main: "#88c0d0" },
  Dracula: { bg: "#282a36", text: "#f8f8f2", panel: "#44475a", sub: "#bd93f9", sub: "#6272a4", main: "#bd93f9" },
  Monokai: { bg: "#272822", text: "#f8f8f2", panel: "#3e3d32", sub: "#75715e", main: "#a6e22e" },
  Cyberpunk: { bg: "#00040d", text: "#00ff9f", panel: "#001a1a", sub: "#003b46", main: "#f5ed00" },
  Vaporwave: { bg: "#2d0a4e", text: "#ff71ce", panel: "#3d1266", sub: "#4e148c", main: "#01cdfe" },
  Retro: { bg: "#322d29", text: "#d6d5c9", panel: "#3e3935", sub: "#625c58", main: "#a22c29" },
  Paper: { bg: "#eeeeee", text: "#444444", panel: "#e0e0e0", sub: "#cccccc", main: "#222222" },
  Copper: { bg: "#1b1212", text: "#e2b49a", panel: "#261a1a", sub: "#3d2b2b", main: "#b87333" },
  Lavender: { bg: "#1a1a2e", text: "#e6e6fa", panel: "#24244a", sub: "#30305a", main: "#9370db" },
  Blood: { bg: "#110000", text: "#ff0000", panel: "#220000", sub: "#440000", main: "#880000" },
  Lime: { bg: "#1a1f10", text: "#e0f0d0", panel: "#232a16", sub: "#303b1e", main: "#a4c639" },
  Coffee: { bg: "#2b1700", text: "#f5f5dc", panel: "#3d2100", sub: "#4a3000", main: "#6f4e37" },
  Ice: { bg: "#e0f7fa", text: "#006064", panel: "#b2ebf2", sub: "#80deea", main: "#00bcd4" },
  Slate: { bg: "#0f172a", text: "#f1f5f9", panel: "#1e293b", sub: "#334155", main: "#94a3b8" },
  Bumblebee: { bg: "#222222", text: "#ffffff", panel: "#2d2d2d", sub: "#3d3d3d", main: "#facc15" },
  Marshmallow: { bg: "#f8bbd0", text: "#880e4f", panel: "#fce4ec", sub: "#f48fb1", main: "#c2185b" },
  Toxic: { bg: "#000000", text: "#39ff14", panel: "#0d0d0d", sub: "#1a1a1a", main: "#32cd32" },
  Blueprint: { bg: "#1a3a6c", text: "#ffffff", panel: "#204682", sub: "#2a4a7c", main: "#8eaadb" },
  Carbon: { bg: "#161616", text: "#f4f4f4", panel: "#222222", sub: "#262626", main: "#393939" },
  Sunset: { bg: "#2d142c", text: "#ee4540", panel: "#3e1c3d", sub: "#510a32", main: "#c72c41" },
  Matrix: { bg: "#000000", text: "#00ff41", panel: "#001500", sub: "#003b00", main: "#008f11" },
  Ghost: { bg: "#f5f5f5", text: "#333333", panel: "#eeeeee", sub: "#e0e0e0", main: "#9e9e9e" },
  Mars: { bg: "#451804", text: "#ff9d6f", panel: "#5a2005", sub: "#692a08", main: "#c1440e" },
  NeonPink: { bg: "#1a001a", text: "#ffffff", panel: "#2a002a", sub: "#4d004d", main: "#ff00ff" },
  GoldenRed: { bg: "#4a0000", text: "#ffd700", panel: "#5d0000", sub: "#7a0000", main: "#ffd700" },
  DeepSea: { bg: "#011627", text: "#d6deeb", panel: "#0b2942", sub: "#1d3b53", main: "#82aaff" },
  Emerald: { bg: "#002b1b", text: "#d1fae5", panel: "#003d27", sub: "#064e3b", main: "#10b981" },
  Synthwave: { bg: "#241b2f", text: "#ff7edb", panel: "#2f233d", sub: "#4d2d52", main: "#36f9f6" },
  Terra: { bg: "#3d2b1f", text: "#f2e9e4", panel: "#4a3728", sub: "#5a4534", main: "#d4a373" },
  Moonlight: { bg: "#1e2030", text: "#cad3f5", panel: "#24273a", sub: "#363a4f", main: "#8aadf4" },
  RosePine: { bg: "#191724", text: "#e0def4", panel: "#1f1d2e", sub: "#26233a", main: "#ebbcba" },
  Material: { bg: "#263238", text: "#eceff1", panel: "#2e3d44", sub: "#37474f", main: "#80cbc4" },
  Abyss: { bg: "#000c18", text: "#6688aa", panel: "#001529", sub: "#002244", main: "#114477" },
  Kuro: { bg: "#121212", text: "#888888", panel: "#1a1a1a", sub: "#222222", main: "#444444" },
  Cream: { bg: "#fffdd0", text: "#5d4037", panel: "#f3e5ab", sub: "#e6dfb1", main: "#8d6e63" },
  HyperGlass: { bg: "rgba(15, 15, 15, 0.4)", text: "#ffffff", panel: "rgba(255, 255, 255, 0.05)", sub: "rgba(255, 255, 255, 0.1)", main: "#00d4ff" }
};

// ====================================================================
// УНИВЕРСАЛЬНЫЙ СИСТЕМНЫЙ ДИЗАЙНЕР
// ==========================================
function applySystemVisualsDirect(data) {
    if (!data) return;

    const themeKey = data.selectedTheme || "NightNeon";
    const theme = themesList[themeKey];
    const root = document.documentElement;

    if (theme && root) {
        root.style.setProperty("--bg-color", theme.bg);
        root.style.setProperty("--text-color", theme.text);
        root.style.setProperty("--panel-color", theme.panel);
        root.style.setProperty("--sub-color", theme.sub);
        root.style.setProperty("--main-color", theme.main);
    }

    const bodyContainer = document.getElementById("bgContainer") || document.body;
    if (bodyContainer) {
        const customImg = data.customImgUrl;
        const bgColor = data.bagroundcolor;

        // 🛡️ БРОНЯ: Авто-исправление бага с Set/See при загрузке страницы
        let activeEffect = data.selectedEffect;
        if (activeEffect && activeEffect.startsWith('Set')) {
            activeEffect = activeEffect.replace('Set', 'See');
        }

        if (customImg && activeEffect === "CustomImage") {
            bodyContainer.style.backgroundImage = `url('${customImg}')`;
            bodyContainer.style.backgroundSize = "cover";
            bodyContainer.style.backgroundPosition = "center";
        } else if (bgColor) {
            bodyContainer.style.backgroundColor = bgColor;
            bodyContainer.style.backgroundImage = "none";
        } else if (theme) {
            bodyContainer.style.backgroundColor = theme.bg;
            bodyContainer.style.backgroundImage = "none";
        }

        // ЗАПУСК АНИМАЦИИ
        if (activeEffect && typeof stopAnimation === "function") {
            const mainCanvasId = document.getElementById("bgCanvas") ? "bgCanvas" : "sakuraCanvasMain";
            const mainContainerId = "bgContainer";

            const effectMap = {
                "SeeSakuraBtn": "startSakura",
                "SeeRainBtn": "startRain",
                "SeeStarfallBtn": "startStarfall",
                "SeeMatrixBtn": "startMatrix",
                "SeeLeavesBtn": "startLeaves",
                "SeeBubblesBtn": "startBubbles",
                "SeeSparksBtn": "startSparks",
                "SeeSnowBtn": "startSnow",
                "SeeFirefliesBtn": "startFireflies",
                "SeeNodesBtn": "startNodes",
                "SeePlasmaBtn": "startPlasma",
                "SeeFogBtn": "startFog",
                "SeeBtn13": "startComet"
            };

            const funcName = effectMap[activeEffect];
            if (funcName && typeof window[funcName] === "function") {
                stopAnimation(mainCanvasId);
                const canvasEl = document.getElementById(mainCanvasId);
                if (canvasEl) canvasEl.style.opacity = "1";
                window[funcName](mainCanvasId, mainContainerId);
            }
        }
    }

    const keys = document.querySelectorAll(".key, .space");
    const kBg = data.baground;
    const kColor = data.ColorKey;
    const kBord = data.BorderColor;
    const kOpac = data.KeyOpacity;
    const kShadow = data.BoxShadowKey;

    keys.forEach((key) => {
        key.style.background = kBg || (theme ? theme.sub : "");
        key.style.color = kColor || (theme ? theme.text : "");
        key.style.borderColor = kBord || (theme ? theme.main : "");
        key.style.opacity = kOpac || "1";
        if (kShadow) {
            key.style.boxShadow = kShadow === "none" ? "none" : `0 4px 0 ${kShadow}`;
        } else if (theme) {
            key.style.boxShadow = `0 4px 0 ${theme.bg}`;
        }
    });

    const keyboard = document.getElementById("keyboard");
    if (keyboard) {
        const kSize = data.size;
        if (kSize) keyboard.style.scale = kSize;
        const kSeen = data.Seen;
        keyboard.style.opacity = kSeen === "hidden" ? "0" : "1";
    }
}

// ==========================================
// ФУНКЦИИ СИНХРОНИЗАЦИИ С СЕРВЕРОМ
// ==========================================
async function syncLoad() {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    if (!username) return;

    try {
        const response = await fetch(`/api/get_stats/${username}`);
        if (response.status === 200) {
            const data = await response.json();
            for (let key in data) {
                if (Array.isArray(data[key]) || typeof data[key] === 'object') {
                    localStorage.setItem(key, JSON.stringify(data[key]));
                } else {
                    localStorage.setItem(key, data[key]);
                }
            }
            if (data.TotalFP !== undefined) localStorage.setItem("TotalFP", data.TotalFP);
            if (data.Difficult !== undefined) localStorage.setItem("Difficult", data.Difficult);
            if (data.timevalue !== undefined) localStorage.setItem("timevalue", data.timevalue);
        }
    } catch (e) {
        console.error("Ошибка автозагрузки с сервера:", e);
    }
}

async function syncSave() {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    if (!username) return;

    // 🛡️ БРОНЯ: Авто-исправление бага с Set/See при сохранении на сервер!
    let correctEffect = localStorage.getItem("selectedEffect") || "";
    if (correctEffect.startsWith("Set")) {
        correctEffect = correctEffect.replace("Set", "See");
        localStorage.setItem("selectedEffect", correctEffect); // Сразу чиним и в локальной памяти
    }

    const payload = {
        username: username,
        TotalFP: parseInt(localStorage.getItem("TotalFP")) || 0,
        fastpanel: localStorage.getItem("fastpanel") || "false",
        stats_totalTests: parseInt(localStorage.getItem("stats_totalTests")) || 0,
        stats_bestWpm: parseInt(localStorage.getItem("stats_bestWpm")) || 0,
        stats_totalWpmSum: parseInt(localStorage.getItem("stats_totalWpmSum")) || 0,
        stats_totalAccSum: parseInt(localStorage.getItem("stats_totalAccSum")) || 0,
        stats_totalMistakes: parseInt(localStorage.getItem("stats_totalMistakes")) || 0,
        stats_wpm_history: localStorage.getItem("stats_wpm_history") || "[]",
        key_stats: localStorage.getItem("key_stats") || "{}",
        Difficult: localStorage.getItem("Difficult") || "Normal",
        timevalue: localStorage.getItem("timevalue") || "60",
        Time: localStorage.getItem("Time") || "60",
        UnlockedBGs: localStorage.getItem("UnlockedBGs") || '["1"]',
        ActiveBackground: localStorage.getItem("ActiveBackground") || "1",
        selectedTheme: localStorage.getItem("selectedTheme") || "NightNeon",
        bagroundcolor: localStorage.getItem("bagroundcolor") || "",
        baground: localStorage.getItem("baground") || "none",
        customImgUrl: localStorage.getItem("customImgUrl") || "",
        selectedEffect: correctEffect, // <--- Отправляем 100% правильный ключ!
        size: localStorage.getItem("size") || "1",
        KeyOpacity: localStorage.getItem("KeyOpacity") || "1",
        BoxShadowKey: localStorage.getItem("BoxShadowKey") || "",
        BorderColor: localStorage.getItem("BorderColor") || "",
        ColorKey: localStorage.getItem("ColorKey") || "",
        Seen: localStorage.getItem("Seen") || "visible",
        textcolor: localStorage.getItem("textcolor") || "#ffffff"
    };

    try {
        const response = await fetch('/api/save_stats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        await response.json();
    } catch (e) {
        console.error("Ошибка синхронизации:", e);
    }
}

async function saveSettingToServer(key, value) {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    if (!username) return;

    localStorage.setItem(key, value);

    const payload = {
        username: username,
        [key]: value
    };

    try {
        await fetch('/api/save_stats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Ошибка мгновенного сохранения настройки:", e);
    }
}

// ==========================================
// АВТОЗАПУСК
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    
    if (username) {
        try {
            const response = await fetch(`/api/get_stats/${username}`);
            if (response.status === 200) {
                const serverData = await response.json();
                applySystemVisualsDirect(serverData);
            }
        } catch (e) {
            console.error(e);
        }
    }

    // ПАСХАЛКА ДЛЯ АДМИНА
    const versionEl = document.querySelector(".Version");
    if (versionEl) {
        let clickCount = 0;
        let clickTimer;
        versionEl.style.cursor = "pointer";
        versionEl.style.userSelect = "none";
        versionEl.style.webkitUserSelect = "none"; 

        versionEl.addEventListener("click", () => {
            clickCount++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { clickCount = 0; }, 2000);

            if (clickCount >= 5) {
                clickCount = 0;
                clearTimeout(clickTimer);
                versionEl.style.transition = "all 0.1s ease";
                versionEl.style.color = "#ff4500";
                versionEl.style.textShadow = "0 0 15px #ff4500";

                setTimeout(() => {
                    versionEl.style.color = "";
                    versionEl.style.textShadow = "";
                    window.location.href = "/Admin/index.html";
                }, 400);
            }
        });
    }
});