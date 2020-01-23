module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  // shipit.task('deploy', async () => {
  // shipit.on('')
  // await shipit.remote('pm2 startOrRestart /var/www/pojects/current/ecosystem.json')
  // })
  shipit.on('published', () => {
    return shipit.start('install');
  })

  shipit.blTask('install', async () => {
    var path = shipit.currentPath;

    return shipit.remote('echo $PATH && cd ' + path + ' && npm install');
  })

  shipit.initConfig({
    default: {
      workspace: '/User/jianyan/shipit-workspace/',
      deployTo: '/var/www/projects',
      repositoryUrl: 'git://github.com/mickey0320/test.git',
      shallowClone: true
    },
    production: {
      servers: 'root@106.12.202.39:10022'
    },
  })
}
