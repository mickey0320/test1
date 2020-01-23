module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  // shipit.task('deploy', async () => {
  // shipit.on('')
  // await shipit.remote('pm2 startOrRestart /var/www/pojects/current/ecosystem.json')
  // })
  shipit.on('updated', () => {
    shipit.start('app:build');
  })

  shipit.blTask('app:build', async () => {
    // await shipit.remote('cd /var/www/pojects/current; npm install');
    // await shipit.remote('npm install');
    await shipit.remote('sh test.sh');
  })

  shipit.initConfig({
    default: {
      deployTo: '/var/www/pojects',
      repositoryUrl: 'git://github.com/mickey0320/test.git',
    },
    production: {
      servers: 'root@106.12.202.39:10022'
    },
  })
}
