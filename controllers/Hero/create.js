const db = require('../../models');
const response = require('../../utils/respons');

exports.create = async (req, res) => {
    try {

        const nama = req.body.nama
        const role = req.body.role

        const Hero = await db.hero.create({
            nama: nama,
            role: role
        })

        const result = Hero
        return response.success("Insert Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}