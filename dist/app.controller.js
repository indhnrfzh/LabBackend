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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const create_mahasiswa_dto_1 = require("./dto/create-mahasiswa.dto");
const update_mahasiswa_dto_1 = require("./dto/update-mahasiswa.dto");
const register_user_dto_1 = require("./dto/register-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const auth_guard_1 = require("./auth.guard");
const user_decorator_1 = require("./user.decorator");
const user_entity_1 = require("./entity/user.entity");
const common_2 = require("@nestjs/common");
const swagger_2 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_dto_1 = require("./dto/file-upload.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    login(data) {
        return this.appService.login(data);
    }
    getMahasiswa() {
        return this.appService.getMahasiswa();
    }
    register(data) {
        return this.appService.register(data);
    }
    auth(user) {
        return user;
    }
    uploadMahasiswaGambar(nim, file) {
        return this.appService.uploadMahasiswaGambar(nim, file);
    }
    async getMahasiswaGambar(nim, res) {
        const name = await this.appService.getMahasiswaFoto(nim);
        res.sendFile(name, { root: 'uploads' });
    }
    async searchMahasiswa(nim) {
        return this.appService.searchMahasiswa(nim);
    }
    getMahasiswaByNim(nim) {
        return this.appService.getMahasiswaByNIM(nim);
    }
    createmahasiswa(data) {
        return this.appService.addMahasiswa(data);
    }
    DeleteMahasiswa(nim) {
        return this.appService.deleteMahasiswa(nim);
    }
    editMahasiswa(nim, nama) {
        return this.appService.updateMahasiswa(nim, nama);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiBody)({ type: login_user_dto_1.LoginUserDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("mahasiswa"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getMahasiswa", null);
__decorate([
    (0, common_1.Post)("register"),
    (0, swagger_1.ApiBody)({
        type: register_user_dto_1.RegisterUserDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "register", null);
__decorate([
    (0, common_1.Get)("/auth"),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_2.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "auth", null);
__decorate([
    (0, common_1.Post)('mahasiswa/:nim/upload-gambar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: file_upload_dto_1.FileUploadDto }),
    __param(0, (0, common_1.Param)('nim')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadMahasiswaGambar", null);
__decorate([
    (0, common_1.Get)('mahasiswa/:nim/gambar'),
    __param(0, (0, common_1.Param)('nim')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getMahasiswaGambar", null);
__decorate([
    (0, common_1.Get)('mahasiswa/search'),
    __param(0, (0, common_1.Query)('nim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "searchMahasiswa", null);
__decorate([
    (0, common_1.Get)("mahasiswa/:nim"),
    __param(0, (0, common_1.Param)("nim")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getMahasiswaByNim", null);
__decorate([
    (0, common_1.Post)("mahasiswa"),
    (0, swagger_1.ApiBody)({ type: create_mahasiswa_dto_1.CreateMahasiswaDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mahasiswa_dto_1.CreateMahasiswaDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createmahasiswa", null);
__decorate([
    (0, common_1.Delete)("Mahasiswa/:nim"),
    __param(0, (0, common_1.Param)("nim")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "DeleteMahasiswa", null);
__decorate([
    (0, common_1.Put)("mahasiswa/:nim"),
    (0, swagger_1.ApiBody)({ type: update_mahasiswa_dto_1.UpdateMahasiswaDto }),
    __param(0, (0, common_1.Param)("nim")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mahasiswa_dto_1.UpdateMahasiswaDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "editMahasiswa", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map