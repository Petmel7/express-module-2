import exppress from "express";
import { movies } from "./movies.js";
import moment from "moment";
import fs from "fs/promises";

const app = exppress();

app.use(async (req, res, next) => {
    const { method, url } = req;
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method}, ${url}, ${date}`);
    next();
})

// app.use((req, res, next) => {
//     console.log("First middeware");
//     next();
// })

app.get("/products", (req, res) => {
    res.json([]);
})

app.get("/movies", (req, res) => {
    res.json(movies);
})

app.listen(3011, () => console.log("Server running at 3011 port"));