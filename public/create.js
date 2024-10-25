document.getElementById('create-hero-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('hero-name').value;
    const power = document.getElementById('hero-power').value;
    const powersCount = document.getElementById('hero-power-count').value;

    const newHero = { name, power, powersCount: parseInt(powersCount) };

    const response = await fetch('http://localhost:3000/heroes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHero)
    });

    if (response.ok) {
        const hero = await response.json();
        console.log('Hero added:', hero);
        window.location.href = 'index.html'; // Перехід на головну сторінку після додавання героя
    } else {
        console.error('Failed to add hero');
    }
});