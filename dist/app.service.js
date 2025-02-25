"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("./prisma");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const fs_1 = require("fs");
const path_1 = require("path");
let AppService = class AppService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async register(data) {
        try {
            const user = await prisma_1.default.user.findFirst({ where: { username: data.username } });
            if (user)
                throw new common_1.BadRequestException('Username sudah digunakan');
            const hashedPassword = (0, bcrypt_1.hashSync)(data.password, 10);
            const newUser = await prisma_1.default.user.create({
                data: {
                    username: data.username,
                    password: hashedPassword,
                    role: 'USER',
                },
            });
            return newUser;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.InternalServerErrorException('Ada masalah pada server');
        }
    }
    async uploadMahasiswaGambar(nim, file) {
        const mahasiswa = await prisma_1.default.mahasiswa.findFirst({ where: { nim } });
        if (!mahasiswa)
            throw new common_1.NotFoundException('Mahasiswa Tidak Ditemukan');
        const uploadDir = (0, path_1.join)(__dirname, '../uploads/');
        if (!(0, fs_1.existsSync)(uploadDir))
            (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
        const fileExt = (0, path_1.extname)(file.originalname);
        const baseFilename = mahasiswa.nim;
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${baseFilename}-${uniqueSuffix}${fileExt}`;
        const filePath = (0, path_1.join)(uploadDir, filename);
        (0, fs_1.writeFileSync)(filePath, file.buffer);
        await prisma_1.default.mahasiswa.update({ where: { nim }, data: { foto_profil: filename } });
        return filename;
    }
    async searchMahasiswa(nim) {
        try {
            const mahasiswa = await prisma_1.default.mahasiswa.findMany({
                where: {
                    AND: [
                        nim ? { nim: { equals: nim } } : {},
                    ],
                },
            });
            return mahasiswa;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('ada masalah pada server');
        }
    }
    async getMahasiswaFoto(nim) {
        const mahasiswa = await prisma_1.default.mahasiswa.findFirst({ where: { nim } });
        if (!mahasiswa)
            throw new common_1.NotFoundException('Mahasiswa Tidak Ditemukan');
        return mahasiswa.foto_profil;
    }
    async auth(user_id) {
        try {
            const user = await prisma_1.default.user.findFirst({ where: { id: user_id } });
            if (!user)
                throw new common_1.NotFoundException('User Tidak Ditemukan');
            return user;
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Terdapat Masalah Dari Server');
        }
    }
    async login(data) {
        try {
            const user = await prisma_1.default.user.findFirst({ where: { username: data.username } });
            if (!user)
                throw new common_1.NotFoundException('Username yang anda masukkan salah');
            if (!(0, bcrypt_1.compareSync)(data.password, user.password)) {
                throw new common_1.BadRequestException('Password salah');
            }
            const payload = { id: user.id, username: user.username, role: user.role };
            const token = await this.jwtService.signAsync(payload);
            return { token, user };
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.InternalServerErrorException('Ada masalah pada server');
        }
    }
    async getMahasiswa() {
        return await prisma_1.default.mahasiswa.findMany();
    }
    async getMahasiswaByNIM(nim) {
        const mahasiswa = await prisma_1.default.mahasiswa.findFirst({ where: { nim } });
        if (!mahasiswa)
            throw new common_1.NotFoundException('Tidak Menemukan NIM');
        return mahasiswa;
    }
    async addMahasiswa(data) {
        await prisma_1.default.mahasiswa.create({ data });
        return await prisma_1.default.mahasiswa.findMany();
    }
    async deleteMahasiswa(nim) {
        const mahasiswa = await prisma_1.default.mahasiswa.findFirst({ where: { nim } });
        if (!mahasiswa)
            throw new common_1.NotFoundException('Tidak Menemukan NIM');
        await prisma_1.default.mahasiswa.delete({ where: { nim } });
        return await prisma_1.default.mahasiswa.findMany();
    }
    async updateMahasiswa(nim, data) {
        const mahasiswa = await prisma_1.default.mahasiswa.findFirst({ where: { nim } });
        if (!mahasiswa)
            throw new common_1.NotFoundException('Mahasiswa dengan NIM tersebut tidak ditemukan.');
        await prisma_1.default.mahasiswa.update({ where: { nim }, data });
        return await prisma_1.default.mahasiswa.findMany();
    }
    async getUsers() {
        return await prisma_1.default.user.findMany({
            select: { id: true, username: true, role: true },
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AppService);
//# sourceMappingURL=app.service.js.map