import {Request} from "express";
import FieldValidation from "../validation/FieldValidation";
import BadRequestException from "../exceptions/badRequestException";

export interface ValidationResult {
    result: boolean;
    message?: string;
}

class RequestValidationService {
    public ValidateBody(body: object, fields: string[]): ValidationResult {
        let result: boolean = true;
        let message: string = "";

        for (const field in fields) {
            const hasProperty = body.hasOwnProperty(field);
            if (!hasProperty) {
                result = false;
                message += `${field} `;
            }
        }

        if(!result) {
            return {
                result: false,
                message: message,
            }
        }

        return {
            result: true,
            message: ""
        }
    }

    public ValidateRequest(validationRules: FieldValidation): boolean {
        let message: string = "";

        validationRules.fields.forEach((field) => {
            const propExists = validationRules.body.hasOwnProperty(field);
            // @ts-ignore
            if(!propExists || validationRules.body[field] === "") {
                message += ` Missing property '${field}'\n`;
            } else {
                const validateFunc = validationRules.GetValidationFunction(field);
                if(typeof validateFunc === "function") {
                    // @ts-ignore
                    const validationResult = validateFunc(validationRules.body[field]);
                    if(!validationResult) {
                        // @ts-ignore
                        message += ` Malformed property '${field}' = ${validationRules.body[field]}\n`;
                    }
                }
            }
        })

        if(message.length > 0) {
            throw new BadRequestException(message);
        }

        return true;
    }
}

export default new RequestValidationService();