const Member = (sequelize, Sequelize) =>
    sequelize.define(
        "member",
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
        },
        {
            hooks: {
                afterCreate: (data, opt) =>
                    logDatabase({
                        _table: "member",
                        _action: "create",
                        ...data.dataValues,
                    }),
                afterUpdate: (data, opt) =>
                    logDatabase({
                        _table: "member",
                        _action: "update",
                        ...data.dataValues,
                    }),
            },
        }
    );

module.exports = Member;
