-- CreateEnum
CREATE TYPE "Jenis_kelamin" AS ENUM ('L', 'P');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "nama" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "jenis_kelamin" "Jenis_kelamin" NOT NULL,
    "foto_profil" TEXT,
    "gambar" TEXT,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto_profil" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
