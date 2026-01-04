import {Request, Response} from "express";
import FieldValidation from "../validation/FieldValidation";
import RequestValidationService from "../services/requestValidationService";
import LinkService from "../services/LinkService";

class LinkController {
    async createLink(req: Request, res: Response) {
        // Create validation rules
        const validation = new FieldValidation(["rawUrl"], [], req.body);
        const result = validation.validate();

        // TODO check for same link in DB

        // TODO encode link
        const linkData = await LinkService.CreateLink(req.body.rawUrl!);

        res.json({linkData: linkData});
    }

    async getLink(req: Request, res: Response) {

    }
}

export default new LinkController();