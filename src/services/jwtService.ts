import jwt, {JwtPayload} from 'jsonwebtoken';

class JwtService {
    sign(payload: object): string {
        const token = jwt.sign(payload, process.env.SECRET_JWT!, {expiresIn: "30m"});
        return token;
    }

    verify(token: string): object | string {
        return jwt.verify(token, process.env.SECRET_JWT!);
    }
}

export default new JwtService();