function ingredientSearch() {
  document.querySelector("#page").innerHTML = `
    <section class="ingredient_search">
      <h1>Search for Ingredients</h1>
      <form onSubmit="getIngredientResults(event)">
        <input name="search-query" type="text" id="search-query" />
        <button id="search-btn" type="submit">Search</button>
      </form>
      <section class="search-results"></section>
    </section>
    `;
}

function getIngredientResults(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/spoonacular/ingredients", data)
    .then((response) => {
      console.log(response);
      window.location = "/";
    })
    .catch((error) => {
      console.log(error.response);
      document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}
