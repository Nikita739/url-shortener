import express, {Express} from "express";
import dotenv from "dotenv";
import {Sequelize} from "sequelize";
import router from "./routers";
import ErrorMiddleware from "./middleware/errorMiddleware";

dotenv.config();
const app: Express = express();

const PORT = process.env.SERVER_PORT || 4040;

app.use(express.json());
app.use('/', router);
app.use(ErrorMiddleware);

app.listen(PORT, () => {
    console.log("Server running on port: " + process.env.SERVER_PORT);
});

// const sequelize = new Sequelize({
//     dialect: "postgres",
//
// });