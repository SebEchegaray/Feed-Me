function renderIndividualRecipe(event) {
    event.preventDefault();
    const id = 641803

    axios
        .get(`/api/spoonacular/recipes/${id}`)
        .then((response) => {
            console.log(response);
            document.querySelector("#page").innerHTML = `
                <h1>Your Yummy Recipes</h1>
                <ul>
                    ${recipeInformation(response.data)}
                </ul>
            `;
        })
        .catch((error) => {
            console.log(error.response);
            document.querySelector("#errors").innerHTML =
                error.response.data.message;
        });
}

function recipeInformation(results) {
    return results
        .map(
            (result) => `
          <li>
              <div data-id=${result.id} class="search-result">
                  <p>${result.title}</p>
                  <img src="${result.image}" alt="">
                  
              </div>
          </li>
        `
        )
        .join("");
}
