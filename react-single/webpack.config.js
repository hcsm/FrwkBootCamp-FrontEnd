const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')
var fs = require('fs')

var cert = fs.readFileSync('../server.crt')
var key = fs.readFileSync('../server.key')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'frameworker',
    projectName: 'frameworker',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    devServer: {
      https: {
        cert: cert,
        key: key,
      },
      proxy: {
        '/api': {
          target: 'http://localhost:8004/framebook',
          secure: false,
          pathRewrite: {
            '^/api': '',
          },
        },
        '/json-server': {
          target: 'http://localhost:3000',
          secure: false,
          pathRewrite: {
            '^/json-server': '',
          },
        },
      },
    },
    watchOptions: {
      ignored: '**/db.json',
    },
    // modify the webpack config however you'd like to by adding to this object
  })
}
