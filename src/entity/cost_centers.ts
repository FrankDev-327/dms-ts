import { Entity, Column, OneToMany } from "typeorm";
import { CompaniesEntity } from "./companies";
import { BaseModelEntity } from "./base.model.entity";


@Entity()
export class cost_centers extends BaseModelEntity {
    @Column()
    name: string;

    @Column({
        default: false
    })
    active: boolean;

    @Column({
        nullable: true
    })
    code: string;

    @OneToMany(() => CompaniesEntity, (reference) => reference.companyId)
}
