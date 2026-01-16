import jwt from 'jsonwebtoken';

class JwtService {
    sign(payload: object): string {
        return jwt.sign(payload, process.env.SECRET_JWT!, {expiresIn: "30m"});
    }

    verify(token: string): object | string {
        return jwt.verify(token, process.env.SECRET_JWT!);
    }
}

export default new JwtService();