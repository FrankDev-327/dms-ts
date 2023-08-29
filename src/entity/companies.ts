import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('companies')
export class CompaniesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: true
    })
    license_id: string;
  
    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;

    @Column()
    name: string;

    @Column()
    oib: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        nullable: true
    })
    phone: string;

    @Column({
        nullable: true
    })
    address: string;
}
