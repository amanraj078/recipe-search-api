const userModel = require("../models/user.model");
const app_constant = require("../constant/app.json");
const recipeService = require("../services/recipie.services");

const addToFavorites = async (userId, recipeId) => {
    const user = await userModel.findById(userId);
    // console.log(user);

    if (user.favorites.includes(recipeId)) {
        return {
            success: 0,
            status_code: app_constant.BAD_REQUEST,
            message: "Recipe already in favorites.",
            result: {},
        };
    }

    user.favorites.push(recipeId);
    await user.save();

    return {
        success: 1,
        status_code: app_constant.SUCCESS,
        message: "Recipe added to favorites.",
        result: user.favorites,
    };
};

const getFavorites = async (userId) => {
    const user = await userModel.findById(userId).select("favorites");

    if (!user || !user.favorites.length) {
        return {
            success: 0,
            status_code: app_constant.NOT_FOUND,
            message: "No favorite recipes found.",
            result: {},
        };
    }

    const favoriteRecipeDetails = await Promise.all(
        user.favorites.map(async (recipeId) => {
            const recipe = await recipeService.getRecipeDetails(recipeId);
            return recipe;
        })
    );

    return {
        success: 1,
        status_code: app_constant.SUCCESS,
        message: "Favorite recipes fetched successfully.",
        result: favoriteRecipeDetails,
    };
};

const removeFromFavorites = async (userId, recipeId) => {
    const user = await userModel.findById(userId);

    if (!user.favorites.includes(recipeId)) {
        return {
            success: 0,
            status_code: app_constant.BAD_REQUEST,
            message: "Recipe not found in favorites.",
            result: {},
        };
    }

    user.favorites = user.favorites.filter((id) => id !== recipeId);
    await user.save();

    return {
        success: 1,
        status_code: app_constant.SUCCESS,
        message: "Recipe removed from favorites.",
        result: user.favorites,
    };
};

module.exports = {
    addToFavorites,
    getFavorites,
    removeFromFavorites,
};
