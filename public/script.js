const getAll = () => {
    alert("Algunos personajes no registran altura o peso o están vacíos");
    const URL = "https://starwars-n5ec-developuptcs-projects.vercel.app/";
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.data;
            const allCharactersBody = document.querySelector("#all-characters tbody");
            allCharactersBody.innerHTML = ""; 
            if (Array.isArray(characters)) {
                characters.forEach((character) => {
                    allCharactersBody.innerHTML += showInfo(character); 
                });
            }
        })
        .catch((err) => console.log(err));
};

const getById = () => {
    alert("Algunos personajes no registran altura o peso o están vacíos");
    const id = document.getElementById("objectId").value;
    const URL = `https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`;
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se encontró el personaje");
            }
            return response.json();
        })
        .then((data) => {
            const character = data.data; 
            const resultsBody = document.querySelector("#results tbody");
            resultsBody.innerHTML = ""; 
            resultsBody.innerHTML += showInfo(character);
        })
        .catch((err) => {
            console.error(err);
            alert("Error al buscar el personaje");
        });
};

const getByName = () => {
    alert("Algunos personajes no registran altura o peso o están vacíos");
    const name = document.getElementById("nameId").value;
    const URL = `https://starwars-n5ec-developuptcs-projects.vercel.app/name/${name}`;
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se encontró el personaje");
            }
            return response.json();
        })
        .then((data) => {
            const characters = data.data; 
            const resultsBody = document.querySelector("#results tbody");
            resultsBody.innerHTML = ""; 
            if (Array.isArray(characters) && characters.length > 0) {
                characters.forEach(character => {
                    resultsBody.innerHTML += showInfo(character); 
                });
            } else {
                resultsBody.innerHTML += showInfo(characters);
            }
        })
        .catch((err) => {
            console.error(err);
            alert("Error al buscar el personaje");
        });
};
//severo método
function showInfo(character) {
    return `
        <tr>
            <td>${character.name}</td>
            <td>${character.height || 'N/A'}</td>
            <td>${character.mass || 'N/A'}</td>
            <td>${character.hair_color}</td>
            <td>${character.skin_color}</td>
            <td>${character.eye_color}</td>
            <td>${character.birth_year}</td>
            <td>${character.gender}</td>
            <td>${character.homeworld || 'N/A'}</td>
            <td>${character.species || 'N/A'}</td>
        </tr>
    `;
}
document.querySelector("#getAll").addEventListener("click", getAll);
document.querySelector("#btnFindById").addEventListener("click", getById);
document.querySelector("#btnFindByName").addEventListener("click", getByName);
