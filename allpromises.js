import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/carlosbandelli"),
  axios.get("https://api.github.com/users/carlosbandelli/repos"),
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((err) => console.error(err.message));
