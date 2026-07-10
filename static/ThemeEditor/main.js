let wordwrapper = document.querySelectorAll("span");
let menubtn = document.querySelectorAll(".menu-btn");
let keyboardset = document.getElementById("keyboardset");
let logotop = document.querySelectorAll(".logo-top");

let NightNeon = document.getElementById("NightNeon");
NightNeon.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#eaeaff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#6c7cff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#6c7cff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#2a2f4a";
  });
  document.body.style.backgroundColor = "#0b0f1a";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#161b2e";
    keyboardset.style.borderColor = "#2a2f4a";
  }
});

let TechBlue = document.getElementById("TechBlue");
TechBlue.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffffff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#93c5fd";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#00a6fb";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#002855";
  });
  document.body.style.backgroundColor = "#001233";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#001845";
    keyboardset.style.borderColor = "#002855";
  }
});

let DarkGraphite = document.getElementById("DarkGraphite");
DarkGraphite.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f5f5f5";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#a1a1aa";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#a1a1aa";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#52525b";
  });
  document.body.style.backgroundColor = "#1c1c1c";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#262626";
    keyboardset.style.borderColor = "#52525b";
  }
});

let LightMinimal = document.getElementById("LightMinimal");
LightMinimal.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#1a1a1a";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#2563eb";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#2563eb";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#a1a1aa";
  });
  document.body.style.backgroundColor = "#f2f2f2";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#ffffff";
    keyboardset.style.borderColor = "#a1a1aa";
  }
});

let PurpleCyber = document.getElementById("PurpleCyber");
PurpleCyber.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ede7ff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#bc95ff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#bc95ff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#3b1b5e";
  });
  document.body.style.backgroundColor = "#0f051d";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#1a0b2e";
    keyboardset.style.borderColor = "#3b1b5e";
  }
});

let GreenCode = document.getElementById("GreenCode");
GreenCode.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#cfffe1";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#4ade80";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#4ade80";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#144029";
  });
  document.body.style.backgroundColor = "#08140e";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#0d261a";
    keyboardset.style.borderColor = "#144029";
  }
});

let SandComfort = document.getElementById("SandComfort");
SandComfort.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#4a3f35";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#b58900";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#b58900";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#ddd6c1";
  });
  document.body.style.backgroundColor = "#fdf6e3";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#eee8d5";
    keyboardset.style.borderColor = "#ddd6c1";
  }
});

let RedAccent = document.getElementById("RedAccent");
RedAccent.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffffff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ef4444";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ef4444";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4a1010";
  });
  document.body.style.backgroundColor = "#1a0505";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#2d0a0a";
    keyboardset.style.borderColor = "#4a1010";
  }
});

let ColdBlueGray = document.getElementById("ColdBlueGray");
ColdBlueGray.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e8ecf1";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#38bdf8";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#38bdf8";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#334155";
  });
  document.body.style.backgroundColor = "#0f172a";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#1e293b";
    keyboardset.style.borderColor = "#334155";
  }
});

let BlackPremium = document.getElementById("BlackPremium");
BlackPremium.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#d4af37";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#facc15";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#facc15";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#1a1a1a";
  });
  document.body.style.backgroundColor = "#000000";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#111111";
    keyboardset.style.borderColor = "#1a1a1a";
  }
});

let Oceanic = document.getElementById("Oceanic");
Oceanic.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#d1f2ff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#00d4ff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#00d4ff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#163a5f";
  });
  document.body.style.backgroundColor = "#001b2e";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#00253e";
    keyboardset.style.borderColor = "#163a5f";
  }
});

let DeepForest = document.getElementById("DeepForest");
DeepForest.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e0ffe0";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#2ecc71";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#2ecc71";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#1b331b";
  });
  document.body.style.backgroundColor = "#0a1a0a";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#122612";
    keyboardset.style.borderColor = "#1b331b";
  }
});

let Midnight = document.getElementById("Midnight");
Midnight.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f0f0f0";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ffffff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ffffff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#222222";
  });
  document.body.style.backgroundColor = "#050505";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#111111";
    keyboardset.style.borderColor = "#222222";
  }
});

