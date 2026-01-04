import {NextFunction, Request, Response} from "express";
import JwtService from "../services/jwtService";
import AuthException from "../exceptions/authException";

export default function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        // Auth token sent

        // TODO validate token
        const token: string = req.headers.authorization.split(" ")[1];

        try {
            req.body.user = JwtService.verify(token);
            next();
        } catch (e) {
            // Expired or malformed token
            throw new AuthException("Authorization expired");
        }
    } else {
        // No token provided
        throw new AuthException("Not authorized");
    }
}