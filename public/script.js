const getAll = () => {
  alert("Algunos personajes no registran altura o peso o están vacíos");
  const URL = "https://starwars-n5ec-developuptcs-projects.vercel.app/";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.data;
      if (Array.isArray(characters)) {
        const allCharactersDiv = document.querySelector("#sectionAll");
        allCharactersDiv.innerHTML = "";
        characters.forEach((character) => {
          allCharactersDiv.innerHTML += showInfo(character);
        });
      }
    })
    .catch((err) => console.log(err));
};
const getById = () => {
    alert("Algunos personajes no registran altura o peso o están vacíos");
    const id = document.getElementById('objectId').value;
    const URL = `https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`;
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se encontró el personaje');
        }
        return response.json();
      })
      .then((data) => {
        const character = data.data;
        const allCharactersDiv = document.querySelector("#results-section");
        allCharactersDiv.innerHTML = "";
        allCharactersDiv.innerHTML += showInfo(character);
      })
      .catch((err) => {
        console.error(err);
        alert('Error'); 
      });
  };
  
//severo método este
function showInfo(character) {
  return `
              <div class="character-card">
                <h3>${character.name}</h3>
                <p><strong>Altura:</strong> ${character.height}</p>
                <p><strong>Peso:</strong> ${character.mass}</p>
                <p><strong>Color de cabello:</strong> ${character.hair_color}</p>
                <p><strong>Color de piel:</strong> ${character.skin_color}</p>
                <p><strong>Color de ojos:</strong> ${character.eye_color}</p>
                <p><strong>Cumpleaños:</strong> ${character.birth_year}</p>
                <p><strong>Género:</strong> ${character.gender}</p>
                <p><strong>Mundo natal:</strong> ${character.homeworld}</p>
                <p><strong>Especie:</strong> ${character.species}</p>
              </div>
            `;
}
document.querySelector("#getAll").addEventListener("click", getAll);
document.querySelector("#btnFindById").addEventListener("click", getById);
