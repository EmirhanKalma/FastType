// static/KeyboardEditor/main.js

const keyboard = document.getElementById("keyboard");
const keys = document.querySelectorAll(".key, .space");
const btn = document.getElementById("fullscreenBtn");
const keyboardSet = document.getElementById("keyboardset");
const inputtext = document.getElementById("inputtext");
const colorchoose = document.getElementById("colorchoose");

// Темы теперь берутся глобально из themesList (объявленного в sync.js)
const applyStyles = () => {
  const themeKey = localStorage.getItem("selectedTheme") || "NightNeon";
  const theme = themesList[themeKey];
  const root = document.documentElement;

  if (theme) {
    root.style.setProperty("--bg-color", theme.bg);
    root.style.setProperty("--text-color", theme.text);
    root.style.setProperty("--panel-color", theme.panel);
    root.style.setProperty("--sub-color", theme.sub);
    root.style.setProperty("--main-color", theme.main);

    const body = document.getElementById("bgContainer");
    if (body) body.style.backgroundColor = theme.bg;
  }
};

const setTheme = async (themeName) => {
  if (themesList[themeName]) {
    if (typeof saveSettingToServer === "function") {
        await saveSettingToServer("selectedTheme", themeName);
    } else {
        localStorage.setItem("selectedTheme", themeName);
    }
    applyStyles();
  }
};

document.addEventListener("DOMContentLoaded", applyStyles);

const getKeyElement = (code) =>
  document.querySelector(`[data-key="${code}"]`) ||
  (code === "Space" ? document.getElementById("space") : null);

const typeChar = (char) => {
  const input = document.querySelector(".inpt");
  if (!input) return;
  const textToInsert = char === "Space" ? " " : char;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value =
    input.value.slice(0, start) + textToInsert + input.value.slice(end);
  input.focus();
  input.selectionStart = input.selectionEnd = start + textToInsert.length;
};

const handleFullscreenChange = () => {
  if (document.fullscreenElement) {
    if (!document.querySelector(".inpt")) {
      let input = document.createElement("textarea");
      input.className = "inpt";
      inputtext.appendChild(input);
      input.style.marginBottom = "100px";

      let p = document.createElement("p");
      p.textContent = "Цвет текста";
      let colorinput = document.createElement("input");
      colorinput.type = "color";
      colorinput.className = "colorinpt";

      colorchoose.append(p, colorinput);

      let savedColor = localStorage.getItem("textcolor") || "#ffffff";
      input.style.color = savedColor;
      colorinput.value = savedColor;
      btn.textContent = "Скрыть";

      colorinput.addEventListener("input", () => {
        input.style.color = colorinput.value;
        localStorage.setItem("textcolor", colorinput.value);
      });
      input.focus();
    }
  } else {
    btn.textContent = "Раскрыть на весь экран";
    inputtext.innerHTML = "";
    colorchoose.innerHTML = "";
    colorchoose.style.overflow = "hidden";
  }
};

if (btn) {
  btn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      keyboardSet.requestFullscreen().catch((err) => console.log(err.message));
    } else {
      document.exitFullscreen();
    }
  });
}
document.addEventListener("fullscreenchange", handleFullscreenChange);

// Функция установки градиента клавиатуры с сохранением на сервер
function setKB(gradient) {
  if (typeof saveSettingToServer === "function") {
    saveSettingToServer("baground", gradient);
  } else {
    localStorage.setItem("baground", gradient);
  }
  keys.forEach((key) => {
    key.style.transition = "1.2s";
    key.style.background = gradient;
  });
}

window.Red = () => setKB("linear-gradient(90deg, #000000, #75151d, #000000)");
window.Yellow = () => setKB("linear-gradient(90deg,#ffaa00,#000000)");
window.Blue = () => setKB("linear-gradient(90deg,#3d4052,#09090c)");
window.Black = () => setKB("linear-gradient(90deg,#333333,#000000)");
window.Shadow = () =>
  setKB("linear-gradient(90deg,#000000,#1a1919,#4c484a,#272626,#000000)");
