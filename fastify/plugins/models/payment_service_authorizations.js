'use strict'

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('payment_service_authorizations', {
		is_reversal: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		debit_credit: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		local_time: {
			type: DataTypes.TIME,
			allowNull: false
		},
		auth_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		pan: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		approval_code: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		local_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		terminal_number: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		auth_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		source: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		is_card_present: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		etag: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		auth_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		is_success: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		card_type: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		reversal_reason: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cashback_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		auth_reject_reason: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		created_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		payment_merchant_id: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'payment_service_authorizations'
	});
};