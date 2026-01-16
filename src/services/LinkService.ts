import LinkDTO from "../dto/LinkDTO";
import UUIDService from "./UUIDService";
import models from "../models/models";
import BadRequestException from "../exceptions/badRequestException";
const Link = models.Link;

class LinkService {
    async CreateLink(rawUrl: string, userId: number): Promise<LinkDTO> {
        // Check if link already shortened
        const candidate = await Link.findOne({
            where: {
                rawUrl: rawUrl
            }
        });

        if(candidate) {
            // Link already exists
            return new LinkDTO(candidate);
        }

        // Generate shortened id for the link
        const shortenedUrl = UUIDService.GenerateLinkId();
        const createdLink = await Link.create({
            rawUrl: rawUrl,
            shortenedUrl: shortenedUrl,
            UserId: userId
        });

        return new LinkDTO(createdLink);
    }

    async GetLink(shortenedUrl: string): Promise<LinkDTO> {
        const link = await Link.findOne({
            where: {shortenedUrl: shortenedUrl}
        });

        if(!link) {
            throw new BadRequestException("Link not found");
        }

        return new LinkDTO(link);
    }
}

export default new LinkService();