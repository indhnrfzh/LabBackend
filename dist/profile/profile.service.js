"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const prisma_1 = require("../prisma");
let ProfileService = class ProfileService {
    async uploadFile(file, id) {
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: id
            }
        });
        if (user == null)
            throw new common_1.NotFoundException("User Tidak Ditemukan");
        if (user.foto_profil != null) {
            const filePath = `../../uploads/${user.foto_profil}`;
            if ((0, fs_1.existsSync)(filePath)) {
                (0, fs_1.rmSync)(filePath);
            }
        }
        const uploadPath = `../../uploads/`;
        if (!(0, fs_1.existsSync)(uploadPath)) {
            (0, fs_1.mkdirSync)(uploadPath);
        }
        const fileExt = (0, path_1.extname)(file.originalname);
        const baseFilename = user.username;
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = `${baseFilename}-${uniqueSuffix}${fileExt}`;
        const filePath = `${uploadPath}/${filename}`;
        (0, fs_1.writeFileSync)(filePath, file.buffer);
        await prisma_1.default.user.update({
            where: {
                id: id
            },
            data: {
                foto_profil: filename
            }
        });
        return { filename, path: filePath };
    }
    async sendMyFotoProfile(user_id) {
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: user_id
            }
        });
        if (user == null)
            throw new common_1.NotFoundException("User Tidak Ditemukan");
        return user.foto_profil;
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)()
], ProfileService);
//# sourceMappingURL=profile.service.js.map