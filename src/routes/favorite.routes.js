const express = require("express");
const {
    addToFavorites,
    getFavorites,
    removeFromFavorites,
} = require("../controllers/favorite.controller");
const FavoriteRouter = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

FavoriteRouter.post("/add", authMiddleware.verifyToken, addToFavorites);
FavoriteRouter.get("/list", authMiddleware.verifyToken, getFavorites);
FavoriteRouter.delete("/:id", authMiddleware.verifyToken, removeFromFavorites);

module.exports = FavoriteRouter;
