function renderLoginForm() {
  document.querySelector("#page").innerHTML = `
    <section class="sign-up">
      <h1>Login</h1>
      <form onSubmit="loginUser(event)">
        <section id="errors"></section>
        <fieldset>
          <label for="email">Email:</label><br />
          <input type="text" name="email" id="email" />
        </fieldset>
        <fieldset>
          <label for="password">Password:</label><br />
          <input type="password" name="password" id="password" />
        </fieldset>
        <button id="sign-up-btn" type="submit">Login!</button>
      </form>
  `;
}

function loginUser(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/sessions", data)
    .then((response) => {
      console.log(response.data);
      window.location = "/";
    })
    .catch((error) => {
      console.log(error.response);
      document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}