let logocontainer = document.getElementById("logo-container");
if (logocontainer) {
  logocontainer.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

let textcon = document.getElementById('textcon')

const themes = {
  NightNeon: {
    bg: "#0b0f1a",
    text: "#eaeaff",
    panel: "#161b2e",
    sub: "#2a2f4a",
    main: "#6c7cff",
  },
  TechBlue: {
    bg: "#001233",
    text: "#ffffff",
    panel: "#001845",
    sub: "#002855",
    main: "#00a6fb",
  },
  DarkGraphite: {
    bg: "#1c1c1c",
    text: "#f5f5f5",
    panel: "#262626",
    sub: "#52525b",
    main: "#a1a1aa",
  },
  LightMinimal: {
    bg: "#f2f2f2",
    text: "#1a1a1a",
    panel: "#ffffff",
    sub: "#a1a1aa",
    main: "#2563eb",
  },
  PurpleCyber: {
    bg: "#0f051d",
    text: "#ede7ff",
    panel: "#1a0b2e",
    sub: "#3b1b5e",
    main: "#bc95ff",
  },
  GreenCode: {
    bg: "#08140e",
    text: "#cfffe1",
    panel: "#0d261a",
    sub: "#144029",
    main: "#4ade80",
  },
  SandComfort: {
    bg: "#fdf6e3",
    text: "#4a3f35",
    panel: "#eee8d5",
    sub: "#ddd6c1",
    main: "#b58900",
  },
  RedAccent: {
    bg: "#1a0505",
    text: "#ffffff",
    panel: "#2d0a0a",
    sub: "#4a1010",
    main: "#ef4444",
  },
  ColdBlueGray: {
    bg: "#0f172a",
    text: "#e8ecf1",
    panel: "#1e293b",
    sub: "#334155",
    main: "#38bdf8",
  },
  BlackPremium: {
    bg: "#000000",
    text: "#d4af37",
    panel: "#111111",
    sub: "#1a1a1a",
    main: "#facc15",
  },
  Oceanic: {
    bg: "#001b2e",
    text: "#d1f2ff",
    panel: "#00253e",
    sub: "#163a5f",
    main: "#00d4ff",
  },
  DeepForest: {
    bg: "#0a1a0a",
    text: "#e0ffe0",
    panel: "#122612",
    sub: "#1b331b",
    main: "#2ecc71",
  },
  Midnight: {
    bg: "#050505",
    text: "#f0f0f0",
    panel: "#111111",
    sub: "#222222",
    main: "#ffffff",
  },
  Sakura: {
    bg: "#2d1b24",
    text: "#ffe0ed",
    panel: "#3d2631",
    sub: "#5e3a4b",
    main: "#ff85a1",
  },
  Solarized: {
    bg: "#002b36",
    text: "#839496",
    panel: "#073642",
    sub: "#586e75",
    main: "#268bd2",
  },
  Nord: {
    bg: "#2e3440",
    text: "#eceff4",
    panel: "#3b4252",
    sub: "#4c566a",
    main: "#88c0d0",
  },
  Dracula: {
    bg: "#282a36",
    text: "#f8f8f2",
    panel: "#44475a",
    sub: "#6272a4",
    main: "#bd93f9",
  },
  Monokai: {
    bg: "#272822",
    text: "#f8f8f2",
    panel: "#3e3d32",
    sub: "#75715e",
    main: "#a6e22e",
  },
  Cyberpunk: {
    bg: "#00040d",
    text: "#00ff9f",
    panel: "#001a1a",
    sub: "#003b46",
    main: "#f5ed00",
  },
  Vaporwave: {
    bg: "#2d0a4e",
    text: "#ff71ce",
    panel: "#3d1266",
    sub: "#4e148c",
    main: "#01cdfe",
  },
  Retro: {
    bg: "#322d29",
    text: "#d6d5c9",
    panel: "#3e3935",
    sub: "#625c58",
    main: "#a22c29",
  },
  Paper: {
    bg: "#eeeeee",
    text: "#444444",
    panel: "#e0e0e0",
    sub: "#cccccc",
    main: "#222222",
  },
  Copper: {
    bg: "#1b1212",
    text: "#e2b49a",
    panel: "#261a1a",
    sub: "#3d2b2b",
    main: "#b87333",
  },
  Lavender: {
    bg: "#1a1a2e",
    text: "#e6e6fa",
    panel: "#24244a",
    sub: "#30305a",
    main: "#9370db",
  },
  Blood: {
    bg: "#110000",
    text: "#ff0000",
    panel: "#220000",
    sub: "#440000",
    main: "#880000",
  },
  Lime: {
    bg: "#1a1f10",
    text: "#e0f0d0",
    panel: "#232a16",
    sub: "#303b1e",
    main: "#a4c639",
  },
  Coffee: {
    bg: "#2b1700",
    text: "#f5f5dc",
    panel: "#3d2100",
    sub: "#4a3000",
    main: "#6f4e37",
  },
  Ice: {
    bg: "#e0f7fa",
    text: "#006064",
    panel: "#b2ebf2",
    sub: "#80deea",
    main: "#00bcd4",
  },
  Slate: {
    bg: "#0f172a",
    text: "#f1f5f9",
    panel: "#1e293b",
    sub: "#334155",
    main: "#94a3b8",
  },
  Bumblebee: {
    bg: "#222222",
    text: "#ffffff",
    panel: "#2d2d2d",
    sub: "#3d3d3d",
    main: "#facc15",
  },
  Marshmallow: {
    bg: "#f8bbd0",
    text: "#880e4f",
    panel: "#fce4ec",
    sub: "#f48fb1",
    main: "#c2185b",
  },
  Toxic: {
    bg: "#000000",
    text: "#39ff14",
    panel: "#0d0d0d",
    sub: "#1a1a1a",
    main: "#32cd32",
  },
  Blueprint: {
    bg: "#1a3a6c",
    text: "#ffffff",
    panel: "#204682",
    sub: "#2a4a7c",
    main: "#8eaadb",
  },
  Carbon: {
    bg: "#161616",
    text: "#f4f4f4",
    panel: "#222222",
    sub: "#262626",
    main: "#393939",
  },
  Sunset: {
    bg: "#2d142c",
    text: "#ee4540",
    panel: "#3e1c3d",
    sub: "#510a32",
    main: "#c72c41",
  },
  Matrix: {
    bg: "#000000",
    text: "#00ff41",
    panel: "#001500",
    sub: "#003b00",
    main: "#008f11",
  },
  Ghost: {
    bg: "#f5f5f5",
    text: "#333333",
    panel: "#eeeeee",
    sub: "#e0e0e0",
    main: "#9e9e9e",
  },
  Mars: {
    bg: "#451804",
    text: "#ff9d6f",
    panel: "#5a2005",
    sub: "#692a08",
    main: "#c1440e",
  },
  NeonPink: {
    bg: "#1a001a",
    text: "#ffffff",
    panel: "#2a002a",
    sub: "#4d004d",
    main: "#ff00ff",
  },
  GoldenRed: {
    bg: "#4a0000",
    text: "#ffd700",
    panel: "#5d0000",
    sub: "#7a0000",
    main: "#ffd700",
  },
  DeepSea: {
    bg: "#011627",
    text: "#d6deeb",
    panel: "#0b2942",
    sub: "#1d3b53",
    main: "#82aaff",
  },
  Emerald: {
    bg: "#002b1b",
    text: "#d1fae5",
    panel: "#003d27",
    sub: "#064e3b",
    main: "#10b981",
  },
  Synthwave: {
    bg: "#241b2f",
    text: "#ff7edb",
    panel: "#2f233d",
    sub: "#4d2d52",
    main: "#36f9f6",
  },
  Terra: {
    bg: "#3d2b1f",
    text: "#f2e9e4",
    panel: "#4a3728",
    sub: "#5a4534",
    main: "#d4a373",
  },
  Moonlight: {
    bg: "#1e2030",
    text: "#cad3f5",
    panel: "#24273a",
    sub: "#363a4f",
    main: "#8aadf4",
  },
  RosePine: {
    bg: "#191724",
    text: "#e0def4",
    panel: "#1f1d2e",
    sub: "#26233a",
    main: "#ebbcba",
  },
  Material: {
    bg: "#263238",
    text: "#eceff1",
    panel: "#2e3d44",
    sub: "#37474f",
    main: "#80cbc4",
  },
  Abyss: {
    bg: "#000c18",
    text: "#6688aa",
    panel: "#001529",
    sub: "#002244",
    main: "#114477",
  },
  Kuro: {
    bg: "#121212",
    text: "#888888",
    panel: "#1a1a1a",
    sub: "#222222",
    main: "#444444",
  },
  Cream: {
    bg: "#fffdd0",
    text: "#5d4037",
    panel: "#f3e5ab",
    sub: "#e6dfb1",
    main: "#8d6e63",
  },
};

let keyboard = document.getElementById("keyboard");
let keys = document.querySelectorAll(".key, .space");
let body = document.getElementById("bgContainer");
let pressedKeys = new Set();

const applyStyles = () => {
  const themeKey = localStorage.getItem("selectedTheme") || "NightNeon";
  const theme = themes[themeKey];
  const root = document.documentElement;

  if (theme) {
    root.style.setProperty("--bg-color", theme.bg);
    root.style.setProperty("--text-color", theme.text);
    root.style.setProperty("--panel-color", theme.panel);
    root.style.setProperty("--sub-color", theme.sub);
    root.style.setProperty("--main-color", theme.main);
  }

  let sz = localStorage.getItem("size")
  let op = localStorage.getItem("KeyOpacity")
  let bShad = localStorage.getItem("BoxShadowKey")
  let bord = localStorage.getItem("BorderColor")
  let cKey = localStorage.getItem("ColorKey")
  let sn = localStorage.getItem("Seen")
  let bg = localStorage.getItem("baground")
  let fb = localStorage.getItem("bagroundcolor");

  keys.forEach((key) => {
    key.style.background = bg || (theme ? theme.sub : "");
    key.style.color = cKey || (theme ? theme.text : "");
    key.style.borderColor = bord || (theme ? theme.main : "");
    key.style.opacity = op || "1";
    if (bShad === "none") {
      key.style.boxShadow = "none";
    } else {
      key.style.boxShadow = `0 4px 0 ${bShad || (theme ? theme.bg : "#000")}`;
    }
  });

  if (keyboard) {
    if (sz) keyboard.style.scale = sz;
    keyboard.style.opacity = sn === "hidden" ? "0" : "1";
  }

  if (body && theme) {
    body.style.backgroundColor = fb || theme.bg;
  }
};

window.addEventListener("DOMContentLoaded", applyStyles);
window.addEventListener("storage", applyStyles);

const getTarget = (code) => {
  if (code === "Space") return document.querySelector(".space");
  let char = code.replace("Key", "").toUpperCase();
  return (
    document.getElementById("key" + char) ||
    document.getElementById(char.toLowerCase()) ||
    document.getElementById(char)
  );
};

window.addEventListener("keydown", (event) => {
  if (pressedKeys.has(event.code)) return;
  pressedKeys.add(event.code);

  let key = getTarget(event.code);
  if (key) {
    const theme = themes[localStorage.getItem("selectedTheme") || "NightNeon"];
    const hBg =
      localStorage.getItem("bagroundhover") || (theme ? theme.main : "#fff");
    const dur = localStorage.getItem("keyhover") || "0.2";
    const sCol =
      localStorage.getItem("HoverShadowColor") || (theme ? theme.main : "#000");
    const tCol =
      localStorage.getItem("ColorKeyHover") || (theme ? theme.bg : "#000");

    key.style.transition = `all ${dur}s ease`;
    key.style.transform = "scale(0.85) translateY(2px)";
    key.style.background = hBg;
    key.style.color = tCol;
    key.style.boxShadow = `0px 2px 20px 2px ${sCol}`;
    key.style.borderColor = sCol;
  }
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.code);
  let key = getTarget(event.code);
  if (key) {
    const theme = themes[localStorage.getItem("selectedTheme") || "NightNeon"];
    const bBg = localStorage.getItem("baground") || (theme ? theme.sub : "");
    const tColBase =
      localStorage.getItem("ColorKey") || (theme ? theme.text : "");
    const bBord =
      localStorage.getItem("BorderColor") || (theme ? theme.main : "");
    const bShad = localStorage.getItem("BoxShadowKey");

    key.style.transition = `all ${localStorage.getItem("keyhoverup") || "0.2"}s ease`;
    key.style.transform = "";
    key.style.background = bBg;
    key.style.color = tColBase;
    key.style.borderColor = bBord;
    key.style.boxShadow =
      bShad === "none"
        ? "none"
        : `0 4px 0 ${bShad || (theme ? theme.bg : "#000")}`;
  }
});

