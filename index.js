import express from "express";
import axios from "axios";

const app = express();
app.listen("3000");

app.use(express.json());

let author = "Carlos";

app.route("/").get((req, res) =>
  axios
    .get("https://api.github.com/users/carlosbandelli")
    .then((result) => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((error) => console.error(error))
);

app.route("/:parametro").get((req, res) => res.send(req.params.parametro));

app.route("/").post((req, res) => res.send(req.body));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});

app
  .route("/:identificador")
  .delete((req, res) => res.send(req.params.identificador));

app.route("/about/user").get((req, res) => res.send(req.query.id));
