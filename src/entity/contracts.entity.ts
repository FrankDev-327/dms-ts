import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { DocumentEntity } from './documents.entity';
import { FoldersEntity } from './foldes.entity';
import { ClientsEntity } from './clients.entity';
import { CompaniesEntity } from './companies.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('contracts')
export class ContractsEntity extends BaseModelEntity {
  @Column()
  title: string;

  @Column({ type: 'int' })
  status: number;

  @Column({ default: true })
  incoming: boolean;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  signed_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  starts_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  ends_at: Date;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'varchar', nullable: true })
  value: string;

  //TODO start relations

  @OneToOne(() => ClientsEntity, {
    onDelete: 'SET NULL',
  })
  client_id: ClientsEntity;

  @OneToOne(() => FoldersEntity, {
    onDelete: 'SET NULL',
  })
  folder_id: FoldersEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  created_by: UserEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  edited_by: UserEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  assigned_to: UserEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  responsible: UserEntity;

  @OneToOne(() => DocumentEntity, {
    onDelete: 'SET NULL',
  })
  document_id: DocumentEntity;

  @ManyToOne(() => CompaniesEntity, (company) => company.contract, {
    onDelete: 'CASCADE',
  })
  company_id: CompaniesEntity;
}
