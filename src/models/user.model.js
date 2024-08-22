const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 40,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            default: "Nothing to show",
        },
        profilepic: {
            type: String,
        },
        token: {
            type: String,
        },
        favorites: [
            {
                type: String,
                default: [],
            },
        ],
    },
    { timestamps: true }
);

const userModel = model("User", userSchema);

module.exports = userModel;
