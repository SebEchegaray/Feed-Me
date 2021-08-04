function renderIngredientSearch() {
  document.querySelector("#page").innerHTML = `
    <section class="ingredient_search">
      <h1>Search for Ingredients</h1>
      <form onSubmit="renderIngredientResults(event)">
        <input name="search-query" type="text" id="search-query" placeholder="INGREDIENTS" />
        <button id="search-btn" type="submit">Search</button>
      </form>
      <section class="search-results"></section>
    </section>
    <section class="display_ingredients">

    </section>
    <section class="recipe_search">
        

    </section>
    `;
}

renderIngredientSearch();
