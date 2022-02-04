const jwt = require('jsonwebtoken');

const secret = 'IHatePickles';

const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    authMiddleware: function({ req }) {

        let token = req.body.token || req.query.token || req.headers.authorization;
         
            token = token
            .split(' ')
            .pop()
            .trim();
        }

};