import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('payment_service_disputes')
export class Dispute {
  @Column('text')
  auth_code: boolean;

  @Column('text')
  card_type: string;

  @Column('text')
  case_number: string;

  @Column('text')
  case_status: string;

  @Column('text')
  case_type: string;

  @Column('timestamp', { nullable: true })
  created_at: string;

  @Column('text', { nullable: true })
  created_by: string;

  @Column('text')
  debit_credit: string;

  @Column('decimal', { precision:2 })
  dispute_amount: number;

  @Column('varchar', { length: 255 })
  dispute_id: string;

  @Column('text')
  etag: string;

  @Column('varchar', { length: 255 })
  family_id: string;

  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('timestamp', { nullable: true })
  loaded_date: string;

  @Column('decimal', { precision:2 })
  merchant_amount: number;

  @Column('text')
  pan: string;

  @Column('varchar', { length: 36 })
  payment_merchant_id: string;

  @Column('timestamp', { nullable: true })
  posted_date: string;

  @Column('text')
  reason_code: string;

  @Column('text')
  reason_description: string;

  @Column('text')
  resolution: string;

  @Column('timestamp', { nullable: true })
  resolved_date: string;

  @Column('timestamp', { nullable: true })
  second_request_date: string;

  @Column('text')
  source: string;

  @Column('text')
  status_message: string;

  @Column('timestamp', { nullable: true })
  transaction_date: string;

  @Column('varchar', {length:255})
  transaction_id: string;

  @Column('timestamp', { nullable: true })
  updated_at: string;

  @Column('text', { nullable: true })
  updated_by: string;
}