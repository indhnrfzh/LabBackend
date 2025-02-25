import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    register(data: RegisterUserDto): Promise<{
        username: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
        foto_profil: string | null;
    }>;
    uploadMahasiswaGambar(nim: string, file: Express.Multer.File | any): Promise<string>;
    searchMahasiswa(nim?: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    getMahasiswaFoto(nim: string): Promise<string>;
    auth(user_id: number): Promise<{
        username: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
        foto_profil: string | null;
    }>;
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
    getMahasiswaByNIM(nim: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }>;
    addMahasiswa(data: CreateMahasiswaDto): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    deleteMahasiswa(nim: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    updateMahasiswa(nim: string, data: CreateMahasiswaDto): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        foto_profil: string | null;
        gambar: string | null;
    }[]>;
    getUsers(): Promise<{
        username: string;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
    }[]>;
}
