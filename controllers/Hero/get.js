const db = require('../../models');
const response = require('../../utils/respons');

exports.get = async (req, res) => {
    try {

        console.log('get success');


        const result = ''
        return response.success("Get Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}