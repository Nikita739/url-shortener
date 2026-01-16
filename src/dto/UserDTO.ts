class UserDTO {
    id: number;
    email: string;
    username: string;

    constructor(params: any) {
        this.id = params?.id || 0;
        this.email = params.email || "";
        this.username = params.username || "";
    }
}

export default UserDTO;