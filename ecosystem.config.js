module.exports = {
  apps: [
    {
        name: 'strapi-dev',
        script: 'strapi.sh',
        env: {
            NODE_ENV: 'development',
            DB_HOST: '127.0.0.1',
            DB_PORT: '3306',
            DB_NAME: 'strapi_dev',
            DB_USER: 'strapi',
            DB_PASS: 'yourenotpreparedmonami912',
            APP_KEYS: 'K6BbtdHL9RqnfCyfQiIucQ==,oThwqcx+SlrHO7ugU0ZVEQ==,lxZT7+VVTXXl0CcEd9BEqQ==,iq9j+O7VvhFPBmofN69w/g==',
            API_TOKEN_SALT: 'vqwjEDAdGiEJK0WRsx1IOQ==',
            ADMIN_JWT_SECRET: 'ZPo3Qv782trYyMC+76q4Qw==',
            JWT_SECRET: '3AyHF6pj4ymWCz29/FGw4Q==',
        },
    },
    {
        name: 'ng-sv',
	script: 'angular.sh',
	env: {
		NODE_ENV: 'development',
	},
    },
 ],
};
