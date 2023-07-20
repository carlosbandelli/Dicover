fetch("https://api.github.com/users/carlosbandelli")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log("d", d))
  .catch((err) => console.log(err));
