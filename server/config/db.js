//Mohammad Kazemi 301313841 23/06/2023
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  //local MongoDB deployment ->
  "URI": process.env.MONGODB_URI
};
