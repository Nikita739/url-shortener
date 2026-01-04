import {Request, Response} from "express";

class UserController {
    register(request: Request, response: Response) {
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