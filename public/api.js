export function fetchHeroes() {
    return fetch('http://localhost:3000/heroes')
        .then(response => response.json());
}