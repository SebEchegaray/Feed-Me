function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
      <nav>
        <h1>Feed Me</h1>
        <ul>
            <li class="material-icons logout">logout</li>
            <li class="material-icons login">login</li>
        </ul>
      </nav>
    `
}
  
  // render header nav on page load
renderHeaderNav()
