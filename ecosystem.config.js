module.exports = {
  apps: [{
    name: 'droomscrapper',
    script: "./bin/www", // the path of the script you want to execute,
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    //  pm2 start ecosystem.config.js 
    instances: 1,
    autorestart: true,
    watch: true,
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true,
    env: {
    },
  }],
};