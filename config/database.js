// path: /srv/strapi/mystrapiapp/config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DB_HOST'),
      port: env.int('DB_PORT'),
      database: env('DB_NAME'),
      user: env('DB_USER'),
      password: env('DB_PASS'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});