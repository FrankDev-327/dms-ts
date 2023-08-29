import { Entity, Column } from "typeorm"
import { BaseModelEntity } from "./base.model.entity";

@Entity('users')
export class UserEntity extends BaseModelEntity {
    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string
}
