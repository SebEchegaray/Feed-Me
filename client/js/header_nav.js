function renderHeaderNav() {
  // Make a get request to the backend API to check if the user is logged in
  axios.get("/api/sessions").then((sessionInfo) => {
    const navbar = document.querySelector("#header-nav");
    if (sessionInfo.data.userId) {
      //If logged in
      navbar.innerHTML = `
          <nav class="main__nav">
          <h1 class="main__headline">FeedMe<span class="material-icons restaurant">restaurant</span></h1>
            <ul>
                <li class="material-icons logout">logout</li>
            </ul>
          </nav>
        `;
    } else {
      //If not logged in
      navbar.innerHTML = `
          <nav class="main__nav">
          <h1 class="main__headline">FeedMe<span class="material-icons restaurant">restaurant</span></h1>
            <ul>
                <li class="material-icons login">login</li>
                <li class="material-icons logout">logout</li>
                <li class="material-icons subscriptions">subscriptions</li>
            </ul>
          </nav>
        `;
    }
  });
}

// render header nav on page load
renderHeaderNav();
