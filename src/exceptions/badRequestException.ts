class BadRequestException {
    message: string;
    statusCode: number;

    constructor(message: string = "Bad request", statusCode: number = 400, missingParams: string[] = []) {
        this.message = message;
        this.statusCode = statusCode;

        if(missingParams.length > 0) {
            this.message = `${message}, Missing: ${missingParams}`;
        }
    }
}

export default BadRequestException;