const Hero = (sequelize, Sequelize) =>
    sequelize.define(
        "hero",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            public_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            hooks: {
                afterCreate: (data, opt) =>
                    logDatabase({
                        _table: "hero",
                        _action: "create",
                        ...data.dataValues,
                    }),
                afterUpdate: (data, opt) =>
                    logDatabase({
                        _table: "hero",
                        _action: "update",
                        ...data.dataValues,
                    }),
            },
        }
    );

module.exports = Hero;
