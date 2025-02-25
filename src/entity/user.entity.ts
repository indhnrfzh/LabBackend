import { UserRole } from "@prisma/client";
import {Exclude, Expose } from "class-transformer";


export class User{
    @Expose()
    id : number;

    @Expose()
    usename : string;

    @Expose()
    password : string;

    @Expose()
    userRole : string;

    @Expose()
    created_at : Date;
}