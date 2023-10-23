import exppress from "express";
import { movies } from "./movies.js";

const app = exppress();

app.use((req, res) => {
    console.log("First middeware")
})

app.get("/products", (req, res) => {
    res.json([]);
})

app.get("/movies", (req, res) => {
    res.json(movies);
})

app.listen(3010, () => console.log("Server running at 3010 port"));