window.BlueOne = () => setKB("linear-gradient(90deg,#354e69,#000000)");
window.GreayBlue = () =>
  setKB("linear-gradient(90deg, #0b0d0f,#1a1d21,#292e36)");
window.BlackGrey = () => setKB("linear-gradient(90deg,#363940,#10151b)");
window.onefive = () => setKB("linear-gradient(90deg, #363940,#10151b)");
window.onesix = () => setKB("linear-gradient(90deg, #0b0d0f,#1a1d21,#292e36)");
window.oneseven = () => setKB("linear-gradient(90deg, #2e2e2e,#fa002e)");
window.oneeight = () =>
  setKB("linear-gradient(90deg, #d3d3d3,#0099ff,#262626)");
window.onenine = () => setKB("linear-gradient(10deg, #7c3c74,#3ea389,#cadeca)");
window.oneten = () => setKB("linear-gradient(90deg, #409d8e,#0093da,#ad57d1)");
window.oneeleven = () =>
  setKB("linear-gradient(90deg, #0887d8,#ef5795,#ffdf0f)");
window.None = () => setKB("none");

window.one = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #ff5196,#ff1a3d,#ff7913)");
window.two = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #3b111d,#564952,#83998d,#bcdda4,#e5f9bc)");
window.three = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #f1ae87,#f6908c,#e976a4,#c16cc4,#6a71de)");
window.four = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #ffba08,#ff1b3a,#370617)");
window.five = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #6d09f4,#cc00a9,#dc1571)");
window.six = () => saveSettingToServer("bagroundhover", "linear-gradient(180deg, #7300ff,#4a3dff,#009dff,#00ff9d)");
window.seven = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #7806ea,#cc64ce,#c0b7cc)");
window.eight = () => saveSettingToServer("bagroundhover", "linear-gradient(90deg, #250055,#5200a3,#6600ff,#3e00b3,#070055)");

keys.forEach((key) => {
  const handleDown = () => {
    const hBg = localStorage.getItem("bagroundhover");
    const dur = localStorage.getItem("keyhover") || "0.1";
    const sCol = localStorage.getItem("HoverShadowColor");
    const tCol = localStorage.getItem("ColorKeyHover");
    key.style.transition = `all ${dur}s ease`;
    key.style.background = hBg;
    key.style.transform = "scale(0.85) translateY(2px)";
    key.style.boxShadow = `0px 2px 20px 2px ${sCol}`;
    key.style.color = tCol;
    typeChar(key.id === "space" ? "Space" : key.textContent);
  };
  const handleUp = () => {
    const bBg = localStorage.getItem("baground");
    const dur2 = localStorage.getItem("keyhoverup") || "0.3";
    const tColBase = localStorage.getItem("ColorKey");
    const bShad = localStorage.getItem("BoxShadowKey");
    const bBord = localStorage.getItem("BorderColor");
    key.style.transition = `all ${dur2}s ease`;
    key.style.background = bBg;
    key.style.transform = "";
    key.style.boxShadow = bShad === "none" ? "none" : `0 4px 0 ${bShad}`;
    key.style.color = tColBase;
    key.style.border = "1px solid " + bBord;
  };
  key.addEventListener("mousedown", handleDown);
  key.addEventListener("mouseup", handleUp);
  key.addEventListener("mouseleave", handleUp);
});

// Настройка размера клавиатуры
document.getElementById("keyboardsizeedit").addEventListener("input", (e) => {
  keyboard.style.scale = e.target.value;
  localStorage.setItem("size", e.target.value);
  document.getElementById("keyboardsizeeditvalue").textContent = "Размер клавиатуры: " + e.target.value;
});
document.getElementById("keyboardsizeedit").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("size", e.target.value);
});

