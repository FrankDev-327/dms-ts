import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { FoldersEntity } from './foldes.entity';
import { CompaniesEntity } from './companies.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('clients')
export class ClientsEntity extends BaseModelEntity {
  @Column()
  title: string;

  @Column()
  oib: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  zipCode: number;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  customer: boolean;

  @Column({ nullable: true })
  supplier: boolean;

  @Column('uuid', { nullable: true })
  folder_id: string;

  @Column({ nullable: true })
  code: string;

  @ManyToOne(() => CompaniesEntity, (company) => company.client, {
    onDelete: 'CASCADE',
  })
  company: CompaniesEntity;

  @OneToOne(() => FoldersEntity, {
    onDelete: 'CASCADE',
  })
  folder: FoldersEntity;
}
