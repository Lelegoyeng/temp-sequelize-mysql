const db = require('../../models');
const response = require('../../utils/respons');
const { Op, Sequelize } = require('sequelize');

exports.del = async (req, res) => {
    try {
        const public_id = req.params.id?.toString();

        const hero = await db.hero.findOne({
            where: { public_id: { [Op.eq]: public_id } },
        });

        if (!hero) throw new Error('Hero tidak ditemukan');


        await hero.destroy()

        const result = hero
        return response.success("Delete Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}