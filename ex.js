const Smallify = require('smallify')
const smallifyEnv = require('./index')

const smallify = Smallify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

smallify.register(smallifyEnv, {
  dotenv: true,
  schema: {
    type: 'object',
    properties: {
      TEST_ENV: {
        type: 'string',
        default: 'this is default'
      }
    }
  }
})

smallify.ready(err => {
  err && smallify.$log.error(err.message)
  smallify.print()
  smallify.$log.info(smallify.$env.TEST_ENV)
})
