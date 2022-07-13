import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../services/entitiy/users/User"


export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "yex",
    host: "localhost",
    port: 27017,
})
