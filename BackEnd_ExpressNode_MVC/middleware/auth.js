const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        throw (401, 'Invalid authorization');
    }

    const [scheme, token] = req.headers.authorization.split(' ');

    if (scheme !== 'Bearer') {
        throw (401, 'Invalid authorization');
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);

        req.userPayload = payload;
    } catch (err) {
        if (err.message && (err.message.toUpperCase() === 'INVALID TOKEN' || err.message.toUpperCase() === 'JWT EXPIRED')) {

            req.status = err.status || 500;
            req.body = err.message;
            req.app.emit('jwt-error', err, req);
        } else {

            throw ((err.status || 500), err.message);
        }
        console.log(err)
    }

    await next();
}