import {Request, Response} from "express";
import models from '../models/models';
import FieldValidation from "../validation/FieldValidation";
import UUIDService from "../services/UUIDService";
import UserService from "../services/UserService";
import HashingService from "../services/hashingService";
import jwt from "jsonwebtoken";
import JwtService from "../services/jwtService";
import UserDTO from "../dto/UserDTO";
import BadRequestException from "../exceptions/badRequestException";
import AuthException from "../exceptions/authException";

const User = models.User;

class UserController {
    async register(request: Request, response: Response) {
        // Validate data
        const body = request.body;
        await UserService.ValidateEmail(body?.email);

        const validation = new FieldValidation(["password", "username"], [], body);
        const result = validation.validate();

        // Create User in DB

        // Hash password
        const hashedPassword = await HashingService.hash(body.password);

        const createdUser = await User.create({
            email: body.email,
            password: hashedPassword,
            username: body.username,
        });

        const userDTO = new UserDTO(createdUser);
        console.log(userDTO);

        const jwtToken = JwtService.sign({...userDTO});

        return response.json({
            user: userDTO,
            token: jwtToken
        });
    }

    async login(request: Request, response: Response) {
        // Validate request
        const {email, password} = request.body;
        const validation = new FieldValidation(["password", "email"], [], {email, password});
        validation.validate();

        const foundUser = await UserService.GetUserByEmail(email);
        const userPasswordHash = foundUser.password;

        // Compare passwords
        const isPasswordValid = await HashingService.compare(password, userPasswordHash);
        if(!isPasswordValid) {
            throw new AuthException("Invalid password");
        }

        const userDto = new UserDTO(foundUser);
        const token = JwtService.sign({...userDto});

        return response.json({
            user: userDto,
            token: token
        })
    }

    logout(request: Request, response: Response) {

    }
}

export default new UserController();