let Sakura = document.getElementById("Sakura");
Sakura.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffe0ed";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ff85a1";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ff85a1";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#5e3a4b";
  });
  document.body.style.backgroundColor = "#2d1b24";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3d2631";
    keyboardset.style.borderColor = "#5e3a4b";
  }
});

let Solarized = document.getElementById("Solarized");
Solarized.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#839496";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#268bd2";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#268bd2";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#586e75";
  });
  document.body.style.backgroundColor = "#002b36";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#073642";
    keyboardset.style.borderColor = "#586e75";
  }
});

let Nord = document.getElementById("Nord");
Nord.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#eceff4";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#88c0d0";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#88c0d0";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4c566a";
  });
  document.body.style.backgroundColor = "#2e3440";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3b4252";
    keyboardset.style.borderColor = "#4c566a";
  }
});

let Dracula = document.getElementById("Dracula");
Dracula.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f8f8f2";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#bd93f9";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#bd93f9";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#6272a4";
  });
  document.body.style.backgroundColor = "#282a36";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#44475a";
    keyboardset.style.borderColor = "#6272a4";
  }
});

let Monokai = document.getElementById("Monokai");
Monokai.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f8f8f2";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#a6e22e";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#a6e22e";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#75715e";
  });
  document.body.style.backgroundColor = "#272822";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3e3d32";
    keyboardset.style.borderColor = "#75715e";
  }
});

let Cyberpunk = document.getElementById("Cyberpunk");
Cyberpunk.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#00ff9f";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#f5ed00";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#f5ed00";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#003b46";
  });
  document.body.style.backgroundColor = "#00040d";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#001a1a";
    keyboardset.style.borderColor = "#003b46";
  }
});

let Vaporwave = document.getElementById("Vaporwave");
Vaporwave.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ff71ce";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#01cdfe";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#01cdfe";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4e148c";
  });
  document.body.style.backgroundColor = "#2d0a4e";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3d1266";
    keyboardset.style.borderColor = "#4e148c";
  }
});

let Retro = document.getElementById("Retro");
Retro.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#d6d5c9";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#a22c29";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#a22c29";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#625c58";
  });
  document.body.style.backgroundColor = "#322d29";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3e3935";
    keyboardset.style.borderColor = "#625c58";
  }
});

let Paper = document.getElementById("Paper");
Paper.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#444444";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#222222";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#222222";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#cccccc";
  });
  document.body.style.backgroundColor = "#eeeeee";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#e0e0e0";
    keyboardset.style.borderColor = "#cccccc";
  }
});

let Copper = document.getElementById("Copper");
Copper.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e2b49a";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#b87333";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#b87333";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#3d2b2b";
  });
  document.body.style.backgroundColor = "#1b1212";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#261a1a";
    keyboardset.style.borderColor = "#3d2b2b";
  }
});

let Lavender = document.getElementById("Lavender");
Lavender.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e6e6fa";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#9370db";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#9370db";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#30305a";
  });
  document.body.style.backgroundColor = "#1a1a2e";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#24244a";
    keyboardset.style.borderColor = "#30305a";
  }
});

let Blood = document.getElementById("Blood");
Blood.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ff0000";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#880000";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#880000";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#440000";
  });
  document.body.style.backgroundColor = "#110000";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#220000";
    keyboardset.style.borderColor = "#440000";
  }
});

let Lime = document.getElementById("Lime");
Lime.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e0f0d0";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#a4c639";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#a4c639";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#303b1e";
  });
  document.body.style.backgroundColor = "#1a1f10";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#232a16";
    keyboardset.style.borderColor = "#303b1e";
  }
});

let Coffee = document.getElementById("Coffee");
Coffee.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f5f5dc";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#6f4e37";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#6f4e37";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4a3000";
  });
  document.body.style.backgroundColor = "#2b1700";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3d2100";
    keyboardset.style.borderColor = "#4a3000";
  }
});

let Ice = document.getElementById("Ice");
Ice.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#006064";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#00bcd4";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#00bcd4";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#80deea";
  });
  document.body.style.backgroundColor = "#e0f7fa";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#b2ebf2";
    keyboardset.style.borderColor = "#80deea";
  }
});

let Slate = document.getElementById("Slate");
Slate.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f1f5f9";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#94a3b8";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#94a3b8";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#334155";
  });
  document.body.style.backgroundColor = "#0f172a";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#1e293b";
    keyboardset.style.borderColor = "#334155";
  }
});

