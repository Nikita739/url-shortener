import express, {Express} from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running on port: " + process.env.SERVER_PORT);
});