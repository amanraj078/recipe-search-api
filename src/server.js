const express = require("express");
require("./helpers/DB");

const userRouter = require("./routes/user.routes");
const recipieRouter = require("./routes/recipie.routes");
const favoriteRouter = require("./routes/favorite.routes");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/recipie", recipieRouter);
app.use("/api/favorites", favoriteRouter);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});
