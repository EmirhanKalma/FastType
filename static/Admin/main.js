// static/Admin/main.js

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Делаем первый запрос к бэкенду, собираем метрики и список людей
    await loadDashboardData();
});

async function loadDashboardData() {
    const tbody = document.getElementById("users-table-body");
    if (!tbody) return;

    try {
        const response = await fetch('/api/admin/data');
        const res = await response.json();

        if (res.status === "success") {
            // Отрисовываем метрики дашборда
            document.getElementById("metric-users").textContent = res.metrics.totalUsers;
            document.getElementById("metric-tests").textContent = res.metrics.totalTests;
            document.getElementById("metric-fp").textContent = res.metrics.totalFp;
            document.getElementById("metric-mistakes").textContent = res.metrics.totalMistakes;

            tbody.innerHTML = "";

            // Заполняем таблицу пользователей
            res.users.forEach((user) => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td style="font-weight:700; color: var(--main-color);">${user.username}</td>
                    <td>${user.created_at}</td>
                    
                    <!-- Рекорд WPM -->
                    <td>
                        <input type="number" class="action-input" id="wpm-${user.username}" value="${user.bestWpm}">
                        <button class="admin-btn" onclick="saveField('${user.username}', 'stats_bestWpm', 'wpm-${user.username}')">💾</button>
                    </td>

                    <!-- Баланс FP -->
                    <td>
                        <input type="number" class="action-input" id="fp-${user.username}" value="${user.TotalFP}">
                        <button class="admin-btn" onclick="saveField('${user.username}', 'TotalFP', 'fp-${user.username}')">💾</button>
                    </td>

                    <!-- Всего тестов -->
                    <td>
                        <input type="number" class="action-input" id="tests-${user.username}" value="${user.totalTests}">
                        <button class="admin-btn" onclick="saveField('${user.username}', 'stats_totalTests', 'tests-${user.username}')">💾</button>
                    </td>

                    <td>${user.selectedTheme}</td>
                    
                    <!-- Кнопка удаления -->
                    <td>
                        <button class="admin-btn admin-btn-delete" onclick="deleteUser('${user.username}')">Удалить ❌</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    } catch (e) {
        console.error("Не удалось подгрузить базу данных для админа:", e);
        tbody.innerHTML = `<tr><td colspan="7" style="color: red; text-align: center; padding: 20px;">Ошибка доступа к базе данных сервера.</td></tr>`;
    }
}

// Изменение любого конкретного поля пользователя на сервере
async function saveField(targetUser, field, inputId) {
    const inputVal = document.getElementById(inputId).value;

    try {
        const response = await fetch('/api/admin/edit_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                target_username: targetUser,
                field: field,
                value: inputVal
            })
        });
        const res = await response.json();
        if (res.status === "success") {
            alert(`Успешно обновлено поле "${field}" для игрока ${targetUser}!`);
            loadDashboardData(); // Обновляем дашборд
        } else {
            alert(res.message);
        }
    } catch (e) {
        alert("Ошибка сети.");
    }
}

// Принудительное удаление пользователя из базы
async function deleteUser(targetUser) {
    if (!confirm(`Вы действительно хотите удалить пользователя "${targetUser}" из базы данных навсегда?`)) return;

    try {
        const response = await fetch('/api/admin/delete_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_username: targetUser })
        });
        const res = await response.json();
        if (res.status === "success") {
            alert(res.message);
            loadDashboardData();
        }
    } catch (e) {
        alert("Ошибка сети при удалении.");
    }
}