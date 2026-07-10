// static/Statics/main.js

// Функция отрисовки графика истории WPM напрямую из серверного JSON
const drawHistoryChartDirect = (serverData) => {
  const canvas = document.getElementById("wpmChart");
  if (!canvas || !serverData) return;

  const ctx = canvas.getContext("2d");
  
  // Безопасно парсим историю результатов из JSON на сервере
  let wpmHistoryAll = [];
  try {
      wpmHistoryAll = typeof serverData.stats_wpm_history === "string" 
          ? JSON.parse(serverData.stats_wpm_history) 
          : (serverData.stats_wpm_history || []);
  } catch (e) {
      console.error("Ошибка парсинга истории WPM с сервера:", e);
  }

  const rootStyles = getComputedStyle(document.documentElement);
  const mainColor = rootStyles.getPropertyValue("--main-color").trim() || "#6c7cff";
  const labels = wpmHistoryAll.map((_, index) => index + 1);

  if (window.profileChart) window.profileChart.destroy();

  window.profileChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "WPM History",
          data: wpmHistoryAll,
          borderColor: mainColor,
          backgroundColor: mainColor + "33", // Полупрозрачная заливка под графиком
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          pointRadius: wpmHistoryAll.length > 20 ? 0 : 3,
          pointBackgroundColor: mainColor,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { color: mainColor },
        },
        x: {
          display: wpmHistoryAll.length > 0,
          grid: { display: false },
          ticks: { color: mainColor },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
};

// Функция загрузки и рендеринга таблицы лидеров
const loadLeaderboardDirect = async () => {
  const tbody = document.getElementById("leaderboard-body");
  if (!tbody) return;

  try {
      // Запрашиваем отсортированный ТОП-10 игроков у FastAPI
      const response = await fetch('/api/leaderboard');
      const leaderboard = await response.json();

      tbody.innerHTML = "";

      if (leaderboard.length === 0) {
          tbody.innerHTML = `<tr><td colspan="4" style="color: var(--sub-color); padding: 30px;">Результаты ещё не записаны. Стань первым!</td></tr>`;
          return;
      }

      leaderboard.forEach((player, index) => {
          const rank = index + 1;
          let displayRank = rank;

          // Красивые кубки для победителей
          if (rank === 1) displayRank = "🥇";
          else if (rank === 2) displayRank = "🥈";
          else if (rank === 3) displayRank = "🥉";

          const tr = document.createElement("tr");
          tr.className = `row-rank-${rank}`;

          tr.innerHTML = `
              <td style="font-weight: 700; font-size: 1.25rem;">${displayRank}</td>
              <td style="text-align: left; padding-left: 15px;">${player.username}</td>
              <td style="font-weight: 700; color: var(--main-color);">${player.bestWpm} WPM</td>
              <td>${player.totalFp} FP</td>
          `;
          tbody.appendChild(tr);
      });
  } catch (error) {
      console.error("Не удалось загрузить таблицу лидеров:", error);
      tbody.innerHTML = `<tr><td colspan="4" style="color: var(--error-color); padding: 30px;">Ошибка получения данных с сервера.</td></tr>`;
  }
};

// ==========================================
// ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ СТАТИСТИКИ
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || localStorage.getItem("name");
    
    // Выводим приветствие
    let usernameDisplay = document.getElementById("user-name");
    if (usernameDisplay) {
        usernameDisplay.textContent = username ? "Добро пожаловать, " + username : "Добро пожаловать, Гость";
    }

    if (username) {
        try {
            // Скачиваем свежие данные с сервера напрямую
            const response = await fetch(`/api/get_stats/${username}`);
            if (response.status === 200) {
                const serverData = await response.json();
                
                // Рендерим график WPM на основе данных из data.json
                drawHistoryChartDirect(serverData);
            }
        } catch (error) {
            console.error("Ошибка при получении истории WPM:", error);
        }
    }

    // Параллельно загружаем таблицу лидеров
    await loadLeaderboardDirect();
});