import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { FoldersEntity } from './foldes.entity';
import { CompaniesEntity } from './companies.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('documents')
export class DocumentEntity extends BaseModelEntity {
  @Column()
  description: string;

  @Column()
  ocr_text: string;

  @Column()
  title: string;

  @OneToOne(() => UserEntity)
  created_by: UserEntity;

  @OneToOne(() => UserEntity)
  edited_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.assignedTo, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_assigned_to_id' })
  user: UserEntity;

  @ManyToOne(() => CompaniesEntity, (company) => company.document, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompaniesEntity;

  @OneToMany(() => FoldersEntity, (folder) => folder.document, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'folder_id' })
  folder: FoldersEntity;
}
