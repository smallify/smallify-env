const envSchema = require('env-schema')

module.exports = async function (smallify, opts) {
  const config = envSchema(opts)
  smallify.decorate('$env', config)
}