let activeAnimations = {};

function stopAnimation(id) {
  if (activeAnimations[id]) {
    cancelAnimationFrame(activeAnimations[id]);
    delete activeAnimations[id];
  }
}
function startSakura(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = container.clientWidth),
    h = (canvas.height = container.clientHeight);
  let petals = Array.from({ length: 120 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    s: Math.random() * 5 + 2,
    r: Math.random() * Math.PI * 2,
    dx: Math.random() * 1.5 + 0.5,
    dy: Math.random() * 1 + 1,
    swing: Math.random() * 2,
    phase: Math.random() * Math.PI,
  }));
  const render = () => {
    ctx.clearRect(0, 0, w, h);
    petals.forEach((p) => {
      p.x += p.dx + Math.sin(p.y / 50 + p.phase) * p.swing;
      p.y += p.dy;
      p.r += 0.02;
      if (p.y > h + 20) {
        p.y = -20;
        p.x = Math.random() * w;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = "#ffd1dc";
      ctx.beginPath();
      ctx.ellipse(0, 0, p.s, p.s / 1.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    activeAnimations[canvasId] = requestAnimationFrame(render);
  };
  render();
}

function startRain(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = container.clientWidth),
    h = (canvas.height = container.clientHeight);
  let drops = Array.from({ length: 400 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    v: Math.random() * 15 + 10,
    l: Math.random() * 20 + 10,
    a: Math.random() * 0.3 + 0.1,
  }));
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    drops.forEach((d) => {
      d.y += d.v;
      if (d.y > h) d.y = -d.l;
      ctx.strokeStyle = `rgba(173, 216, 230, ${d.a})`;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.l);
      ctx.stroke();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  animate();
}

function startStarfall(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    stars = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      len: Math.random() * 150 + 50,
      v: Math.random() * 12 + 8,
      o: Math.random(),
    }));
  };
  const animate = () => {
    ctx.fillStyle = "rgba(10, 10, 30, 0.2)";
    ctx.fillRect(0, 0, w, h);
    stars.forEach((s) => {
      s.x -= s.v;
      s.y += s.v;
      if (s.x < -s.len || s.y > h + s.len) {
        s.x = Math.random() * w + w;
        s.y = -s.len;
      }
      const g = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y - s.len);
      g.addColorStop(0, "#fff");
      g.addColorStop(1, "transparent");
      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.len, s.y - s.len);
      ctx.stroke();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startMatrix(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    fontSize = 18,
    columns,
    drops = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    columns = Math.floor(w / fontSize);
    drops = new Array(columns).fill(0);
  };
  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, w, h);
    ctx.font = `bold ${fontSize}px monospace`;
    drops.forEach((y, i) => {
      const char = String.fromCharCode(0x30a0 + Math.random() * 96);
      const x = i * fontSize;
      ctx.fillStyle = "#0F0";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#0F0";
      ctx.fillText(char, x, y * fontSize);
      ctx.shadowBlur = 0;
      if (y * fontSize > h && Math.random() > 0.98) drops[i] = 0;
      drops[i]++;
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startLeaves(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    leaves = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    leaves = Array.from({ length: 50 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: Math.random() * 8 + 4,
      r: Math.random() * 6,
      v: Math.random() * 1.5 + 1,
      h: Math.random() * 2 - 1,
      c: `hsl(${Math.random() * 50 + 10}, 80%, ${Math.random() * 40 + 30}%)`,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    leaves.forEach((l) => {
      l.y += l.v;
      l.x += Math.sin(l.y / 40) * 1.5;
      l.r += 0.03;
      if (l.y > h + 20) {
        l.y = -20;
        l.x = Math.random() * w;
      }
      ctx.save();
      ctx.translate(l.x, l.y);
      ctx.rotate(l.r);
      ctx.fillStyle = l.c;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(l.s, l.s, 0, l.s * 2);
      ctx.quadraticCurveTo(-l.s, l.s, 0, 0);
      ctx.fill();
      ctx.restore();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startBubbles(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    bubbles = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    bubbles = Array.from({ length: 200 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h + h,
      r: Math.random() * 5 + 1,
      v: Math.random() * 2 + 0.5,
      o: Math.random() * 0.4 + 0.1,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    bubbles.forEach((b) => {
      b.y -= b.v;
      b.x += Math.sin(b.y / 50) * 0.5;
      if (b.y < -20) {
        b.y = h + 20;
        b.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.arc(b.x, b.y, Math.max(0, b.r), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${b.o})`;
      ctx.stroke();
      ctx.fillStyle = `rgba(255, 255, 255, ${b.o * 0.5})`;
      ctx.beginPath();
      ctx.arc(b.x - b.r / 3, b.y - b.r / 3, b.r / 4, 0, Math.PI * 2);
      ctx.fill();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startSparks(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    p = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    p = Array.from({ length: 250 }, () => createP());
  };
  const createP = () => ({
    x: Math.random() * w,
    y: h + 20,
    vx: (Math.random() - 0.5) * 3,
    vy: -Math.random() * 5 - 2,
    life: 1,
    color: Math.random() > 0.5 ? "#ff4500" : "#ffda44",
    size: Math.random() * 3 + 1,
  });
  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, h / 2);
    g.addColorStop(0, "rgba(255, 69, 0, 0.2)");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      it.x += it.vx;
      it.y += it.vy;
      it.life -= 0.008;
      if (it.life <= 0) Object.assign(it, createP());
      ctx.fillStyle = it.color;
      ctx.globalAlpha = it.life;
      ctx.shadowBlur = 15;
      ctx.shadowColor = it.color;
      ctx.beginPath();
      ctx.arc(it.x, it.y, Math.max(0, it.size * it.life), 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startSnow(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    flakes = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    flakes = Array.from({ length: 200 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1,
      v: Math.random() * 1 + 0.5,
      o: Math.random() * 0.8 + 0.2,
      drift: Math.random() - 0.5,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    flakes.forEach((f) => {
      f.y += f.v;
      f.x += f.drift;
      if (f.y > h) f.y = -5;
      ctx.beginPath();
      ctx.arc(f.x, f.y, Math.max(0, f.r), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${f.o})`;
      ctx.fill();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startFireflies(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    flies = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    flies = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: Math.random() * 2 + 1,
      amp: Math.random() * 2,
      freq: Math.random() * 0.05,
      t: Math.random() * 100,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    flies.forEach((f) => {
      f.t += 0.02;
      f.x += Math.cos(f.t) * f.amp;
      f.y += Math.sin(f.t) * f.amp;
      const glow = Math.abs(Math.sin(f.t)) * 15;
      ctx.shadowBlur = glow;
      ctx.shadowColor = "#ccff00";
      ctx.fillStyle = `rgba(204, 255, 0, ${0.4 + glow / 30})`;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.s, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startNodes(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    nodes = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    nodes.forEach((n, i) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(n.x - nodes[j].x, n.y - nodes[j].y);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startPlasma(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    t = 0;
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    t += 0.01;
    for (let j = 0; j < 5; j++) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(0, 150, 255, ${0.15 - j * 0.03})`;
      ctx.moveTo(0, h);
      for (let i = 0; i <= w; i += 5) {
        const y =
          Math.sin(i * 0.005 + t + j) * (h / 3) +
          h / 2 +
          Math.cos(i * 0.01 - t) * 20;
        ctx.lineTo(i, y);
      }
      ctx.lineTo(w, h);
      ctx.fill();
    }
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startFog(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    clouds = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    clouds = Array.from({ length: 25 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 150 + 100,
      v: Math.random() * 0.8 + 0.2,
      o: Math.random() * 0.3,
    }));
  };
  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    clouds.forEach((c) => {
      c.x += c.v;
      if (c.x - c.r > w) c.x = -c.r;
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
      g.addColorStop(0, `rgba(255, 255, 255, ${c.o})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
    });
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startComet(canvasId, containerId) {
  const canvas = document.getElementById(canvasId);
  const container = document.getElementById(containerId);
  if (!canvas || !container) return;
  stopAnimation(canvasId);
  const ctx = canvas.getContext("2d");
  let w,
    h,
    stars = [];
  const init = () => {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;
    stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5,
      o: Math.random(),
    }));
  };
  let cx = 0,
    cy = 0,
    cvx = 5,
    cvy = 2;
  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, w, h);
    stars.forEach((s) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${s.o})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    cx += cvx;
    cy += cvy;
    if (cx > w || cy > h) {
      cx = -50;
      cy = (Math.random() * h) / 2;
    }
    const g = ctx.createLinearGradient(cx, cy, cx - 150, cy - 60);
    g.addColorStop(0, "#fff");
    g.addColorStop(0.2, "#44f");
    g.addColorStop(1, "transparent");
    ctx.strokeStyle = g;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - 150, cy - 60);
    ctx.stroke();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#44f";
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    activeAnimations[canvasId] = requestAnimationFrame(animate);
  };
  init();
  animate();
}

function startHexagons(c, t) {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    time = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(2, 5, 10, 0.3)";
    ctx.fillRect(0, 0, w, h);
    time += 0.01;
    ctx.lineWidth = 1.5;
    for (let x = 0; x < w + 50; x += 60) {
      // Увеличен шаг для FPS
      for (let y = 0; y < h + 50; y += 52) {
        let d = Math.hypot(x - w / 2, y - h / 2),
          p = Math.sin(time - d * 0.02) * 5;
        ctx.strokeStyle = `hsla(190, 100%, 70%, ${0.2 + p * 0.05})`;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          let r = 25 + p,
            px =
              x +
              ((y / 52) % 2 === 0 ? 0 : 30) +
              r * Math.cos((i * Math.PI) / 3),
            py = y + r * Math.sin((i * Math.PI) / 3);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
}

const startTunnel = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let stars = Array.from({ length: 400 }, () => ({
    x: Math.random() * w - w / 2,
    y: Math.random() * h - h / 2,
    z: Math.random() * w,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, w, h);
    stars.forEach((s) => {
      s.z -= 15;
      if (s.z <= 0) s.z = w;
      let k = 128 / s.z,
        px = s.x * k + w / 2,
        py = s.y * k + h / 2,
        sz = (1 - s.z / w) * 5;
      ctx.fillStyle = `hsla(200,100%,80%,${1 - s.z / w})`;
      ctx.shadowBlur = sz * 3;
      ctx.shadowColor = "cyan";
      ctx.beginPath();
      ctx.arc(px, py, sz, 0, 7);
      ctx.fill();
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startVortex = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, w, h);
    a += 0.02;
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 150; i++) {
      let r = Math.sin(a + i * 0.01) * (w / 2.5) + i;
      ctx.fillStyle = `hsla(${i * 2 + a * 50},100%,60%,0.6)`;
      ctx.beginPath();
      ctx.arc(
        w / 2 + Math.cos(a + i * 0.08) * r,
        h / 2 + Math.sin(a + i * 0.08) * r,
        2.5,
        0,
        7,
      );
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startDancingLines = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    t2 = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, w, h);
    t2 += 0.02;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = `hsla(${i * 50 + t2 * 20},100%,50%,0.5)`;
      ctx.shadowBlur = 20;
      for (let x = 0; x < w; x += 10)
        ctx.lineTo(
          x,
          h / 2 + Math.sin(x * 0.01 + t2 + i) * 80 * Math.cos(t2 * 0.5),
        );
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startGridPop = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 15; i++) {
      let x = Math.random() * w,
        y = Math.random() * h,
        r = Math.random() * 20;
      ctx.shadowBlur = 20;
      ctx.shadowColor = `hsla(${Math.random() * 360},100%,50%,1)`;
      ctx.fillStyle = ctx.shadowColor;
      ctx.fillRect(x, y, r, r);
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startHelix = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    a += 0.04;
    for (let y = 0; y < h; y += 6) {
      let x1 = w / 2 + Math.sin(a + y * 0.02) * 70,
        x2 = w / 2 - Math.sin(a + y * 0.02) * 70;
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#0ff";
      ctx.beginPath();
      ctx.arc(x1, y, 3, 0, 7);
      ctx.fill();
      ctx.fillStyle = "#f0f";
      ctx.beginPath();
      ctx.arc(x2, y, 3, 0, 7);
      ctx.fill();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startDataStream = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let s = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    v: 5 + Math.random() * 10,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,15,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    ctx.shadowBlur = 15;
    s.forEach((it) => {
      ctx.fillRect(it.x, it.y, 2, 15);
      it.y += it.v;
      if (it.y > h) it.y = -20;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

// 21-30: Природные и стихийные явления
const startMagneto = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    a += 0.04;
    for (let x = 20; x < w; x += 30) {
      for (let y = 20; y < h; y += 30) {
        let ang = Math.atan2(h / 2 - y, w / 2 - x) + a,
          len = 15;
        ctx.strokeStyle = "rgba(0,255,255,0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
        ctx.stroke();
      }
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startPhases = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    t2 = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, w, h);
    t2 += 0.02;
    for (let i = 0; i < 8; i++) {
      let x = w / 2 + Math.cos(t2 + i * 0.8) * 100,
        y = h / 2 + Math.sin(t2 + i * 0.8) * 100;
      let g = ctx.createRadialGradient(x, y, 0, x, y, 30);
      g.addColorStop(0, `hsla(${i * 45},100%,50%,1)`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, 7);
      ctx.fill();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startPulseGrid = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    t2 = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    t2 += 0.05;
    for (let x = 15; x < w; x += 30) {
      for (let y = 15; y < h; y += 30) {
        let s = Math.sin(t2 + (x + y) * 0.01) * 12;
        if (s > 0) {
          ctx.fillStyle = "white";
          ctx.shadowBlur = 15;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startAutumn = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let leaves = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    s: 8 + Math.random() * 10,
    r: Math.random() * 7,
    v: 1 + Math.random(),
  }));
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    leaves.forEach((l) => {
      l.y += l.v;
      l.r += 0.02;
      l.x += Math.sin(l.r);
      ctx.save();
      ctx.translate(l.x, l.y);
      ctx.rotate(l.r);
      ctx.shadowBlur = 5;
      ctx.fillStyle = `rgba(255,${100 + Math.random() * 50},20,0.8)`;
      ctx.beginPath();
      ctx.ellipse(0, 0, l.s, l.s / 2, 0, 0, 7);
      ctx.fill();
      ctx.restore();
      if (l.y > h) l.y = -20;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startOceanRays = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    a += 0.01;
    let g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#001133");
    g.addColorStop(1, "#004488");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.beginPath();
      let x = (w / 5) * i + Math.sin(a + i) * 50;
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 100, h);
      ctx.lineTo(x - 100, h);
      ctx.fill();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startSand = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 200 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    v: 1 + Math.random(),
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(40,30,10,0.3)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#edc9af";
    p.forEach((it) => {
      ctx.fillRect(it.x, it.y, 2, 2);
      it.y += it.v;
      if (it.y > h) it.y = 0;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

function startLightning(c, t) {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    f = 0;
  const draw = () => {
    ctx.fillStyle = `rgba(5, 5, 20, ${f > 0 ? 0.3 : 0.9})`;
    ctx.fillRect(0, 0, w, h);
    if (Math.random() > 0.98) f = 10;
    if (f > 0) {
      ctx.strokeStyle = "rgba(100, 200, 255, 0.8)";
      ctx.lineWidth = 2;
      let lx = Math.random() * w,
        ly = 0;
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      while (ly < h) {
        lx += (Math.random() - 0.5) * 60;
        ly += 30;
        ctx.lineTo(lx, ly);
      }
      ctx.stroke();
      f--;
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
}

const startSakuraRain = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let petals = Array.from({ length: 50 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    s: 5 + Math.random() * 5,
    r: Math.random() * 7,
    v: 2 + Math.random(),
  }));
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    petals.forEach((p) => {
      p.y += p.v;
      p.r += 0.05;
      p.x += Math.sin(p.r);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = "#ffb7c5";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ffb7c5";
      ctx.beginPath();
      ctx.ellipse(0, 0, p.s, p.s * 0.7, 0, 0, 7);
      ctx.fill();
      ctx.restore();
      if (p.y > h) p.y = -10;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startSmoke = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 40 }, () => ({
    x: w / 2,
    y: h,
    r: 10,
    o: 1,
    v: 1 + Math.random(),
  }));
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    p.forEach((it) => {
      it.y -= it.v;
      it.x += Math.sin(it.y * 0.05) * 2;
      it.r += 0.5;
      it.o -= 0.005;
      ctx.fillStyle = `rgba(150,150,150,${it.o})`;
      ctx.beginPath();
      ctx.arc(it.x, it.y, it.r, 0, 7);
      ctx.fill();
      if (it.o <= 0) {
        it.x = w / 2;
        it.y = h;
        it.r = 10;
        it.o = 1;
      }
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

function startLava(c, t) {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    time = 0;
  const draw = () => {
    time += 0.01;
    ctx.fillStyle = "#100";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 5; i++) {
      // Меньше слоев — больше FPS
      ctx.beginPath();
      ctx.fillStyle = `rgba(${200 - i * 30}, 50, 0, 0.3)`;
      let ly = h * 0.5 + i * 20;
      ctx.moveTo(0, h);
      for (let lx = 0; lx <= w; lx += 20)
        ctx.lineTo(lx, ly + Math.sin(lx * 0.01 + time + i) * 25);
      ctx.lineTo(w, h);
      ctx.fill();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
}

// 31-40: Микромир и Энергия
const startDew = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let drops = Array.from({ length: 30 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 2 + Math.random() * 4,
  }));
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    drops.forEach((d) => {
      let s = d.r + Math.sin(Date.now() * 0.002 + d.x) * 2;
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(d.x, d.y, s > 0 ? s : 1, 0, 7);
      ctx.fill();
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startFireRain = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: -50,
    v: 5 + Math.random() * 5,
    l: 20 + Math.random() * 20,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      ctx.strokeStyle = "orange";
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(it.x, it.y);
      ctx.lineTo(it.x - it.v, it.y + it.l);
      ctx.stroke();
      it.y += it.v;
      it.x -= it.v / 2;
      if (it.y > h) {
        it.y = -50;
        it.x = Math.random() * w;
      }
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startCorals = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    it = 0;
  const draw = () => {
    if (it % 150 === 0) ctx.clearRect(0, 0, w, h);
    it++;
    ctx.strokeStyle = `hsla(${it % 360},70%,60%,0.2)`;
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.moveTo(w / 2, h);
    ctx.lineTo(w / 2 + Math.sin(it * 0.05) * it * 0.12, h - it * 0.6);
    ctx.stroke();
    if (it > h * 2) it = 0;
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startScanner = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    ang = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,10,0,0.15)";
    ctx.fillRect(0, 0, w, h);
    ang += 0.05;
    let g = ctx.createConicGradient(ang, w / 2, h / 2);
    g.addColorStop(0, "rgba(0,255,0,0.8)");
    g.addColorStop(0.2, "transparent");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w, 0, 7);
    ctx.fill();
    ctx.strokeStyle = "#0f0";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 50, 0, 7);
    ctx.stroke();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startCyberNodes = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5,
  }));
  const draw = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      it.x += it.vx;
      it.y += it.vy;
      if (it.x < 0 || it.x > w) it.vx *= -1;
      if (it.y < 0 || it.y > h) it.vy *= -1;
      ctx.fillStyle = "cyan";
      ctx.shadowBlur = 10;
      ctx.fillRect(it.x, it.y, 3, 3);
      p.forEach((it2) => {
        let d = Math.hypot(it.x - it2.x, it.y - it2.y);
        if (d < 70) {
          ctx.strokeStyle = `rgba(0,255,255,${1 - d / 70})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(it.x, it.y);
          ctx.lineTo(it2.x, it2.y);
          ctx.stroke();
        }
      });
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startGlitch = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    if (Math.random() > 0.85) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
      ctx.fillRect(
        Math.random() * w,
        Math.random() * h,
        Math.random() * 100,
        Math.random() * 20,
      );
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startBinary = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    ctx.font = "bold 14px monospace";
    for (let i = 0; i < 15; i++)
      ctx.fillText(
        Math.round(Math.random()),
        Math.random() * w,
        Math.random() * h,
      );
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startLaserGrid = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    off = 0;
  const draw = () => {
    ctx.fillStyle = "#101";
    ctx.fillRect(0, 0, w, h);
    off = (off + 2) % 40;
    ctx.strokeStyle = "#f0f";
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = off; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startCircuits = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    it = 0;
  const draw = () => {
    if (it % 200 === 0) ctx.clearRect(0, 0, w, h);
    it++;
    ctx.strokeStyle = "#0ff";
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    let x = Math.random() * w,
      y = Math.random() * h;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() > 0.5 ? 40 : -40), y);
    ctx.lineTo(
      x + (Math.random() > 0.5 ? 40 : -40),
      y + (Math.random() > 0.5 ? 40 : -40),
    );
    ctx.stroke();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startEnergyBall = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    t2 = 0;
  const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    t2 += 0.15;
    let r = 50 + Math.sin(t2) * 15,
      g = ctx.createRadialGradient(w / 2, h / 2, 5, w / 2, h / 2, r);
    g.addColorStop(0, "#fff");
    g.addColorStop(0.4, "cyan");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.shadowBlur = 50;
    ctx.shadowColor = "cyan";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, r, 0, 7);
    ctx.fill();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

// 41-50: Симуляции и Космос
const startNoise = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    let img = ctx.createImageData(w, h);
    for (let i = 0; i < img.data.length; i += 4) {
      let v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startVectorField = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, w, h);
    a += 0.02;
    for (let i = 0; i < 50; i++) {
      let x = Math.random() * w,
        y = Math.random() * h;
      ctx.strokeStyle = "#0f0";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a + i) * 25, y + Math.sin(a + i) * 25);
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startNeonRings = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    a += 0.08;
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `hsla(${a * 50 + i * 40},100%,50%,0.6)`;
      ctx.lineWidth = 4;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, (a * 12 + i * 35) % 180, 0, 7);
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startFancySnow = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 2 + Math.random() * 3,
    v: 1 + Math.random(),
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(10,20,40,0.4)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.shadowBlur = 10;
    p.forEach((it) => {
      ctx.beginPath();
      ctx.arc(it.x, it.y, it.r, 0, 7);
      ctx.fill();
      it.y += it.v;
      it.x += Math.sin(it.y * 0.03);
      if (it.y > h) it.y = -10;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startShadows = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    x = 0;
  const draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    x += 0.08;
    ctx.fillStyle = "black";
    ctx.shadowBlur = 50;
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.beginPath();
    ctx.arc(w / 2 + Math.cos(x) * 60, h / 2 + Math.sin(x * 0.5) * 30, 40, 0, 7);
    ctx.fill();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startRetro = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    y = 0;
  const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    y = (y + 2) % h;
    ctx.fillStyle = "rgba(255,0,255,0.3)";
    ctx.shadowBlur = 20;
    ctx.fillRect(0, y, w, 30);
    for (let i = 0; i < h; i += 4) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, i, w, 2);
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startBokeh = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 25 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 15 + Math.random() * 30,
    o: Math.random() * 0.3,
  }));
  const draw = () => {
    ctx.fillStyle = "#1a0033";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      ctx.fillStyle = `rgba(255,200,255,${it.o})`;
      ctx.beginPath();
      ctx.arc(it.x, it.y, it.r, 0, 7);
      ctx.fill();
      it.y -= 0.5;
      if (it.y < -40) it.y = h + 40;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startConfetti = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 60 }, () => ({
    x: w / 2,
    y: h / 2,
    vx: (Math.random() - 0.5) * 12,
    vy: (Math.random() - 0.5) * 12,
    c: `hsl(${Math.random() * 360},100%,50%)`,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      ctx.fillStyle = it.c;
      ctx.shadowBlur = 5;
      ctx.fillRect(it.x, it.y, 6, 6);
      it.x += it.vx;
      it.y += it.vy;
      it.vy += 0.15;
      if (it.y > h || it.x < 0 || it.x > w) {
        it.x = w / 2;
        it.y = h / 2;
        it.vx = (Math.random() - 0.5) * 12;
        it.vy = (Math.random() - 0.5) * 12;
      }
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startBouncingDots = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 20 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 3,
    vy: 3,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      ctx.fillStyle = "#ff0";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(it.x, it.y, 5, 0, 7);
      ctx.fill();
      it.x += it.vx;
      it.y += it.vy;
      if (it.x < 0 || it.x > w) it.vx *= -1;
      if (it.y < 0 || it.y > h) it.vy *= -1;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startSaturn = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "#00050a";
    ctx.fillRect(0, 0, w, h);
    a += 0.005;
    let g = ctx.createRadialGradient(
      w / 2 - 20,
      h / 2 - 20,
      10,
      w / 2,
      h / 2,
      60,
    );
    g.addColorStop(0, "#fffbd7");
    g.addColorStop(1, "#543");
    ctx.fillStyle = g;
    ctx.shadowBlur = 100;
    ctx.shadowColor = "rgba(100,80,50,0.5)";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 60, 0, 7);
    ctx.fill();
    for (let i = 0; i < 30; i++) {
      ctx.strokeStyle = `rgba(200,180,150,${0.1 + Math.random() * 0.1})`;
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2, 120 + i, 30 + i / 4, a, 0, 7);
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

// 51-63: Высокотехнологичные и Финальные эффекты
const startRadarGrid = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    r = 0;
  const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    r = (r + 1.5) % 100;
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, r, 0, 7);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, r + 50, 0, 7);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startCubeFlow = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, w, h);
    a += 0.06;
    ctx.fillStyle = "cyan";
    ctx.shadowBlur = 15;
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(a);
    ctx.fillRect(-25, -25, 50, 50);
    ctx.strokeRect(-30, -30, 60, 60);
    ctx.restore();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startSolar = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    a += 0.15;
    for (let i = 0; i < 40; i++) {
      ctx.strokeStyle = "orange";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(w / 2, h / 2);
      ctx.lineTo(w / 2 + Math.cos(a + i) * 70, h / 2 + Math.sin(a + i) * 70);
      ctx.stroke();
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startRainbowWave = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    t2 = 0;
  const draw = () => {
    t2 += 0.08;
    for (let x = 0; x < w; x += 3) {
      ctx.fillStyle = `hsl(${x + t2 * 60},100%,50%)`;
      ctx.fillRect(x, h / 2 + Math.sin(x * 0.02 + t2) * 40, 3, 25);
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startPixelSky = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,25,0.2)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "white";
    for (let i = 0; i < 8; i++)
      ctx.fillRect(Math.random() * w, Math.random() * h, 3, 3);
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startShield = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    a += 0.15;
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 5;
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 60 + Math.sin(a) * 10, 0, 7);
    ctx.stroke();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startCrystals = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    it = 0;
  const draw = () => {
    it++;
    ctx.strokeStyle = "rgba(200,255,255,0.15)";
    ctx.beginPath();
    ctx.moveTo(w / 2, h / 2);
    ctx.lineTo(
      w / 2 + Math.cos(it) * it * 0.15,
      h / 2 + Math.sin(it) * it * 0.15,
    );
    ctx.stroke();
    if (it > 600) {
      it = 0;
      ctx.clearRect(0, 0, w, h);
    }
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startNeonDrip = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let p = Array.from({ length: 30 }, () => ({
    x: Math.random() * w,
    y: 0,
    v: 3 + Math.random() * 4,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, w, h);
    p.forEach((it) => {
      ctx.fillStyle = "#0f0";
      ctx.shadowBlur = 15;
      ctx.fillRect(it.x, it.y, 3, 15);
      it.y += it.v;
      if (it.y > h) it.y = 0;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startMatrixBurst = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    for (let i = 0; i < 15; i++)
      ctx.fillText("1010", Math.random() * w, Math.random() * h);
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startGhostCircles = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    a = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, w, h);
    a += 0.03;
    ctx.strokeStyle = "white";
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.arc(w / 2 + Math.cos(a) * 50, h / 2 + Math.sin(a) * 50, 25, 0, 7);
    ctx.stroke();
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startNova = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight),
    r = 0;
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    r = (r + 8) % 300;
    let g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, r);
    g.addColorStop(0, "white");
    g.addColorStop(0.3, "gold");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.globalCompositeOperation = "screen";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, r, 0, 7);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

const startGrain = (c, t) => {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    for (let i = 0; i < 1200; i++)
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
};

function startGoldenRain(c, t) {
  const canvas = document.getElementById(c),
    ctx = canvas.getContext("2d");
  let w = (canvas.width = document.getElementById(t).clientWidth),
    h = (canvas.height = document.getElementById(t).clientHeight);
  let drops = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    v: 6 + Math.random() * 6,
  }));
  const draw = () => {
    ctx.fillStyle = "rgba(10, 8, 2, 0.4)";
    ctx.fillRect(0, 0, w, h);
    ctx.lineWidth = 2;
    drops.forEach((d) => {
      ctx.strokeStyle = "#ffd700";
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + 20);
      ctx.stroke();
      d.y += d.v;
      if (d.y > h) d.y = -20;
    });
    activeAnimations[c] = requestAnimationFrame(draw);
  };
  draw();
}
const effectsMap = {
  SeeSakuraBtn: startSakura,
  SeeRainBtn: startRain,
  SeeStarfallBtn: startStarfall,
  SeeMatrixBtn: startMatrix,
  SeeLeavesBtn: startLeaves,
  SeeBubblesBtn: startBubbles,
  SeeSparksBtn: startSparks,
  SeeSnowBtn: startSnow,
  SeeFirefliesBtn: startFireflies,
  SeeNodesBtn: startNodes,
  SeePlasmaBtn: startPlasma,
  SeeFogBtn: startFog,
  SeeBtn13: startComet,
  SeeBtn14: startHexagons,
  SeeBtn15: startTunnel,
  SeeBtn16: startVortex,
  SeeBtn17: startDancingLines,
  SeeBtn18: startGridPop,
  SeeBtn19: startHelix,
  SeeBtn20: startDataStream,

  SeeBtn21: startMagneto,

  SeeBtn22: startPhases,
  SeeBtn23: startPulseGrid,
  SeeBtn24: startAutumn,
  SeeBtn25: startOceanRays,
  SeeBtn26: startSand,
  SeeBtn27: startLightning,
  SeeBtn28: startSakuraRain,
  SeeBtn29: startSmoke,
  SeeBtn30: startLava,
  SeeBtn31: startDew,
  SeeBtn32: startFireRain,
  SeeBtn33: startCorals,
  SeeBtn34: startScanner,
  SeeBtn35: startCyberNodes,
  SeeBtn36: startGlitch,
  SeeBtn37: startBinary,
  SeeBtn38: startLaserGrid,
  SeeBtn39: startCircuits,
  SeeBtn40: startEnergyBall,
  SeeBtn41: startNoise,
  SeeBtn42: startVectorField,
  SeeBtn43: startNeonRings,
  SeeBtn44: startFancySnow,
  SeeBtn45: startShadows,
  SeeBtn46: startRetro,
  SeeBtn47: startBokeh,
  SeeBtn48: startConfetti,
  SeeBtn49: startBouncingDots,
  SeeBtn50: startSaturn,
  SeeBtn51: startRadarGrid,
  SeeBtn52: startCubeFlow,
  SeeBtn53: startSolar,
  SeeBtn54: startRainbowWave,
  SeeBtn55: startPixelSky,
  SeeBtn56: startShield,
  SeeBtn57: startCrystals,
  SeeBtn58: startNeonDrip,
  SeeBtn59: startMatrixBurst,
  SeeBtn60: startGhostCircles,
  SeeBtn61: startNova,
  SeeBtn62: startGrain,
  SeeBtn63: startGoldenRain,
};

// ============================================================
// ЛОГИКА ЗАПУСКА (ИСПРАВЛЕНО)
// ============================================================
function initSavedEffect() {
  const savedId = localStorage.getItem("selectedEffect");
  if (!savedId) return;

  const effectKey = savedId.replace("Set", "See");

  const container = document.getElementById("bgContainer");
  const canvas = document.getElementById("bgCanvas");

  // ПРАВИЛЬНАЯ ЛОГИКА: Если всё найдено — запускаем
  if (effectsMap[effectKey]) {
    if (canvas && container) {
      console.log("✅ Запускаю фон:", effectKey);

      // Настройка размера под окно
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Запуск функции из карты
      effectsMap[effectKey]("bgCanvas", "bgContainer");
    } else {
      console.error(
        "❌ Ошибка: Не найдены элементы bgCanvas или bgContainer на странице.",
      );
    }
  } else {
    console.warn(
      "⚠️ Эффект с ключом '" + effectKey + "' не прописан в effectsMap.",
    );
  }
}

// Слушатель загрузки страницы
document.addEventListener("DOMContentLoaded", initSavedEffect);

// Исправление размера при растягивании окна
window.addEventListener("resize", () => {
  const canvas = document.getElementById("bgCanvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});



let dictionary = [
  "apple",
  "bread",
  "cloud",
  "dance",
  "earth",
  "field",
  "glass",
  "heart",
  "juice",
  "knife",
  "light",
  "music",
  "night",
  "ocean",
  "paper",
  "quiet",
  "river",
  "sleep",
  "table",
  "under",
  "voice",
  "water",
  "young",
  "zebra",
  "about",
  "above",
  "after",
  "again",
  "alone",
  "basic",
  "below",
  "black",
  "blind",
  "board",
  "brain",
  "break",
  "build",
  "cause",
  "child",
  "clear",
  "close",
  "count",
  "cover",
  "daily",
  "death",
  "dream",
  "drive",
  "early",
  "every",
  "fight",
  "final",
  "floor",
  "focus",
  "force",
  "frame",
  "fresh",
  "front",
  "green",
  "group",
  "happy",
  "heavy",
  "horse",
  "house",
  "image",
  "inner",
  "joint",
  "judge",
  "large",
  "layer",
  "level",
  "limit",
  "local",
  "lucky",
  "lunch",
  "magic",
  "major",
  "match",
  "metal",
  "money",
  "month",
  "motor",
  "mouth",
  "noise",
  "north",
  "offer",
  "order",
  "owner",
  "paint",
  "party",
  "phone",
  "plant",
  "point",
  "power",
  "price",
  "print",
  "radio",
  "range",
  "shelf",
  "shirt",
  "shoes",
  "smile",
  "smoke",
  "sound",
  "space",
  "spoon",
  "sport",
  "stone",
  "sugar",
  "table",
  "taste",
  "train",
  "truck",
  "uncle",
  "visit",
  "watch",
  "wheel",
  "world",
  "write",
];

let getdictionary = localStorage.getItem("Dictionary");
if (getdictionary) {
  dictionary = JSON.parse(getdictionary);
} else {
  dictionary = [
    "apple",
    "bread",
    "cloud",
    "dance",
    "earth",
    "field",
    "glass",
    "heart",
    "juice",
    "knife",
    "light",
    "music",
    "night",
    "ocean",
    "paper",
    "quiet",
    "river",
    "sleep",
    "table",
    "under",
    "voice",
    "water",
    "young",
    "zebra",
    "about",
    "above",
    "after",
    "again",
    "alone",
    "basic",
    "below",
    "black",
    "blind",
    "board",
    "brain",
    "break",
    "build",
    "cause",
    "child",
    "clear",
    "close",
    "count",
    "cover",
    "daily",
    "death",
    "dream",
    "drive",
    "early",
    "every",
    "fight",
    "final",
    "floor",
    "focus",
    "force",
    "frame",
    "fresh",
    "front",
    "green",
    "group",
    "happy",
    "heavy",
    "horse",
    "house",
    "image",
    "inner",
    "joint",
    "judge",
    "large",
    "layer",
    "level",
    "limit",
    "local",
    "lucky",
    "lunch",
    "magic",
    "major",
    "match",
    "metal",
    "money",
    "month",
    "motor",
    "mouth",
    "noise",
    "north",
    "offer",
    "order",
    "owner",
    "paint",
    "party",
    "phone",
    "plant",
    "point",
    "power",
    "price",
    "print",
    "radio",
    "range",
    "shelf",
    "shirt",
    "shoes",
    "smile",
    "smoke",
    "sound",
    "space",
    "spoon",
    "sport",
    "stone",
    "sugar",
    "table",
    "taste",
    "train",
    "truck",
    "uncle",
    "visit",
    "watch",
    "wheel",
    "world",
    "write",
  ];
}
let container = document.querySelector(".container");
let timerDisplay = document.getElementById("timer");
let resultCard = document.getElementById("result-card");

let wrapper = document.createElement("div");
wrapper.className = "words-wrapper";
container.appendChild(wrapper);

let currentWords = [];
let charIndex = 0;
let mistakes = 0;
let isStarted = false;
let timeLeft = 15;
let timerId = null;
let startTime = null;
let currentScrollY = 0;
let wpmData = [];
let labels = [];
let totalFastPoints = 0;
let wordHasError = false;

let wpmHistory = [];
let timeline = [];
let chartTimer;



let getTime = localStorage.getItem("Time");
timeLeft = getTime ? parseInt(getTime) : 15;

const getFPValue = () => {
  const rawDiff = localStorage.getItem("Difficult") || "Easy";
  const diff = rawDiff.charAt(0).toUpperCase() + rawDiff.slice(1).toLowerCase();
  const fpMap = {
    Easy: 1, Normal: 4, Medium: 7, Hard: 11, Expert: 14,
    Master: 17, Extreme: 19, Insane: 20, Nightmare: 23, Ultimate: 27,
  };
  return fpMap[diff] || 5;
};

const applyKeyboardStyles = () => {
  const kb = document.getElementById("keyboard");
  if (kb) {
    kb.style.display = "flex";
    kb.style.flexDirection = "column";
    kb.style.alignItems = "center";
  }
};

let generateDictionaryWords = (count) => {
  let words = [];
  for (let i = 0; i < count; i++) {
    words.push(dictionary[Math.floor(Math.random() * dictionary.length)]);
  }
  return words;
};

let renderWords = (wordsArray) => {
  wrapper.innerHTML = "";
  wordsArray.forEach((word) => {
    for (let char of word) {
      let span = document.createElement("span");
      span.textContent = char;
      wrapper.appendChild(span);
    }
    let space = document.createElement("span");
    space.textContent = " ";
    wrapper.appendChild(space);
  });
  let cursor = document.createElement("div");
  cursor.className = "cursor";
  wrapper.appendChild(cursor);
};

let updateCursor = () => {
  let spans = wrapper.getElementsByTagName("span");
  let current = spans[charIndex];
  let cursor = document.querySelector(".cursor");
  if (current && cursor) {
    let spanRect = current.getBoundingClientRect();
    let wrapperRect = wrapper.getBoundingClientRect();
    cursor.style.left = (spanRect.left - wrapperRect.left) + "px";
    cursor.style.top = (spanRect.top - wrapperRect.top) + "px";
  }
};

let handleScroll = () => {
  let spans = wrapper.getElementsByTagName("span");
  let currentSpan = spans[charIndex];
  let nextSpan = spans[charIndex + 1];
  if (!currentSpan || !nextSpan) return;
  let currentRect = currentSpan.getBoundingClientRect();
  let nextRect = nextSpan.getBoundingClientRect();
  if (nextRect.top > currentRect.top) {
    let containerRect = container.getBoundingClientRect();
    let relativeTop = nextRect.top - containerRect.top;
    if (relativeTop > 65) {
      currentScrollY -= 48;
      wrapper.style.transform = `translateY(${currentScrollY}px)`;
    }
  }
};

let resetGame = async (newWords = true) => {
  clearInterval(timerId);
  clearInterval(chartTimer);
  charIndex = 0;
  mistakes = 0;
  isStarted = false;
  totalFastPoints = 0;
  wordHasError = false;
  timeLeft = parseInt(localStorage.getItem("Time")) || 15;
  currentScrollY = 0;
  wpmHistory = [];
  timeline = [];
  
  if (newWords) {
    const useAI = localStorage.getItem("aitxt") === "true";
    if (useAI) {
      try {
        const response = await fetch('/api/get_random_text');
        const data = await response.json();
        // Берем текст целиком и разбиваем его на массив слов по пробелам
        currentWords = data.text.trim().split(" ");
      } catch (e) {
        currentWords = generateDictionaryWords(40);
      }
    } else {
      currentWords = generateDictionaryWords(40);
    }
  }
  
  renderWords(currentWords);
  
  container.style.display = "block";
  resultCard.style.display = "none";
  timerDisplay.style.display = "none";
  timerDisplay.textContent = timeLeft;
  wrapper.style.transform = `translateY(0px)`;
  
  applyKeyboardStyles();
  const fpResElement = document.getElementById("fp-res");
  if (fpResElement) fpResElement.textContent = "0";
  setTimeout(updateCursor, 10);
};

const difficultyRewards = {
  "Easy": 1,
  "Normal": 4,
  "Medium": 7,
  "Hard": 11,
  "Expert": 14,
  "Master": 17,
  "Extreme": 19,
  "Insane": 20,
  "Nightmare": 23,
  "Ultimate": 27
};

// 1. Оптимизированная функция завершения игры
// 1. Оптимизированная функция завершения игры (finishGame)
let finishGame = async () => {
  clearInterval(timerId);
  clearInterval(chartTimer);

  let timeElapsed = (Date.now() - startTime) / 60000;
  let accuracy = charIndex > 0 ? Math.round(((charIndex - mistakes) / charIndex) * 100) : 0;
  let wpm = (accuracy > 10 && timeElapsed > 0) ? Math.round(charIndex / 5 / timeElapsed) : 0;
  
  let tm = document.getElementById('timer');
  if(tm) tm.style.display = "none";
  keyboard.style.display = "none";
  container.style.display = "none";
  resultCard.style.display = "block"; // Показываем блок результатов

  document.getElementById("wpm-res").textContent = wpm;
  document.getElementById("acc-res").textContent = accuracy;

  // 1. СРАЗУ рисуем график (не ждем ответа сервера!)
  setTimeout(() => {
    drawChart();
  }, 50);

  // Подсчет очков
  let currentDifficulty = localStorage.getItem("Difficult") || "Normal";
  let pointsPerWord = difficultyRewards[currentDifficulty] || 1;
  let earnedFP = totalFastPoints * pointsPerWord;

  const fpResElement = document.getElementById("fp-res");
  if (fpResElement) {
    fpResElement.textContent = "+" + earnedFP;
  }

  // Обновляем статистику в локальной памяти перед отправкой
  let globalFP = parseInt(localStorage.getItem("TotalFP")) || 0;
  localStorage.setItem("TotalFP", globalFP + earnedFP);

  let wpmHistoryAll = JSON.parse(localStorage.getItem("stats_wpm_history")) || [];
  wpmHistoryAll.push(wpm); 
  if (wpmHistoryAll.length > 50) wpmHistoryAll.shift();
  localStorage.setItem("stats_wpm_history", JSON.stringify(wpmHistoryAll));

  let totalTests = parseInt(localStorage.getItem("stats_totalTests")) || 0;
  localStorage.setItem("stats_totalTests", totalTests + 1);

  let bestWpm = parseInt(localStorage.getItem("stats_bestWpm")) || 0;
  if (wpm > bestWpm) localStorage.setItem("stats_bestWpm", wpm);

  let totalWpmSum = parseInt(localStorage.getItem("stats_totalWpmSum")) || 0;
  localStorage.setItem("stats_totalWpmSum", totalWpmSum + wpm);

  let totalAccSum = parseInt(localStorage.getItem("stats_totalAccSum")) || 0;
  localStorage.setItem("stats_totalAccSum", totalAccSum + accuracy);

  let totalMistakes = parseInt(localStorage.getItem("stats_totalMistakes")) || 0;
  localStorage.setItem("stats_totalMistakes", totalMistakes + mistakes);

  // 2. ОТПРАВЛЯЕМ ВСЕ ДАННЫЕ ОДНИМ СИНХРОННЫМ ПАКЕТОМ НА СЕРВЕР В data.json
  await syncSave();
};

// 2. Исправленная функция отрисовки графика (drawChart)
let drawChart = () => {
  const canvas = document.getElementById('wpmChart'); 
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const rootStyles = getComputedStyle(document.documentElement);
  const mainColor = rootStyles.getPropertyValue('--main-color').trim() || '#6c7cff';
  const subColor = rootStyles.getPropertyValue('--sub-color').trim() || '#64748b';

  if (window.myChart) window.myChart.destroy();

  // Создаем красивый полупрозрачный градиент для заливки вместо жесткого цвета
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, mainColor.startsWith('#') ? mainColor + '66' : 'rgba(108, 124, 255, 0.4)');
  gradient.addColorStop(1, 'transparent');

  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timeline,
      datasets: [{
        label: 'WPM',
        data: wpmHistory,
        borderColor: mainColor,
        backgroundColor: gradient, // Используем мягкий градиент
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: wpmHistory.length > 30 ? 0 : 3, // Скрываем точки на длинных тестах для красоты
        pointBackgroundColor: mainColor,
        pointBorderColor: mainColor,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { 
          beginAtZero: true, 
          grid: { 
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          }, 
          ticks: { 
            color: mainColor,
            font: { family: 'inherit', size: 12 }
          } 
        },
        x: { 
          grid: { display: false }, 
          ticks: { 
            color: mainColor,
            font: { family: 'inherit', size: 12 }
          } 
        }
      },
      plugins: { 
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: subColor,
          titleColor: mainColor,
          bodyColor: '#fff',
          borderColor: subColor,
          borderWidth: 1
        }
      }
    }
  });
};

window.isFetchingData = false;

window.isFetchingData = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Tab") {
    e.preventDefault();
    resetGame(true);
    return;
  }

  let spans = wrapper.getElementsByTagName("span");

  if (!isStarted && (e.key.length === 1 || e.key === " ")) {
    isStarted = true;
    startTime = Date.now();
    timerDisplay.style.display = "flex";
    
    chartTimer = setInterval(() => {
        let timeElapsedNow = (Date.now() - startTime) / 60000;
        let currentWpm = timeElapsedNow > 0 ? Math.round(charIndex / 5 / timeElapsedNow) : 0;
        wpmHistory.push(currentWpm);
        timeline.push(Math.round((Date.now() - startTime) / 1000));
    }, 1000);

    timerId = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) finishGame();
    }, 1000);
  }

  if (isStarted) {
    let current = spans[charIndex];

    if (e.key === "Backspace" && charIndex > 0) {
      charIndex--;
      spans[charIndex].className = "";
      wordHasError = true;
    } else if (e.key.length === 1) {
      if (e.key === " " && current && current.textContent !== " ") return;

      if (current) {
        if (e.key === current.textContent) {
          current.className = "correct";
          recordKeyStroke(current.textContent, true);
        } else {
          current.className = "incorrect";
          mistakes++;
          wordHasError = true;
          recordKeyStroke(current.textContent, false);
        }

        if (current.textContent === " ") {
          if (!wordHasError) {
            totalFastPoints++;
          }
          wordHasError = false;
          handleScroll();
        }

        charIndex++;

        if (charIndex > spans.length - 20 && !window.isFetchingData) {
          window.isFetchingData = true;
          const useAI = localStorage.getItem("aitxt") === "true";
          
          if (useAI) {
            fetch('/api/get_random_text')
              .then(res => res.json())
              .then(data => {
                let nextBatch = data.text.trim().split(/\s+/);
                const cursorElem = document.querySelector(".cursor");
                nextBatch.forEach((word) => {
                  for (let char of word) {
                    let s = document.createElement("span");
                    s.textContent = char;
                    wrapper.insertBefore(s, cursorElem);
                  }
                  let sp = document.createElement("span");
                  sp.textContent = " ";
                  wrapper.insertBefore(sp, cursorElem);
                });
                window.isFetchingData = false;
              })
              .catch(() => {
                window.isFetchingData = false;
              });
          } else {
            let nextBatch = generateDictionaryWords(20);
            const cursorElem = document.querySelector(".cursor");
            nextBatch.forEach((word) => {
              for (let char of word) {
                let s = document.createElement("span");
                s.textContent = char;
                wrapper.insertBefore(s, cursorElem);
              }
              let sp = document.createElement("span");
              sp.textContent = " ";
              wrapper.insertBefore(sp, cursorElem);
            });
            window.isFetchingData = false;
          }
        }
      }
    }
    updateCursor();
  }
});

const initApp = () => {
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsMenu = document.getElementById("settingsMenu");

  if (settingsBtn && settingsMenu) {
    settingsBtn.onclick = () => {
      const items = settingsMenu.querySelectorAll(".menu-item");

      if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
        // Начальные стили контейнера
        settingsMenu.style.background = "var(--sub-color)";
        settingsMenu.style.padding = "14px";
        settingsMenu.style.borderRadius = "22px";
        settingsMenu.style.display = "flex";
        settingsMenu.style.flexDirection = "column";
        settingsMenu.style.gap = "6px";
        settingsMenu.style.zIndex = "2000";
        settingsMenu.style.width = "250px";
        settingsMenu.style.height = "450px";
        settingsMenu.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.15)";
        settingsMenu.style.position = "absolute";
        settingsMenu.style.overflow = "hidden";

        let currentPadding = 0;
        let targetPadding = 25;

        // Сбрасываем айтемы перед анимацией
        items.forEach((item) => {
          item.style.padding = "0px 10px";
          item.style.opacity = "0";
          item.style.display = "flex";
        });

        // Та самая анимация расширения
        let expand = setInterval(() => {
          currentPadding += 2;
          items.forEach((item) => {
            item.style.padding = `${currentPadding}px 10px`;
            item.style.opacity = currentPadding / targetPadding;
          });

          if (currentPadding >= targetPadding) {
            clearInterval(expand);
            items.forEach((item) => {
              item.style.padding = "15px 50px"; // Финальный отступ
              item.style.opacity = "1";
            });
          }
        }, 1); 
      } else {
        // Анимация сворачивания
        let currentPadding = 15;
        let collapse = setInterval(() => {
          currentPadding -= 2;
          items.forEach((item) => {
            item.style.padding = `${currentPadding}px 10px`;
            item.style.opacity = currentPadding / 15;
          });

          if (currentPadding <= 0) {
            clearInterval(collapse);
            settingsMenu.style.display = "none";
          }
        }, 10);
      }
    };
  }

  const resBtns = document.querySelectorAll(".res-btn");
  if (resBtns.length >= 2) {
    resBtns[0].onclick = () => resetGame(false);
    resBtns[1].onclick = () => resetGame(true);
  }
};

window.onload = initApp;

// Сохраняем ошибки
let totalMistakes = parseInt(localStorage.getItem("TotalMistakes")) || 0;
localStorage.setItem("TotalMistakes", totalMistakes + mistakes);

let fastpanel = document.getElementById("fastpanel");
let paneltoggle = document.getElementById("difficult-toggle");
let paneltoggle1 = document.getElementById("difficult-toggle1");
let info = document.getElementById("info");
let info2 = document.getElementById("info2");
let btn1 = document.getElementById("btn1");
let time = document.getElementById("time");

window.addEventListener("DOMContentLoaded", async () => {
  const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
  
  if (!username) {
    fastpanel.style.display = "none";
    paneltoggle.checked = false;
    info.textContent = "Выключено";
    if (paneltoggle1) {
      paneltoggle1.checked = false;
    }
    if (info2) {
      info2.textContent = "Выключено";
    }
    time.value = 30;
    return;
  }

  try {
    const response = await fetch(`/api/get_stats/${username}`);
    if (response.status === 200) {
      const serverData = await response.json();

      const savedState = serverData.fastpanel || "false";
      if (savedState === "true") {
        fastpanel.style.display = "flex";
        paneltoggle.checked = true;
        info.textContent = "Включено";
      } else {
        fastpanel.style.display = "none";
        paneltoggle.checked = false;
        info.textContent = "Выключено";
      }
      
      const savedAIState = serverData.aitxt || "false";
      if (paneltoggle1) {
        if (savedAIState === "true") {
          paneltoggle1.checked = true;
          if (info2) info2.textContent = "Включено";
          localStorage.setItem("aitxt", "true");
        } else {
          paneltoggle1.checked = false;
          if (info2) info2.textContent = "Выключено";
          localStorage.setItem("aitxt", "false");
        }
      }

      const savedTime = serverData.Time || 30;
      time.value = savedTime;
      timeLeft = parseInt(savedTime); 
    }
  } catch (e) {
    console.error("Error loading settings:", e);
    fastpanel.style.display = "none";
    paneltoggle.checked = false;
    info.textContent = "Выключено";
    time.value = 30;
  }
});

paneltoggle.addEventListener("change", function () {
  const val = this.checked ? "true" : "false";
  info.textContent = this.checked ? "Включено" : "Выключено";
  fastpanel.style.display = this.checked ? "flex" : "none";

  if (typeof saveSettingToServer === "function") {
      saveSettingToServer("fastpanel", val);
  }
});

if (paneltoggle1) {
  paneltoggle1.addEventListener("change", function () {
    const val1 = this.checked ? "true" : "false";
    localStorage.setItem("aitxt", val1);
    if (info2) {
      info2.textContent = this.checked ? "Включено" : "Выключено";
    }

    if (typeof resetGame === "function") {
        resetGame(true);
    }

    if (typeof saveSettingToServer === "function") {
        saveSettingToServer("aitxt", val1);
    }
  });
}

btn1.addEventListener("click", function () {
  timeLeft = time.value;
  localStorage.setItem("Time", time.value);
});

time.addEventListener("keydown", (e) => {
  e.stopPropagation();
});

currentWords = generateDictionaryWords(40);
renderWords(currentWords);
initApp();
applyKeyboardStyles();
setTimeout(updateCursor, 100);

let Dif = document.getElementById("Dif");
window.addEventListener("DOMContentLoaded", function () {
  let getDif = localStorage.getItem("Difficult")
  if(getDif){
      Dif.textContent = "Сложность:" + getDif;
  } else{
      Dif.textContent = "Сложность:";
  }
});

let onefive = document.getElementById("15");
let three = document.getElementById("30");
let five = document.getElementById("50");
onefive.addEventListener("click", function () {
  time.value = "15";
  timeLeft = "15";
});
three.addEventListener("click", function () {
  time.value = "30";
  timeLeft = "30";
});
five.addEventListener("click", function () {
  time.value = "50";
  timeLeft = "50";
});



let hellocard = document.getElementById('hellocard')
let getFisttime = localStorage.getItem('IsThisFisrt')
let appwrapper = document.querySelector('.app-wrapper')
if(getFisttime){
  appwrapper.style.display = "none"
  hellocard.style.display = "flex"
  keyboard.style.display = "none"
} else{
   hellocard.style.display = 'none'
}

function Delete() {
  hellocard.style.display = 'none'
    appwrapper.style.display = "flex"
    appwrapper.style.flexDirection = "column"
  keyboard.style.display = "flex"
  localStorage.removeItem('IsThisFisrt')
}

function goTo(path) {
    window.open(path, '_blank');
}

// Функция отправки данных на сервер
async function saveResultsToServer(wpm, acc, fastPoints) {
    // Берем имя пользователя, под которым он зашел
    const username = localStorage.getItem('username'); 
    
    if (!username) {
        console.error("Пользователь не авторизован!");
        return;
    }

    const data = {
        username: username,
        wpm: wpm,
        acc: acc,
        fastPoints: fastPoints
        // Сюда можно добавить выбранную тему, уровень сложности и т.д.
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/save_stats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Данные успешно сохранены на сервере:", result);
    } catch (error) {
        console.error("Ошибка при сохранении:", error);
    }
}

// Вызови эту функцию в том месте твоего кода, где тест заканчивается
// saveResultsToServer(120, 98, 15);

// Функция записи статистики конкретной клавиши
// Функция записи статистики конкретной клавиши
function recordKeyStroke(char, isCorrect) {
    if (!char || char.length !== 1) return;
    const cleanChar = char.toUpperCase();
    
    // Разрешаем буквы, цифры, пробел и знаки препинания
    if (!/^[A-ZА-ЯЁ0-9 .,!?'"()-]$/.test(cleanChar)) return; 
    
    const keyName = cleanChar === " " ? "SPACE" : cleanChar;
    
    let keyStats = JSON.parse(localStorage.getItem("key_stats")) || {};
    if (!keyStats[keyName]) {
        keyStats[keyName] = { presses: 0, errors: 0 };
    }
    
    keyStats[keyName].presses += 1;
    if (!isCorrect) {
        keyStats[keyName].errors += 1;
    }
    
    localStorage.setItem("key_stats", JSON.stringify(keyStats));
}

