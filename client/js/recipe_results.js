function renderRecipeResults(event) {
    event.preventDefault();
    const ingredientsArray = state.fridgeItems
    axios
      .post("/api/spoonacular/recipes", ingredientsArray)
      .then((response) => {
        console.log(response);
        document.querySelector(".recipe_search").innerHTML = `
              <ul>
                  ${recipeResults(response.data)}
              </ul>
            `;
        })
      .catch((error) => {
        console.log(error.response);
        document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}
  
function recipeResults(results) {
    return results
      .map(
        (result) => `
          <li>
              <div data-id=${result.id} class="search-result">
                  <p>${result.name}</p>
                  <img src="${result.image}" alt="">
                  
              </div>
          </li>
        `
        )
    .join("");
}