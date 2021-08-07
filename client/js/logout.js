function logoutUser(event) {
  event.preventDefault();

  axios
    .delete("/api/sessions", data)
    .then((response) => {
      window.location = "/";
    })
}