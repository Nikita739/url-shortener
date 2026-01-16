class UserExistsException {
    message: string;
    statusCode: number;

    constructor(message: string = "User with this email already exists", statusCode: number = 402) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default UserExistsException;