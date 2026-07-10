const themes = {
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
  Dracula: { bg: "#282a36", text: "#f8f8f2", panel: "#44475a", sub: "#6272a4", main: "#bd93f9" },
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
};

const hotkeysData = [
  { name: "Сохранить изменения", key: "s", ctrl: true },
  { name: "Сохранить всё", key: "s", ctrl: true, shift: true },
  { name: "Поиск", key: "f", ctrl: true },
  { name: "Найти далее", key: "g", ctrl: true },
  { name: "Найти ранее", key: "g", ctrl: true, shift: true },
  { name: "Замена", key: "h", ctrl: true },
  { name: "Выделить всё", key: "a", ctrl: true },
  { name: "Копировать", key: "c", ctrl: true },
  { name: "Вставить", key: "v", ctrl: true },
  { name: "Вырезать", key: "x", ctrl: true },
  { name: "Отменить", key: "z", ctrl: true },
  { name: "Повторить", key: "y", ctrl: true },
  { name: "Печать", key: "p", ctrl: true },
  { name: "Жирный шрифт", key: "b", ctrl: true },
  { name: "Курсив", key: "i", ctrl: true },
  { name: "Подчеркивание", key: "u", ctrl: true },
  { name: "Переименовать объект", key: "f2" },
  { name: "Обновить содержимое", key: "f5" },
  { name: "Свойства файла", key: "Enter", alt: true },
  { name: "Удалить в корзину", key: "Backspace", ctrl: true },
  { name: "Удалить безвозвратно", key: "Delete", shift: true },
  { name: "Создать новую папку", key: "n", ctrl: true, shift: true },
  { name: "Слово влево", key: "Left", ctrl: true },
  { name: "Слово вправо", key: "Right", ctrl: true },
  { name: "Начало документа", key: "Home", ctrl: true },
  { name: "Конец документа", key: "End", ctrl: true },
  { name: "Выделить слово влево", key: "Left", ctrl: true, shift: true },
  { name: "Выделить слово вправо", key: "Right", ctrl: true, shift: true },
  { name: "Выделить до начала", key: "Home", ctrl: true, shift: true },
  { name: "Выделить до конца", key: "End", ctrl: true, shift: true },
  { name: "Удалить слово слева", key: "Backspace", ctrl: true },
  { name: "Удалить слово справа", key: "Delete", ctrl: true },
  { name: "Верхний регистр", key: "u", ctrl: true, shift: true },
  { name: "Нижний регистр", key: "l", ctrl: true, shift: true },
  { name: "Дублировать строку", key: "d", ctrl: true },
  { name: "Удалить строку", key: "k", ctrl: true, shift: true },
  { name: "Переместить строку вверх", key: "Up", alt: true },
  { name: "Переместить строку вниз", key: "Down", alt: true },
  { name: "Комментировать код", key: "/", ctrl: true },
  { name: "Форматировать код", key: "f", alt: true, shift: true },
  { name: "Свернуть блок кода", key: "[", ctrl: true, shift: true },
  { name: "Развернуть блок кода", key: "]", ctrl: true, shift: true },
  { name: "Автодополнение", key: "Space", ctrl: true },
  { name: "Палитра команд", key: "p", ctrl: true, shift: true },
  { name: "Быстрая фиксация (Quick Fix)", key: ".", ctrl: true },
  { name: "Перейти к определению", key: "f12" },
  { name: "Показать ссылки", key: "f12", shift: true },
  { name: "Снять выделение", key: "d", ctrl: true },
  { name: "Трансформировать", key: "t", ctrl: true },
  { name: "Инвертировать цвета", key: "i", ctrl: true },
  { name: "Новый слой", key: "n", ctrl: true, shift: true },
  { name: "Сгруппировать", key: "g", ctrl: true },
  { name: "Разгруппировать", key: "g", ctrl: true, shift: true },
  { name: "Увеличить масштаб", key: "+", ctrl: true },
  { name: "Уменьшить масштаб", key: "-", ctrl: true },
  { name: "Масштаб 100%", key: "0", ctrl: true },
  { name: "На передний план", key: "]", ctrl: true, shift: true },
  { name: "На задний план", key: "[", ctrl: true, shift: true },
  { name: "Кривые (Curves)", key: "m", ctrl: true },
  { name: "Уровни (Levels)", key: "l", ctrl: true },
  { name: "Цветовой баланс", key: "b", ctrl: true },
  { name: "Линейка", key: "r", ctrl: true },
  { name: "Скрыть направляющие", key: ";", ctrl: true },
  { name: "Прервать процесс в терминале", key: "c", ctrl: true },
  { name: "Очистить терминал", key: "k", ctrl: true },
  { name: "В начало строки терминала", key: "a", ctrl: true },
  { name: "В конец строки терминала", key: "e", ctrl: true },
  { name: "Диспетчер задач", key: "Escape", ctrl: true, shift: true },
  { name: "Скриншот области", key: "4", ctrl: true, shift: true },
  { name: "Показать справку", key: "f1" },
  { name: "Контекстное меню", key: "f10", shift: true },
  { name: "Отступ (Tab)", key: "Tab" },
  { name: "Удалить отступ", key: "Tab", shift: true },
  { name: "Перейти к следующей ошибке", key: "f8" },
  { name: "Блокировка прокрутки", key: "Scroll Lock" },
  { name: "Приостановить выполнение", key: "Pause" },
  { name: "Вставить как текст без форматирования", key: "v", ctrl: true, shift: true },
  { name: "Свернуть все папки", key: "ArrowLeft", ctrl: true, alt: true },
  { name: "Показать скрытые файлы", key: ".", ctrl: true, shift: true },
  { name: "Спецсимволы и эмодзи", key: "Space", ctrl: true, alt: true }
];

