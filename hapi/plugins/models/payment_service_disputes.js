/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('payment_service_disputes', {
		transaction_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		loaded_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		case_type: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		resolved_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		pan: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		dispute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		resolution: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		second_request_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		family_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		posted_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		debit_credit: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		merchant_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		dispute_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		case_status: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		etag: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		case_number: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		card_type: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		transaction_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		status_message: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		auth_code: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		reason_code: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		reason_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		source: {
			type: DataTypes.TEXT,
			allowNull: false
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
		tableName: 'payment_service_disputes'
	});
};