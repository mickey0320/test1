module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/www/pojects',
      repositoryUrl: 'https://github.com/mickey0320/test.git',
    },
    production: {
      servers: 'root@106.12.202.39:10022'
    },
  })
}
