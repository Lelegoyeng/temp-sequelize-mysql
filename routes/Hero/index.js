
module.exports = (app) => {
    app.use(
        '/hero',
        require('./hero.routes')
    );
};
