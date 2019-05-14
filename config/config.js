module.exports = 
{
  "development": {
    "username": "root",
    "password": process.env.userPassword,
    "database": "diginote",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
