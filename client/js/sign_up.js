function renderSignUpForm() {
  document.querySelector("#page").innerHTML = `
    <section class="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit="createNewUser(event)">
        <section id="errors"></section>
        <fieldset>
          <label for="name">Name:</label><br />
          <input type="text" name="name" id="name" placeholder="Name" />
        </fieldset>
        <fieldset>
          <label for="email">Email:</label><br />
          <input type="text" name="email" id="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <label for="password">Password:</label><br />
          <input type="password" name="password" id="password" placeholder="Password" />
        </fieldset>
        <button id="sign-up-btn" type="submit">Sign Up!</button>
      </form>
  `;
}

function createNewUser(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/users", data)
    .then((response) => {
      console.log(response.data);
      window.location = "/";
    })
    .catch((error) => {
      console.log(error.response);
      document.querySelector("#errors").innerHTML = error.response.data.message;
    });
}
