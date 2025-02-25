export declare class ProfileService {
    uploadFile(file: Express.Multer.File, id: number): Promise<{
        filename: string;
        path: string;
    }>;
    sendMyFotoProfile(user_id: number): Promise<string>;
}
