class Hero {
    constructor(name, power, powersCount) { 
        this.name = name;
        this.power = power;
        this.powersCount = powersCount; 
    }
}

const showroomList = [];
let currentList = []; // змінна для тимчасового зберігання фільтрованого або відсортованого списку героїв

const data = [
    { name: 'SpiderMan', power: 'Web', powersCount: 5 },
    { name: 'IronMan', power: 'Flight', powersCount: 4 },
    { name: 'Hulk', power: 'Strength', powersCount: 7 },
    { name: 'Pietro', power: 'Speed', powersCount: 2 },
    { name: 'AntMan', power: 'Size Changing', powersCount: 3 },
    { name: 'Capitan America', power: 'Age', powersCount: 4 },
    { name: 'Thor', power: 'Son of Odin', powersCount: 6 },
];


data.forEach((hero) => { //ітерація через кожен об'єкт у масиві data
    showroomList.push(new Hero(hero.name, hero.power, hero.powersCount)); //додає створений об'єкт до масиву showroomList

});

// Load heroes from localStorage, or use default data if no heroes are stored
const savedHeroes = JSON.parse(localStorage.getItem('heroes')) || data;
showroomList.push(...savedHeroes);

const drawList = (list) => {
    const showroom = document.getElementById('showroom');
    showroom.innerHTML = ''; // Clear previous content

    // Display each hero as a card in the showroom
    list.forEach((el, idx) => {
        showroom.innerHTML += `
            <div id="showroom-${idx}" class="w-60 p-4 bg-gray-700 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
                <p class="text-xl font-semibold">${el.name}</p>
                <ul>
                    <li class="text-sm">Power: ${el.power}</li>
                    <li class="text-sm">Power Count: ${el.powersCount}</li>
                </ul>
                <button class="mt-4 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all" onClick="editHero(${idx})">Edit</button>
                <button class="mt-4 w-full py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all" onClick="deleteCard('showroom-${idx}')">Delete</button>
            </div>
        `;
    });
};

// Redirect to the edit page for the selected hero
const editHero = (idx) => {
    localStorage.setItem('editHeroIndex', idx);
    window.location.href = 'edit.html';
};





const clearSearch = () => {
    drawList(showroomList); 
};

const searchCard = () => {
    const search = document.getElementById('search-input').value; //oтримує текст з поля введення для пошуку.
    currentList = showroomList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
    drawList(currentList);
};

const deleteCard = (cardId) => {
    const showroom = document.getElementById('showroom');
    showroom.removeChild(document.getElementById(cardId));
    const cardIndex = +cardId.slice(8); //oтримує індекс картки, вирізаючи частину з ідентифікатора ('showroom-').
    showroomList.splice(cardIndex, 1); //видаляє відповідного героя зі списку
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

drawList(showroomList);

