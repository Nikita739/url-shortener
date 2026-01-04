import LinkDTO from "../dto/LinkDTO";
import UUIDService from "./UUIDService";

class LinkService {
    async CreateLink(rawUrl: string): Promise<LinkDTO> {
        // Generate shortened id for the link
        const shortenedUrl = UUIDService.GenerateLinkId();

        // TODO write to DB

        return new LinkDTO({shortenedUrl: shortenedUrl, rawUrl: rawUrl, id: 1});
    }
}

export default new LinkService();