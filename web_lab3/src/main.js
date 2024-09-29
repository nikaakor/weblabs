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

const drawList = (list) => {
    const showroom = document.getElementById('showroom'); //oтримує елемент HTML з ідентифікатором showroom, куди будуть додаватися герої
    showroom.innerHTML = ''; //oчищує вміст showroom, щоб уникнути дублювання при повторному відображенні списку.
    list.forEach((el, idx) => {
        showroom.innerHTML += `
            <div id="showroom-${idx}" class="w-40 bg-slate-200 p-2 rounded-[12px] mr-3 mt-5 h-[130px] text-center shadow-xl">
                <p class="text-lg text-black">${el.name}</p> <!-- Зміна кольору тексту на чорний -->
                <ul>
                    <li class="text-black text-sm">Power: ${el.power}</li> <!-- Зміна кольору тексту на чорний -->
                    <li class="text-black text-sm">Power Count: ${el.powersCount}</li> <!-- Виправлено powersCount -->
                </ul>
                <button class="mt-2 p w-24 border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all" onClick="deleteCard('showroom-${idx}')">Delete</button>
            </div>
        `;
    });
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
