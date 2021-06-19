const mongoose = require('mongoose');
const keys = require('../config/keys');
async function init() {
  await mongoose.connect(keys.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

init();
