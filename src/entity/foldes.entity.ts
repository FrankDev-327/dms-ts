import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CompaniesEntity } from './companies.entity';
import { DocumentType } from '../enums/folder.enum';
import { BaseModelEntity } from './base.model.entity';
import { DocumentEntity } from './documents.entity';
import { ClientsEntity } from './clients.entity';

@Entity('folders')
export class FoldersEntity extends BaseModelEntity {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  parent_id: string;

  @Column({
    type: 'enum',
    enum: DocumentType,
    default: DocumentType.Documents,
  })
  section: DocumentType;

  @ManyToOne(() => CompaniesEntity, (company) => company.folder, {
    onDelete: 'CASCADE',
  })
  company: CompaniesEntity;

  @ManyToOne(() => DocumentEntity, (document) => document.folder, {
    onDelete: 'CASCADE',
  })
  document: DocumentEntity;

  @OneToMany(() => ClientsEntity, (client) => client.folder)
  @JoinColumn({ name: 'client_id' })
  client: ClientsEntity[];
}
