import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn, JoinTable } from "typeorm";
import { Transaction } from "../transactions/transaction.entity";

@Entity('payment_service_batches')
export class Batch {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('timestamp')
  batch_date: string;

  @Column('varchar', { length: 255 })
  batch_id: string;

  @Column('timestamp', { nullable: true })
  created_at: string;

  @Column('varchar', { length: 36, nullable: true })
  created_by: string;

  @Column('text')
  etag: string;

  @Column('decimal')
  net_deposit: number;

  @Column('varchar', { length: 36 })
  payment_merchant_id: string;

  @Column('text')
  source: string;

  @Column('text')
  terminal_number: string;

  @Column('timestamp', { nullable: true })
  updated_at: string;

  @Column('varchar', { length: 36, nullable: true })
  updated_by: string;

  @OneToMany(type => Transaction, transaction => transaction.batch)
  @JoinColumn({referencedColumnName:'batch_id', name:'batch_id'})
  transactions: Transaction[]

}