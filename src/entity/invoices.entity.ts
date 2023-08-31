import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { DocumentEntity } from './documents.entity';
import { FoldersEntity } from './foldes.entity';
import { CompaniesEntity } from './companies.entity';
import { ClientsEntity } from './clients.entity';
import { CostCentersEntity } from './cost_centers.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('invoices')
export class InvoicesEntity extends BaseModelEntity {
  @Column()
  title: string;

  @Column({ type: 'int' })
  status: number;

  @Column({ default: true })
  incoming: boolean;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  received_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  sent_at: Date;

  @Column({ type: 'int', nullable: true })
  delivery_type: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'timestamp', nullable: true })
  liquidated_at: Date;

  @Column({ type: 'int', nullable: true })
  ordinal_number: number | null;

  //TODO start relations

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  liquidated_by: UserEntity;

  @OneToOne(() => FoldersEntity, {
    onDelete: 'SET NULL',
  })
  folder_id: FoldersEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  assigned_to: UserEntity;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  responsible: UserEntity;

  @OneToOne(() => CostCentersEntity, {
    onDelete: 'CASCADE',
  })
  cost_center_id: CostCentersEntity;

  @OneToOne(() => DocumentEntity, {
    onDelete: 'SET NULL',
  })
  document_id: DocumentEntity;

  @OneToOne(() => ClientsEntity, {
    onDelete: 'SET NULL',
  })
  client_id: ClientsEntity;

  @ManyToOne(() => CompaniesEntity, (company) => company.invoice, {
    onDelete: 'CASCADE',
  })
  company_id: CompaniesEntity;
}