let score = 0;
let currentTask = null;
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

const applyTheme = () => {
    const themeKey = localStorage.getItem("selectedTheme") || "NightNeon";
    const theme = themes[themeKey];
    if (theme) {
        const root = document.documentElement;
        root.style.setProperty("--bg-color", theme.bg);
        root.style.setProperty("--text-color", theme.text);
        root.style.setProperty("--panel-color", theme.panel);
        root.style.setProperty("--sub-color", theme.sub);
        root.style.setProperty("--main-color", theme.main);
        document.body.style.backgroundColor = theme.bg;
    }
};



function renderKeys() {
    const container = document.getElementById('visual-keys');
    if (!container) return;
    container.innerHTML = '';
    const mod = isMac ? 'CMD' : 'CTRL';
    let keysToShow = [];
    if (currentTask.ctrl) keysToShow.push(mod);
    if (currentTask.alt) keysToShow.push('ALT');
    if (currentTask.shift) keysToShow.push('SHIFT');
    let keyName = currentTask.key.toUpperCase();
    if (keyName === " ") keyName = "SPACE";
    keysToShow.push(keyName);
    keysToShow.forEach(k => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key-cap';
        keyDiv.textContent = k;
        container.appendChild(keyDiv);
    });
}

function nextTask() {
    currentTask = hotkeysData[Math.floor(Math.random() * hotkeysData.length)];
    const taskElement = document.getElementById('task-name');
    if (taskElement) {
        taskElement.textContent = currentTask.name;
        taskElement.style.animation = 'none';
        taskElement.offsetHeight; 
        taskElement.style.animation = 'fadeIn 0.3s ease';
    }
    renderKeys();
}

function skipTask() {
    const card = document.getElementById('hotkey-card');
    card.style.borderColor = '#ff4444';
    setTimeout(() => {
        card.style.borderColor = 'var(--sub-color)';
        nextTask();
    }, 200);
}

window.addEventListener('keydown', (e) => {
    const forbidden = ['s','t','w','f','n','p','d','h','g','j'];
    if ((e.ctrlKey || e.metaKey) && forbidden.includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (e.key === "Escape") {
        e.preventDefault();
        skipTask();
        return;
    }
    if (!currentTask) return;
    const modMatch = (isMac ? e.metaKey : e.ctrlKey) === !!currentTask.ctrl;
    const altMatch = e.altKey === !!currentTask.alt;
    const shiftMatch = e.shiftKey === !!currentTask.shift;
    let pressedKey = e.key.toLowerCase();
    let targetKey = currentTask.key.toLowerCase();
    if (pressedKey === "arrowleft") pressedKey = "left";
    if (pressedKey === "arrowright") pressedKey = "right";
    if (pressedKey === "arrowup") pressedKey = "up";
    if (pressedKey === "arrowdown") pressedKey = "down";
    if (pressedKey === " ") pressedKey = "space";
    if (modMatch && altMatch && shiftMatch && pressedKey === targetKey) {
        e.preventDefault();
        score += 10;
        const scoreElement = document.getElementById('score');
        if (scoreElement) scoreElement.textContent = score.toString().padStart(3, '0');
        const card = document.getElementById('hotkey-card');
        card.style.borderColor = 'var(--main-color)';
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.borderColor = 'var(--sub-color)';
            card.style.transform = 'scale(1)';
            nextTask();
        }, 100);
    }
}, true);

window.onload = () => {
    applyTheme();
    nextTask();
};







