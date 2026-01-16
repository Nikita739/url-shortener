import models from "../models/models";
import UserExistsException from "../exceptions/userExistsException";
import BadRequestException from "../exceptions/badRequestException";
const User = models.User;

class UserService {
    async ValidateEmail(email: string) {
        if(!email) throw new UserExistsException("Email is required");

        const userExists = await User.findOne({
            where: {
                email: email,
            }
        });

        if(userExists != null) {
            // User already exists
            throw new UserExistsException();
        }
    }

    async GetUserByEmail(email: string): Promise<any> {
        const candidate =  await User.findOne({
            where: {
                email: email
            }
        });

        if(!candidate) {
            throw new BadRequestException("User with this email does not exist");
        }

        return candidate;
    }
}

export default new UserService();