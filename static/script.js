// Функция для получения userId из URL
function getUserIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('userId');
}

async function fetchUserData() {
    const userId = getUserIdFromURL(); // Получаем userId из URL
    if (!userId) {
        console.error('User ID не найден в URL');
        return;
    }

    try {
        const response = await fetch(`https://xxenesss.github.io/mypag/api/user/${userId}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }
        const userData = await response.json();
        document.getElementById('username').textContent = userData.username;
        document.getElementById('balance').textContent = `Баланс: $${userData.balance}`;
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('refresh-button').addEventListener('click', fetchUserData);

// Загрузка данных при первом открытии
fetchUserData();
