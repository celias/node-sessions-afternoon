//TO EXPORT A FUNCTION 
//REQ RES NEXT ARE PARAMETERS
module.exports = function( req, res, next ){
    const { session } = req;
    
    if( !session.user ){
        session.user = { username: '', cart: [], total: 0 };
    }
    next();
};