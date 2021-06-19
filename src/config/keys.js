const keys = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  SALT_ROUND: process.env.SALT_ROUND || 10,
};

module.exports = keys;
