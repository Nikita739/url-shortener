class LinkDTO {
    //id: number;
    shortenedUrl: string;
    rawUrl: string;

    constructor(params: any) {
        //this.id = params?.id || 0;
        this.shortenedUrl = params.shortenedUrl || "";
        this.rawUrl = params.rawUrl || "";
    }
}

export default LinkDTO;