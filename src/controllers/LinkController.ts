import {Request, Response} from "express";
import FieldValidation from "../validation/FieldValidation";
import RequestValidationService from "../services/requestValidationService";
import LinkService from "../services/LinkService";
import UUIDService from "../services/UUIDService";

class LinkController {
    // @POST
    async createLink(req: Request, res: Response) {
        // Create validation rules
        const validation = new FieldValidation(["rawUrl"], [], req.body);
        const result = validation.validate();

        // TODO check for same link in DB

        // TODO encode link
        const linkData = await LinkService.CreateLink(req.body.rawUrl!);
        return res.json(linkData);
    }

    // @GET
    async getLink(req: Request, res: Response) {
        const params = req.params;
        const validation = new FieldValidation(["uuid"], [(val: string) => UUIDService.IsValid(val)], params);
        const result = validation.validate();

        const shortenedUrl = req.params.uuid!;
        const linkData = await LinkService.GetLink(shortenedUrl);

        return res.json(linkData);
    }
}

export default new LinkController();