module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);
  require('shipit-pm2')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/Users/jianyan/shipit-workspace',
      deployTo: '/var/www/project/test',
      repositoryUrl: 'git://github.com/mickey0320/test1.git',
      shallowClone: false,
      pm2: {
        json: '/var/www/project/test/current/ecosystem.json'
      },
      npm: {
        remote: true,
        // installArgs: ['gulp'],
        // installFlags: ['--production']
      }
    },
    production: {
      servers: 'root@106.12.202.39:10022'
    },
  })
}
