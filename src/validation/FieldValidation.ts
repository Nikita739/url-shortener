import RequestValidationService from "../services/requestValidationService";

class FieldValidation {
    public fields: string[];
    public validationFunctions: object[];
    public body: object

    constructor(fields: string[], validationFunctions: object[], body: object) {
        this.fields = fields;
        this.validationFunctions = validationFunctions;
        this.body = body || {};
    }

    GetValidationFunction(field: string): object {
        const idx = this.fields.indexOf(field);
        const func = this.validationFunctions[idx];
        if(!func) {
            return {};
        }
        return func;
    }

    validate(): boolean {
        return RequestValidationService.ValidateRequest(this);
    }
}

export default FieldValidation;