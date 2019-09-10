/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const transactions =  sequelize.define('payment_service_transactions', {
		ext_trans_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		debit_credit: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		etag: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cashback_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		net_deposit: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		pan: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		authorized_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		is_card_present: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		trans_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		local_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		trans_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		source: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		terminal_number: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		trans_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		batch_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		card_type: {
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
		tableName: 'payment_service_transactions'
	});

	transactions.associate = function(models) {
		this.belongsTo(models.payment_service_batches, {foreignKey: 'batch_id', targetKey: 'batch_id'})
	}

	return transactions
};