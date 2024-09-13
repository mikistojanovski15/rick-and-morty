document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.getElementById("characterContainer");

    const fetchData = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            displayCharacters(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const displayCharacters = (characters) => {
        characterContainer.innerHTML = "";
        characters.forEach((character) => {
            const card = createCard(character);
            characterContainer.appendChild(card);
        });
    };

    const createCard = (character) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = character.image;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = character.name;
        card.appendChild(name);

        const gender = document.createElement("p");
        gender.textContent = `Gender: ${character.gender}`;
        card.appendChild(gender);

        const status = document.createElement("p");
        status.textContent = `Status: ${character.status}`;
        setStatusColor(status, character.status);
        card.appendChild(status);

        const episodes = document.createElement("p");
        episodes.textContent = `Episodes: ${character.episode.length}`;
        card.appendChild(episodes);

        return card;
    };

    const setStatusColor = (element, status) => {
        if (status === "Alive") {
            element.classList.add("alive");
        } else if (status === "Dead") {
            element.classList.add("dead");
        } else {
            element.classList.add("unknown");
        }
    };

    fetchData();
});
