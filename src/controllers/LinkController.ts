import {Request, Response} from "express";
import FieldValidation from "../validation/FieldValidation";
import RequestValidationService from "../services/requestValidationService";
import LinkService from "../services/LinkService";
import UUIDService from "../services/UUIDService";
import BadRequestException from "../exceptions/badRequestException";
import AuthException from "../exceptions/authException";

class LinkController {
    // @POST
    async createLink(req: Request, res: Response) {
        // Create validation rules
        const validation = new FieldValidation(["rawUrl"], [], req.body);
        const result = validation.validate();

        if(!req.body?.user?.id) {
            throw new AuthException("Authentication failed");
        }

        // TODO encode link
        const linkData = await LinkService.CreateLink(req.body.rawUrl!, req.body.user.id);
        return res.json(linkData);
    }

    // @GET
    async getLink(req: Request, res: Response) {
        const params = req.params;
        const validation = new FieldValidation(["uuid"], [(val: string) => UUIDService.IsValid(val)], {...params});
        validation.validate();

        const shortenedUrl = req.params.uuid!;
        const linkData = await LinkService.GetLink(shortenedUrl);

        return res.json(linkData);
        //res.status(301).redirect(linkData.rawUrl);
    }

    async updateLink(req: Request, res: Response) {
        const params = {...req.params};
        const validation = new FieldValidation(["uuid"], [(val: string) => UUIDService.IsValid(val)], {...params});
        validation.validate();

        const {rawUrl} = req.body;
        if(!rawUrl) {
            throw new BadRequestException("Url not provided");
        }

        const linkDTO = await LinkService.UpdateLink(rawUrl, params.uuid!);
        return res.json(linkDTO);
    }
}

export default new LinkController();