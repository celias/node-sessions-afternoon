
//ARRAY OF SWAG OBJECTS
const swag = require('../models/swag');
//EXPORT AN OBJECT WITH READ METHOD
module.exports = {
    read: ( req, res, next ) => {
        res.status(200).send( swag );
    }
};