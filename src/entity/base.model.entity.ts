import {
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { CompaniesEntity } from './companies';
  
  export class BaseModelEntity {
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

    @ManyToOne(() => CompaniesEntity, (company) => company.reference)
    companyId: CompaniesEntity;
  }