import { Entity, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { DocumentEntity } from './documents.entity';
import { InvoicesEntity } from './invoices.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('users')
export class UserEntity extends BaseModelEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => InvoicesEntity)
  liquidated_by: InvoicesEntity;

  @OneToMany(() => DocumentEntity, (document) => document.user)
  @JoinColumn({ name: 'user_assigned_to_id' })
  assignedTo: DocumentEntity[];
}
