import bcrypt from 'bcrypt';

class HashingService {
    async hash(password: string) {
        return await bcrypt.hash(password, Number(process.env.PASSWORD_HASH_SALT) || 12);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}

export default new HashingService();