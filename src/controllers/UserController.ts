import {Request, Response} from "express";
import models from '../models/models';

const User = models.User;

class UserController {
    async register(request: Request, response: Response) {
        await User.create({
            email: "test@gmail.com",
            password: "123456",
            username: "testUsername"
        });

        response.json({
            "id": "1",
            "name": "John Doe"
        });
    }

    login(request: Request, response: Response) {

    }

    logout(request: Request, response: Response) {

    }
}

export default new UserController();