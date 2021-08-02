function renderIngredientResults(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/spoonacular/ingredients", data)
    .then((response) => {
      document.querySelector("#search-results").innerHTML = response.data.map(
        (result) => {
          return `
              <ul>
                  <li data-id=${result.id}>${result.name}</li>
              </ul>
            `;
        }
      );
    })
    .catch((error) => {
      console.log(error.response);
      document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}
