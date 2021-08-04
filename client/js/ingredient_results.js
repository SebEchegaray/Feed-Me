function renderIngredientResults(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/spoonacular/ingredients", data)
    .then((response) => {
      console.log(response);
      document.querySelector(".search-results").innerHTML = `
            <ul>
                ${ingredientSearchResults(response.data)}
            </ul>
        `;
    })
    .catch((error) => {
      console.log(error.response);
      document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}

function ingredientSearchResults(results) {
  return results
    .map(
      (result) => `
        <li>
            <div data-id=${result.id} class="search-result">
                <p>${result.name}</p>
                <span class="material-icons" onClick="addIngredientToFridge(event)">add_circle_outline</span>
                
            </div>
        </li>
    `
    )
    .join("");
}

function addIngredientToFridge(event) {
  const addButton = event.target;
  const ingredientDom = addButton.closest(".search-result");
  const ingredientId = ingredientDom.dataset.id;

  state.fridgeItems.push(Number(ingredientId));
  console.log(state.fridgeItems)
  const recipeSearchSection = document.querySelector(".recipe_search")
  recipeSearchSection.innerHTML = `
    <button onClick="renderRecipeResults(event)" id="get-recipes" type="submit">Get Recipes!!</button>
  `
}
