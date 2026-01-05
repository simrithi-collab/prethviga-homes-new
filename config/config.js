require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    port:process.env.DB_PORT,
    logging : false,
    timezone: '+05:30',
    seederStorage: 'sequelize',
    seederStorageTableName: 'CustomSeederTable',
    image: process.env.PROJECT_URL,
  },
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/prethviga-homes'
  }
};
