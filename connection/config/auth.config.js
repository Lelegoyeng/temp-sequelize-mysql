module.exports = {
    accessSecret: process.env.ACCESS_TOKEN_SECRET_KEY || 'gg',
    refreshSecret: process.env.REFRESH_TOKEN_SECRET_KEY || 'yow',
    jwtExp: '30d',
    jwtRefreshExp: '30d',
    bcaAccessSecret: process.env.BCA_ACCESS_TOKEN_SECRET_KEY || 'wkwkwk',
    bcaJwtExp: '8600s'
}