let Bumblebee = document.getElementById("Bumblebee");
Bumblebee.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffffff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#facc15";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#facc15";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#3d3d3d";
  });
  document.body.style.backgroundColor = "#222222";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#2d2d2d";
    keyboardset.style.borderColor = "#3d3d3d";
  }
});

let Marshmallow = document.getElementById("Marshmallow");
Marshmallow.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#880e4f";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#c2185b";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#c2185b";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#f48fb1";
  });
  document.body.style.backgroundColor = "#f8bbd0";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#fce4ec";
    keyboardset.style.borderColor = "#f48fb1";
  }
});

let Toxic = document.getElementById("Toxic");
Toxic.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#39ff14";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#32cd32";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#32cd32";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#1a1a1a";
  });
  document.body.style.backgroundColor = "#000000";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#0d0d0d";
    keyboardset.style.borderColor = "#1a1a1a";
  }
});

let Blueprint = document.getElementById("Blueprint");
Blueprint.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffffff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#8eaadb";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#8eaadb";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#2a4a7c";
  });
  document.body.style.backgroundColor = "#1a3a6c";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#204682";
    keyboardset.style.borderColor = "#2a4a7c";
  }
});

let Carbon = document.getElementById("Carbon");
Carbon.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f4f4f4";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#393939";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#393939";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#262626";
  });
  document.body.style.backgroundColor = "#161616";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#222222";
    keyboardset.style.borderColor = "#262626";
  }
});

let Sunset = document.getElementById("Sunset");
Sunset.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ee4540";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#c72c41";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#c72c41";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#510a32";
  });
  document.body.style.backgroundColor = "#2d142c";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#3e1c3d";
    keyboardset.style.borderColor = "#510a32";
  }
});

let Matrix = document.getElementById("Matrix");
Matrix.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#00ff41";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#008f11";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#008f11";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#003b00";
  });
  document.body.style.backgroundColor = "#000000";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#001500";
    keyboardset.style.borderColor = "#003b00";
  }
});

let Ghost = document.getElementById("Ghost");
Ghost.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#333333";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#9e9e9e";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#9e9e9e";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#e0e0e0";
  });
  document.body.style.backgroundColor = "#f5f5f5";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#eeeeee";
    keyboardset.style.borderColor = "#e0e0e0";
  }
});

let Mars = document.getElementById("Mars");
Mars.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ff9d6f";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#c1440e";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#c1440e";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#692a08";
  });
  document.body.style.backgroundColor = "#451804";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#5a2005";
    keyboardset.style.borderColor = "#692a08";
  }
});

let NeonPink = document.getElementById("NeonPink");
NeonPink.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffffff";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ff00ff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ff00ff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4d004d";
  });
  document.body.style.backgroundColor = "#1a001a";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#2a002a";
    keyboardset.style.borderColor = "#4d004d";
  }
});

let GoldenRed = document.getElementById("GoldenRed");
GoldenRed.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ffd700";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ffd700";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ffd700";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#7a0000";
  });
  document.body.style.backgroundColor = "#4a0000";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#5d0000";
    keyboardset.style.borderColor = "#7a0000";
  }
});

let DeepSea = document.getElementById("DeepSea");
DeepSea.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#d6deeb";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#82aaff";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#82aaff";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#1d3b53";
  });
  document.body.style.backgroundColor = "#011627";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#0b2942";
    keyboardset.style.borderColor = "#1d3b53";
  }
});

let Emerald = document.getElementById("Emerald");
Emerald.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#d1fae5";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#10b981";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#10b981";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#064e3b";
  });
  document.body.style.backgroundColor = "#002b1b";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#003d27";
    keyboardset.style.borderColor = "#064e3b";
  }
});

let Synthwave = document.getElementById("Synthwave");
Synthwave.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#ff7edb";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#36f9f6";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#36f9f6";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#4d2d52";
  });
  document.body.style.backgroundColor = "#241b2f";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#2f233d";
    keyboardset.style.borderColor = "#4d2d52";
  }
});

