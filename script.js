const name = document.getElementById("name");
const base_happiness = document.getElementById("base_happiness");
const gender_rate = document.getElementById("gender_rate");
const capture_rate = document.getElementById("capture_rate");
const button = document.querySelector(".btn");

button.addEventListener('click', (e) => {
    e.preventDefault();
    name.innerHTML = '<em>Loading...</em>';
    base_happiness.innerHTML = '<em>Loading...</em>';
    gender_rate.innerHTML = '<em>Loading...</em>';
    capture_rate.innerHTML = '<em>Loading...</em>';

    const randomNumber = Math.ceil(Math.random() * 905)
fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomNumber}/`)
    .then(response => response.json())
    .then(species => {
        name.innerHTML = species['name'];
        base_happiness.innerHTML = species['base_happiness'];
        gender_rate.innerHTML = species['gender_rate'];
        capture_rate.innerHTML = species['capture_rate'];

    })
})
