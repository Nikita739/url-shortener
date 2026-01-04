import {Router} from "express";
import UserController from "../controllers/UserController";
import AuthMiddleware from "../middleware/authMiddleware";

const userRouter = Router();

userRouter.post('/register', AuthMiddleware, UserController.register);
userRouter.post('/login', UserController.login);

export default userRouter;