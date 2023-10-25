import express from "express";
import { movies } from "../../data/movies.js";

const moviesRouter = express.Router();

moviesRouter.get("/", (req, res) => {
    res.json(movies);
});

moviesRouter.get("/:id", (req, res) => {
    res.json(movies[0]);

    // const movieId = parseInt(req.params.id, 10);

    // if (!isNaN(movieId)) {
    //     const movie = movies.find(movie => movie.id === movieId);

    //     if (movie) {
    //         res.json(movie);
    //     } else {
    //         res.status(404).json({ error: "Фільм не знайдено" });
    //     }
    // } else {
    //     res.status(400).json({ error: "Недійсний ідентифікатор фільму" });
    // }

});

moviesRouter.post("/", (req, res) => {
    res.json(movies[0]);
});

moviesRouter.put("/:id", (req, res) => {
    res.json(movies[0]);
});

moviesRouter.delete("/:id", (req, res) => {
    res.json(movies[0]);
});

export default moviesRouter;