import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContractsEntity } from './contracts.entity';
import { InvoicesEntity } from './invoices.entity';
import { ClientsEntity } from './clients.entity';
import { FoldersEntity } from './foldes.entity';
import { CostCentersEntity } from './cost_centers.entity';
import { DocumentEntity } from './documents.entity';

@Entity('companies')
export class CompaniesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
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
    nullable: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column({
    nullable: true,
  })
  address: string;

  @OneToMany(() => CostCentersEntity, (cost) => cost.company)
  @JoinColumn({ name: 'const_center_id' })
  const_center: CostCentersEntity[];

  @OneToMany(() => FoldersEntity, (folder) => folder.company)
  @JoinColumn({ name: 'folder_id' })
  folder: FoldersEntity[];

  @OneToMany(() => DocumentEntity, (document) => document.company)
  @JoinColumn({ name: 'document_id' })
  document: DocumentEntity[];

  @OneToMany(() => ClientsEntity, (client) => client.company)
  @JoinColumn({ name: 'client_id' })
  client: ClientsEntity[];

  @OneToMany(() => InvoicesEntity, (invoice) => invoice.company_id)
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoicesEntity[];

  @OneToMany(() => ContractsEntity, (contract) => contract.company_id)
  @JoinColumn({ name: 'contract_id' })
  contract: ContractsEntity[];
}
