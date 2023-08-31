import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('licenses')
export class LicensesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  valid_from: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  valid_to: Date;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
