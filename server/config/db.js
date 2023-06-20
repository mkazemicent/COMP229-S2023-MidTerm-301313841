const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  //local MongoDB deployment ->
  "URI": process.env.MONGODB_URI
};
