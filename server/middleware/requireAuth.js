const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization){
        return res.status(401).json({error: "Auth token required!"});
    }

    const token = authorization.split(' ')[1];
    try {
        const { userId } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: userId });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }
}

module.exports = requireAuth;