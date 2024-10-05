document.getElementById('create-hero-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('hero-name').value;
    const power = document.getElementById('hero-power').value;
    const powersCount = document.getElementById('hero-power-count').value;

    const newHero = { name, power, powersCount: parseInt(powersCount) };
    
    // Save hero data in localStorage or send it to server
    const heroes = JSON.parse(localStorage.getItem('heroes')) || [];
    heroes.push(newHero);
    localStorage.setItem('heroes', JSON.stringify(heroes));

    window.location.href = 'index.html';
});
