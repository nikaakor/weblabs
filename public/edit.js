document.addEventListener('DOMContentLoaded', async () => {
  const heroId = localStorage.getItem('editHeroId');
  const response = await fetch(`http://localhost:3000/heroes/${heroId}`);
  if (response.ok) {
    const hero = await response.json();
    document.getElementById('heroName').value = hero.name;
    document.getElementById('heroDescription').value = hero.description;
  } else {
    console.error('Failed to fetch hero');
  }
});

document.getElementById('editHeroForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const heroId = localStorage.getItem('editHeroId');
  const heroName = document.getElementById('heroName').value;
  const heroDescription = document.getElementById('heroDescription').value;

  const updatedHero = {
    name: heroName,
    description: heroDescription
  };

  const response = await fetch(`http://localhost:3000/heroes/${heroId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedHero)
  });

  if (response.ok) {
    const hero = await response.json();
    console.log('Hero updated:', hero);
    window.location.href = 'index.html'; // Перехід на головну сторінку після оновлення героя
  } else {
    console.error('Failed to update hero');
  }
});