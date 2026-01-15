import express, {Express} from "express";
import dotenv from "dotenv";
dotenv.config();
import {Sequelize} from "sequelize";
import router from "./routers";
import ErrorMiddleware from "./middleware/errorMiddleware";

import sequelize from "./db";
import models from './models/models';

const app: Express = express();

const PORT = process.env.SERVER_PORT || 4040;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

app.use(express.json());
app.use('/', router);
app.use(ErrorMiddleware);

app.listen(PORT, async () => {
    console.log("Server running on port: " + process.env.SERVER_PORT);
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('DB Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

