const jwt = require("jsonwebtoken");

const secret = "swayamproject";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;  // if length is less than 500 then token is custom

    let decodedData;

    if (token && isCustomAuth) {      // if the token is custom token
      decodedData = jwt.verify(token, secret);

      if(decodedData) {
        req.userId = decodedData.id;
      }
    } else {                          // if the token is oauth token
      decodedData = jwt.decode(token);

      if(decodedData){
        req.userId = decodedData.sub; // sub is a value provided by google which uniquely identifies a user
      }  
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;