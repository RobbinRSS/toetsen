document
  .getElementById("pokemonName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  });

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    const containerMoves = document.querySelector(".pokemon__moves");
    const containerStats = document.querySelector(".pokemon__stats");
    const moves = data.moves;
    const stats = data.stats;
    const infoEl = document.getElementById("info");
    const nameEl = document.getElementById("name");
    const weightEl = document.getElementById("weight");
    const heightEl = document.getElementById("height");
    const imgElement = document.getElementById("pokemonSprite");
    console.log(data);

    // Verberg foutmelding en toon het plaatje
    const errorElement = document.getElementById("error");
    if (errorElement) {
      errorElement.remove();
    }

    containerMoves.innerHTML = ""; // Clear previous moves
    containerStats.innerHTML = ""; // Clear previous stats

    moves.forEach((move) => {
      const html = `
      <div class="moves__row">
        <div class="moves">${move.move.name}</div>
      </div>`;
      containerMoves.insertAdjacentHTML("beforeend", html);
    });

    stats.forEach((stat) => {
      const html = `
      <div class="stats__row">
        <div class="stats">${stat.stat.name}: ${stat.base_stat}</div>
      </div>`;
      containerStats.insertAdjacentHTML("beforeend", html);
    });

    // Display elements
    containerMoves.style.display = "block";
    containerStats.style.display = "block";
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    infoEl.style.display = "flex";
    nameEl.textContent = `Name: ${data.name}`;
    weightEl.textContent = `Weight: ${data.weight} lbs`;
    heightEl.textContent = `Height: ${data.height} ft`;
  } catch (error) {
    console.error(error);

    // Verberg het plaatje en toon de foutmelding
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.style.display = "none";

    // Verwijder bestaande foutmelding als die er is
    let errorElement = document.getElementById("error");
    if (errorElement) {
      errorElement.remove();
    }

    // Toon foutmelding
    errorElement = document.createElement("div");
    errorElement.id = "error";
    errorElement.style.color = "red";
    errorElement.textContent = "Pokemon not found";
    document.body.appendChild(errorElement);
  }
}
