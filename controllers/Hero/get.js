const db = require('../../models');


exports.get = async (req, res) => {
    try {


    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}