const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'frameworker',
    projectName: 'frameworker',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    devServer: {
      proxy: {
        '/api/**': {
          target: 'http://localhost:8004',
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
