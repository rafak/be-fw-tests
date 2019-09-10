import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('payment_service_authorizations')
export class Authorization {
  @Column('int',{nullable: true})
  is_reversal: boolean;

  @Column('text')
  debit_credit: string;

  @Column('text')
  local_time: string;

  @Column('int')
  auth_amount: number;

  @Column('text')
  pan: string;

  @Column('text')
  approval_code: string;

  @Column('text')
  local_date: string;

  @Column('text')
  terminal_number: string;

  @Column('text')
  auth_id: string;

  @Column('text')
  source: string;

  @Column('int')
  is_card_present: boolean;

  @Column('text')
  etag: string;

  @Column('text')
  auth_date: string;

  @Column('int')
  is_success: boolean;

  @Column('text')
  card_type: string;

  @Column('text',{nullable: true})
  reversal_reason: string;

  @Column('int')
  cashback_amount: number;

  @Column('text')
  auth_reject_reason: string;

  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('text',{nullable: true})
  created_by: string;

  @Column('text',{nullable: true})
  created_at: string;

  @Column('text',{nullable: true})
  updated_by: string;

  @Column('text',{nullable: true})
  updated_at: string;

  @Column('text')
  payment_merchant_id: string;

}