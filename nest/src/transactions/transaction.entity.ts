import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Batch } from "../batches/batch.entity";

@Entity('payment_service_transactions')
export class Transaction {
  @Column('decimal', { precision: 2 })
  authorized_amount: boolean;

  @Column('varchar', { length: 255 })
  batch_id: string;

  @Column('text')
  card_type: string;

  @Column('decimal', { precision: 2 })
  cashback_amount: number;

  @Column('timestamp', { nullable: true })
  created_at: string;

  @Column('text', { nullable: true })
  created_by: string;

  @Column('text', { nullable: true })
  debit_credit: string;

  @Column('text')
  etag: string;

  @Column('varchar', { length: 255 })
  ext_trans_id: string;

  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('int')
  is_card_present: boolean;

  @Column('text', { nullable: true })
  local_time: string;

  @Column('decimal', { precision: 2 })
  net_deposit: number;

  @Column('text')
  pan: string;

  @Column('varchar', { length: 36 })
  payment_merchant_id: string;

  @Column('text')
  source: string;

  @Column('text')
  terminal_number: string;

  @Column('decimal', { precision: 2 })
  trans_amount: number;

  @Column('timestamp')
  trans_date: string;

  @Column('varchar', { length: 255 })
  trans_id: string;

  @Column('timestamp', { nullable: true })
  updated_at: string;

  @Column('text', { nullable: true })
  updated_by: string;

  @ManyToOne(type => Batch, batch => batch.transactions)
  @JoinColumn({referencedColumnName:'batch_id', name:'batch_id'})
  batch: Batch;
}