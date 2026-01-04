import {NextFunction, Request, Response} from "express";
import AuthException from "../exceptions/authException";
import BadRequestException from "../exceptions/badRequestException";

type Exceptions = AuthException | BadRequestException | string;

export default function ErrorMiddleware(error: Exceptions, req: Request, res: Response, next: NextFunction) {
    if(typeof error === "string") {
        res.status(500).send(error);
    } else {
        res.status(error?.statusCode || 500).send(error?.message);
    }
}