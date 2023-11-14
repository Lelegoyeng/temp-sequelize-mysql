const db = require('../../models');
const response = require('../../utils/respons');
const { Op, Sequelize } = require('sequelize');

exports.update = async (req, res) => {
    try {
        const { nama, role } = req.body;
        const public_id = req.params.id?.toString();

        if (!nama) return response.invalidInput('Invalid nama hero', res);
        if (!role) return response.invalidInput('Invalid role hero', res);

        const hero = await db.hero.findOne({
            where: { public_id: { [Op.eq]: public_id } },
        });

        if (!hero) throw new Error('Hero tidak ditemukan');

        hero.nama = nama
        hero.role = role

        await hero.save();

        const result = hero
        return response.success("Update Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}