import { ProfileService } from './profile.service';
import { User } from '@prisma/client';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    uploadFile(file: Express.Multer.File, user: User): Promise<{
        filename: string;
        path: string;
    }>;
    getName(search: string): Promise<string>;
    getProFile(id: number, Response: any): Promise<void>;
}
