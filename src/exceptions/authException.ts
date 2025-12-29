class AuthException {
    public message: string;
    public statusCode: number;

    constructor(message: string = 'Authentication failed', statusCode: number = 401) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default AuthException;