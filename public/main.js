import { fetchHeroes } from './api.js';

class Hero {
    constructor(id, name, power, powersCount) { 
        this.id = id;
        this.name = name;
        this.power = power;
        this.powersCount = powersCount; 
    }
}

let showroomList = [];
let currentList = []; // змінна для тимчасового зберігання фільтрованого або відсортованого списку героїв

const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = ''; 

    list.forEach((el, idx) => {
        const card = document.createElement('div');
        card.id = `showroom-${el.id}`;
        card.className = 'w-60 p-4 bg-gray-700 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl';

        const name = document.createElement('p');
        name.className = 'text-xl font-semibold';
        name.textContent = el.name;

        const power = document.createElement('li');
        power.className = 'text-sm';
        power.textContent = `Power: ${el.power}`;

        const powersCount = document.createElement('li');
        powersCount.className = 'text-sm';
        powersCount.textContent = `Power Count: ${el.powersCount}`;

        const editButton = document.createElement('button');
        editButton.className = 'mt-4 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editHero(el.id);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'mt-4 w-full py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteCard(`showroom-${el.id}`);

        const ul = document.createElement('ul');
        ul.appendChild(power);
        ul.appendChild(powersCount);

        card.appendChild(name);
        card.appendChild(ul);
        card.appendChild(editButton);
        card.appendChild(deleteButton);

        showroom.appendChild(card);
    });
};

const editHero = (id) => {
    localStorage.setItem('editHeroId', id);
    window.location.href = 'edit.html';
};

const clearSearch = () => {
    drawList(showroomList); 
};

const searchCard = () => {
    const search = document.getElementById('search-input').value.toLowerCase(); //отримує текст з поля введення для пошуку.
    currentList = showroomList.filter((el) => el.name.toLowerCase().includes(search));
    drawList(currentList);
};

const deleteCard = async (cardId) => {
    const heroId = cardId.slice(8); //отримує індекс картки, вирізаючи частину з ідентифікатора ('showroom-').
    const response = await fetch(`http://localhost:3000/heroes/${heroId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        showroomList = showroomList.filter(hero => hero.id !== heroId); //видаляє відповідного героя зі списку
        drawList(showroomList); //оновлює список на сторінці
    } else {
        console.error('Failed to delete hero');
    }
};

const sortCheckbox = (checkbox) => {
    if (checkbox.checked) {
        currentList = [...showroomList];
        currentList.sort((a, b) => a.powersCount - b.powersCount); // Виправлено для powersCount
        drawList(currentList);
    } else {
        drawList(showroomList);
    }
};

const alertAveragePowerCount = () => {
    const average = showroomList.reduce((accumulator, currentHero) => accumulator + currentHero.powersCount, 0) / showroomList.length; // Виправлено для powersCount
    alert(average);
};

const init = async () => {
    try {
        const response = await fetchHeroes();
        if (!response.ok) {
            throw new Error('Failed to fetch heroes');
        }
        const heroes = await response.json();
        showroomList = heroes.map(hero => new Hero(hero.id, hero.name, hero.power, hero.powersCount));
        drawList(showroomList);
    } catch (error) {
        console.error('Error fetching heroes:', error);
    }
};

init();