// Видимость клавиатуры
document.getElementById("keyboardsee").addEventListener("change", function () {
  keyboard.style.opacity = this.checked ? "1" : "0";
  document.getElementById("keyboardseen").textContent = this.checked ? "Клавиатура видна" : "Клавиатура скрыта";
  const val = this.checked ? "visible" : "hidden";
  if (typeof saveSettingToServer === "function") saveSettingToServer("Seen", val);
});

// Прозрачность клавиш
document.getElementById("keysize").addEventListener("input", (e) => {
  keys.forEach((key) => (key.style.opacity = e.target.value));
  document.getElementById("keysizevalue").textContent = "Прозрачность клавиш: " + e.target.value;
  localStorage.setItem("KeyOpacity", e.target.value);
});
document.getElementById("keysize").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("KeyOpacity", e.target.value);
});

// Цвет текста клавиш
document.getElementById("textColorPicker").addEventListener("input", (e) => {
  keys.forEach((key) => (key.style.color = e.target.value));
  localStorage.setItem("ColorKey", e.target.value);
});
document.getElementById("textColorPicker").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("ColorKey", e.target.value);
});

// Цвет теней клавиш
document.getElementById("BoxShadowColorPicker").addEventListener("input", (e) => {
    keys.forEach((key) => (key.style.boxShadow = `0 4px 0 ${e.target.value}`));
    localStorage.setItem("BoxShadowKey", e.target.value);
});
document.getElementById("BoxShadowColorPicker").addEventListener("change", (e) => {
    if (typeof saveSettingToServer === "function") saveSettingToServer("BoxShadowKey", e.target.value);
});

// Цвет обводки клавиш
document.getElementById("BorderColorPicker").addEventListener("input", (e) => {
  keys.forEach((key) => (key.style.border = "1px solid " + e.target.value));
  localStorage.setItem("BorderColor", e.target.value);
});
document.getElementById("BorderColorPicker").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("BorderColor", e.target.value);
});

// Кнопка убрать тени
document.getElementById("ShadowNone").addEventListener("click", () => {
  keys.forEach((key) => (key.style.boxShadow = "none"));
  if (typeof saveSettingToServer === "function") saveSettingToServer("BoxShadowKey", "none");
});

// Длительность анимации нажатия
document.getElementById("keyhover").addEventListener("input", (e) => {
  document.getElementById("keysizevalue1").textContent = "Длительность анимации нажатия: " + e.target.value;
  localStorage.setItem("keyhover", e.target.value);
});
document.getElementById("keyhover").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("keyhover", e.target.value);
});

// Длительность возврата
document.getElementById("keyhoverup").addEventListener("input", (e) => {
  document.getElementById("keysizevalue2").textContent = "Длительность возврата: " + e.target.value;
  localStorage.setItem("keyhoverup", e.target.value);
});
document.getElementById("keyhoverup").addEventListener("change", (e) => {
  if (typeof saveSettingToServer === "function") saveSettingToServer("keyhoverup", e.target.value);
});

// Инпуты выбора цветов анимации (событие 'change' для разгрузки бэкенда)
document.getElementById("BagroundHoverColorPicker").addEventListener("change", (e) => {
    if (typeof saveSettingToServer === "function") saveSettingToServer("bagroundhover", e.target.value);
});
document.getElementById("TextHoverColorPicker").addEventListener("change", (e) => {
    if (typeof saveSettingToServer === "function") saveSettingToServer("ColorKeyHover", e.target.value);
});
document.getElementById("ShadowColorPicker").addEventListener("change", (e) => {
    if (typeof saveSettingToServer === "function") saveSettingToServer("HoverShadowColor", e.target.value);
});

