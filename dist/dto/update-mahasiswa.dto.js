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
exports.UpdateMahasiswaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class UpdateMahasiswaDto {
}
exports.UpdateMahasiswaDto = UpdateMahasiswaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "NIM",
        type: String,
        example: "105841107022"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 12),
    __metadata("design:type", String)
], UpdateMahasiswaDto.prototype, "nim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nama",
        type: String,
        example: "Indah Nur Fauziah.A"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UpdateMahasiswaDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "kelas",
        type: String,
        example: "5B"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UpdateMahasiswaDto.prototype, "kelas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "jurusan",
        type: String,
        example: "informatika"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UpdateMahasiswaDto.prototype, "jurusan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "jenis kelamin",
        enum: client_1.Jenis_kelamin,
        example: "P"
    }),
    (0, class_validator_1.IsEnum)(client_1.Jenis_kelamin),
    __metadata("design:type", String)
], UpdateMahasiswaDto.prototype, "jenis_kelamin", void 0);
//# sourceMappingURL=update-mahasiswa.dto.js.map