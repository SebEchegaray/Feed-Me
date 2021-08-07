function renderIndividualRecipe(event) {
    event.preventDefault();

    // const recipeId = 641803

    const recipeId = event.currentTarget.dataset.id; // gets me the recipe id from parent div (data-id)
    console.log(recipeId);

    axios
        .get(`/api/spoonacular/recipes/${recipeId}`)
        .then((response) => {
            console.log(response);
            document.querySelector("#page").innerHTML = `
                <div data-id=${response.data.id} class="recipe_search">
                    <h1>${response.data.title}</h1>
                    <img src="${response.data.image}" alt="">
                    <p>${response.data.summary}</p>
                    <h2>Ingredients</h2>
                    <ul>
                        ${renderRecipeIngredients(
                            response.data.extendedIngredients
                        )}
                    </ul>
                    <h2>Instructions</h2>
                    <ol>
                        <li>${response.data.instructions}</li>
                    </ol>
                </div>
            `;
        })
        .catch((error) => {
            console.log(error.response);
            document.querySelector("#errors").innerHTML =
                error.response.message;
        });
}

function renderRecipeIngredients(ingredients) {
    return ingredients
        .map(
            (ingredient) => `
                <li>
                    <div data-id=${ingredient.id} class="recipe_ingredient">
                        <p>${ingredient.name}</p>
                        <img src="https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}" alt="">
                    
                    </div>
                </li>
            `
        )
        .join("");
}