let Terra = document.getElementById("Terra");
Terra.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#f2e9e4";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#d4a373";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#d4a373";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#5a4534";
  });
  document.body.style.backgroundColor = "#3d2b1f";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#4a3728";
    keyboardset.style.borderColor = "#5a4534";
  }
});

let Moonlight = document.getElementById("Moonlight");
Moonlight.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#cad3f5";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#8aadf4";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#8aadf4";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#363a4f";
  });
  document.body.style.backgroundColor = "#1e2030";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#24273a";
    keyboardset.style.borderColor = "#363a4f";
  }
});

let RosePine = document.getElementById("RosePine");
RosePine.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#e0def4";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#ebbcba";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#ebbcba";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#26233a";
  });
  document.body.style.backgroundColor = "#191724";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#1f1d2e";
    keyboardset.style.borderColor = "#26233a";
  }
});

let Material = document.getElementById("Material");
Material.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#eceff1";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#80cbc4";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#80cbc4";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#37474f";
  });
  document.body.style.backgroundColor = "#263238";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#2e3d44";
    keyboardset.style.borderColor = "#37474f";
  }
});

let Abyss = document.getElementById("Abyss");
Abyss.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#6688aa";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#114477";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#114477";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#002244";
  });
  document.body.style.backgroundColor = "#000c18";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#001529";
    keyboardset.style.borderColor = "#002244";
  }
});

let Kuro = document.getElementById("Kuro");
Kuro.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#888888";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#444444";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#444444";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#222222";
  });
  document.body.style.backgroundColor = "#121212";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#1a1a1a";
    keyboardset.style.borderColor = "#222222";
  }
});

let Cream = document.getElementById("Cream");
Cream.addEventListener("click", function () {
  let keys = document.querySelectorAll(".key");
  wordwrapper.forEach((span) => {
    span.style.color = "#5d4037";
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = "#8d6e63";
  });
  logotop.forEach((logo) => {
    logo.style.color = "#8d6e63";
  });
  keys.forEach((key) => {
    key.style.backgroundColor = "#e6dfb1";
  });
  document.body.style.backgroundColor = "#fffdd0";
  if (keyboardset) {
    keyboardset.style.backgroundColor = "#f3e5ab";
    keyboardset.style.borderColor = "#e6dfb1";
  }
});



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
  HyperGlass: {
    bg: "rgba(15, 15, 15, 0.4)", 
    text: "#ffffff",
    panel: "rgba(255, 255, 255, 0.05)",
    sub: "rgba(255, 255, 255, 0.1)",
    main: "#00d4ff", 
  },
};

function applyTheme(themeKey) {
  const theme = themes[themeKey];
  if (!theme) return;

  const wordwrapper = document.querySelectorAll("span");
  const menubtn = document.querySelectorAll(".menu-btn");
  const keyboardset = document.getElementById("keyboardset");
  const logotop = document.querySelectorAll(".logo-top");
  const keys = document.querySelectorAll(".key");
  const space = document.querySelector(".space");

  wordwrapper.forEach((span) => {
    span.style.color = theme.text;
  });
  menubtn.forEach((btn) => {
    btn.style.backgroundColor = theme.main;
  });
  logotop.forEach((logo) => {
    logo.style.color = theme.main;
  });

  keys.forEach((key) => {
    key.style.background = theme.sub;
    key.style.color = theme.text;
  });

  if (space) space.style.background = theme.sub;

  document.body.style.backgroundColor = theme.bg;
  if (keyboardset) {
    keyboardset.style.backgroundColor = theme.panel;
    keyboardset.style.borderColor = theme.sub;
  }

  localStorage.setItem("selectedTheme", themeKey);
}

Object.keys(themes).forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.onclick = async () => {
      // 1. Применяем тему визуально на странице
      applyTheme(id);

      // 2. Находим имя текущего пользователя
      const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
      
      if (username) {
        try {
          // 3. Отправляем fetch-запрос для записи выбранной темы в data.json
          await fetch('/api/save_stats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              selectedTheme: id // Отправляем ID выбранной темы
            })
          });
        } catch (error) {
          console.error("Ошибка сохранения темы на сервере:", error);
        }
      }
    };
  }
});

// Загрузка сохраненной темы при старте
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("selectedTheme");
  applyTheme(savedTheme || "NightNeon");
});


