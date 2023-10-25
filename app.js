import express from "express";
// import { movies } from "./movies.js";
// import moment from "moment";
// import fs from "fs/promises";
import moviesRouter from "./routes/api/movies-router.js";
import cors from "cors";

const app = express();

app.use("/api/movies", moviesRouter);


app.use(cors());


// app.use(async (req, res, next) => {
//     const { method, url } = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//     await fs.appendFile("./public/server.log", `\n${method}, ${url}, ${date}`);
//     next();
// })

// app.get("/products", (req, res) => {
//     res.json([]);
// })

// app.get("/movies", (req, res) => {
//     res.json(movies);
// })

// app.use((req, res) => {
//     res.status(404).json({
//         mesage: "Not Found"
//     })
// })

app.listen(3004, () => console.log("Server running at 3004 port"));