import { AppService } from './app.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entity/user.entity';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(data: LoginUserDto): Promise<{
        token: string;
        user: {
            username: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.UserRole;
            created_at: Date;
            foto_profil: string | null;
        };
    }>;
    getMahasiswa(): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    register(data: RegisterUserDto): Promise<{
        username: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
        foto_profil: string | null;
    }>;
    auth(user: User): User;
    uploadMahasiswaGambar(nim: string, file: Express.Multer.File): Promise<string>;
    getMahasiswaGambar(nim: string, res: Response): Promise<void>;
    searchMahasiswa(nim?: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    getMahasiswaByNim(nim: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }>;
    createmahasiswa(data: CreateMahasiswaDto): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    DeleteMahasiswa(nim: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    editMahasiswa(nim: string, nama: UpdateMahasiswaDto): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
}
