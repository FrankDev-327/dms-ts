import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CompaniesEntity } from './companies.entity';
import { BaseModelEntity } from './base.model.entity';

@Entity('cost_centers')
export class CostCentersEntity extends BaseModelEntity {
  @Column()
  name: string;

  @Column({
    default: false,
  })
  active: boolean;

  @Column({
    nullable: true,
  })
  code: string;

  @ManyToOne(() => CompaniesEntity, (company) => company.const_center, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompaniesEntity;
}
