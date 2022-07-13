import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
    [x: string]: any
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    firstName: string

    @Column()
    lastName: string
}