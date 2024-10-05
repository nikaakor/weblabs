document.addEventListener('DOMContentLoaded', () => {
    const heroIndex = localStorage.getItem('editHeroIndex'); // отримуємо індекс героя
    const heroes = JSON.parse(localStorage.getItem('heroes')) || [];

    // Логування для перевірки
    console.log('Hero Index:', heroIndex);
    console.log('Heroes:', heroes);

    if (heroIndex === null || heroIndex === undefined || heroIndex < 0 || heroIndex >= heroes.length) {
        alert('Помилка: невірний індекс героя.');
        window.location.href = 'index.html';  // перенаправлення назад на головну
        return;
    }

    // Завантажуємо дані героя в поля форми
    const hero = heroes[heroIndex];
    document.getElementById('edit-hero-name').value = hero.name;
    document.getElementById('edit-hero-power').value = hero.power;
    document.getElementById('edit-hero-power-count').value = hero.powersCount;

    // Обробка події збереження
    document.getElementById('edit-hero-form').addEventListener('submit', function(event) {
        event.preventDefault();  // забороняємо стандартну поведінку

        // Отримуємо нові значення з форми
        const updatedName = document.getElementById('edit-hero-name').value;
        const updatedPower = document.getElementById('edit-hero-power').value;
        const updatedPowerCount = document.getElementById('edit-hero-power-count').value;

        // Перевірка полів
        if (updatedName && updatedPower && updatedPowerCount) {
            // Оновлюємо героя в масиві
            heroes[heroIndex] = {
                name: updatedName,
                power: updatedPower,
                powersCount: parseInt(updatedPowerCount)
            };

            // Зберігаємо оновлений масив у localStorage
            localStorage.setItem('heroes', JSON.stringify(heroes));

            // Після збереження перенаправляємо на index.html
            window.location.replace('index.html');
        } else {
            alert('Будь ласка, заповніть усі поля');
        }
    });
});
