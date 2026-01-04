import {Request, Response} from "express";
import FieldValidation from "../validation/FieldValidation";
import RequestValidationService from "../services/requestValidationService";

class LinkController {
    async createLink(req: Request, res: Response) {
        // Create validation rules
        const validation = new FieldValidation(["rawUrl"], [], req.body);
        const result = validation.validate();

        // TODO check for same link in DB

        // TODO encode link

        res.json({validationRes: result});
    }

    async getLink(req: Request, res: Response) {

    }
}

export default new LinkController();