window.addEventListener("keydown", (event) => {
  const keyEl = getKeyElement(event.code);
  if (!keyEl) return;
  const hBg = localStorage.getItem("bagroundhover");
  const dur = localStorage.getItem("keyhover") || "0.1";
  const sCol = localStorage.getItem("HoverShadowColor");
  const tCol = localStorage.getItem("ColorKeyHover");
  keyEl.style.transition = `all ${dur}s ease`;
  keyEl.style.background = hBg;
  keyEl.style.transform = "scale(0.85) translateY(2px)";
  keyEl.style.boxShadow = `0px 2px 20px 2px ${sCol}`;
  keyEl.style.color = tCol;
  if (document.activeElement.tagName !== "TEXTAREA") {
    if (event.code === "Space") {
      typeChar("Space");
      event.preventDefault();
    } else if (event.key.length === 1) {
      typeChar(event.key.toUpperCase());
      event.preventDefault();
    }
  }
});

window.addEventListener("keyup", (event) => {
  const keyEl = getKeyElement(event.code);
  if (!keyEl) return;
  const bBg = localStorage.getItem("baground");
  const dur = localStorage.getItem("keyhoverup") || "0.3";
  const tCol = localStorage.getItem("ColorKey");
  const bShad = localStorage.getItem("BoxShadowKey");
  const bBord = localStorage.getItem("BorderColor");
  keyEl.style.transition = `all ${dur}s ease`;
  keyEl.style.background = bBg;
  keyEl.style.transform = "";
  keyEl.style.boxShadow = bShad === "none" ? "none" : `0 4px 0 ${bShad}`;
  keyEl.style.color = tCol;
  keyEl.style.border = "1px solid " + bBord;
});

let DeleteAll = document.getElementById("DeleteAll");
DeleteAll.addEventListener("click", async function (e) {
  e.preventDefault();
  localStorage.removeItem("BorderColor");
  localStorage.removeItem("BoxShadowKey");
  localStorage.removeItem("ColorKey");
  localStorage.removeItem("ColorKeyHover");
  localStorage.removeItem("HoverShadowColor");
  localStorage.removeItem("KeyOpacity");
  localStorage.removeItem("Seen");
  localStorage.removeItem("baground");
  localStorage.removeItem("bagroundhover");
  localStorage.removeItem("keyhover");
  localStorage.removeItem("keyhoverup");
  localStorage.removeItem("size");
  localStorage.removeItem("textcolor");

  // Очищаем в data.json на сервере
  if (typeof syncSave === "function") {
      await syncSave();
  }
  location.reload();
});

const applyAllSettings = () => {
  const size = localStorage.getItem("size") || "1";
  const seen = localStorage.getItem("Seen");
  const bg = localStorage.getItem("baground");
  const opac = localStorage.getItem("KeyOpacity") || "1";
  const col = localStorage.getItem("ColorKey");
  const shad = localStorage.getItem("BoxShadowKey");
  const bord = localStorage.getItem("BorderColor");
  if (keyboard) {
    keyboard.style.scale = size;
    keyboard.style.opacity = seen === "hidden" ? "0" : "1";
  }
  keys.forEach((key) => {
    key.style.background = bg;
    key.style.opacity = opac;
    key.style.color = col;
    key.style.boxShadow = shad === "none" ? "none" : `0 4px 0 ${shad}`;
    key.style.border = "1px solid " + bord;
  });
};

document.addEventListener("DOMContentLoaded", applyAllSettings);
window.addEventListener("storage", applyAllSettings);

let KeyboardColorStatus = document.getElementById('KeyboardColorStatus');
if (KeyboardColorStatus) {
    KeyboardColorStatus.addEventListener('input' , function(){
        let KeyboardColorStatusValue = KeyboardColorStatus.value;
        keys.forEach((key) => {
            key.style.transition = "1s";
            key.style.backgroundColor = KeyboardColorStatusValue;
        });
    });

    KeyboardColorStatus.addEventListener('change' , function(){
        if (typeof saveSettingToServer === "function") {
            saveSettingToServer('baground', KeyboardColorStatus.value);
            console.log(`💾 Цвет клавиатуры (${KeyboardColorStatus.value}) сохранен на сервере!`);
        }
    });
}

window.addEventListener('DOMContentLoaded' , function(){
    if (KeyboardColorStatus) {
        KeyboardColorStatus.value = localStorage.getItem('baground') || "#ffffff";
    }
});