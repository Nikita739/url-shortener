import ShortUniqueId from "short-unique-id";

class UUIDService {
    GenerateLinkId(): string {
        const uid = new ShortUniqueId({length: Number(process.env.LINK_ID_LENGTH) || 10});
        return uid.rnd();
    }
}

export default new UUIDService();