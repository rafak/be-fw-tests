/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const batches = sequelize.define('payment_service_batches', {
		etag: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		source: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		terminal_number: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		net_deposit: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		batch_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		batch_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
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
		tableName: 'payment_service_batches'
	})

	batches.associate = function(models) {
		this.hasMany(models.payment_service_transactions, {foreignKey: 'batch_id', sourceKey: 'batch_id'})
	}
	return batches
}