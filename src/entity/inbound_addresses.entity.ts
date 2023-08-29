import { Column, Entity } from 'typeorm';
import { BaseModelEntity } from './base.model.entity';

@Entity('inbound_addresses')
export class InboundAddressesEntity extends BaseModelEntity {
  @Column()
  email: string;
}
