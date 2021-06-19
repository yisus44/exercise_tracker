const dotenv = require('dotenv');
dotenv.config();
require('./database/db');

const { app } = require('./app');
const keys = require('./config/keys');

app.listen(keys.PORT, function () {
  console.log(`Server up and running on ${keys.PORT}`);
});
