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
    watchOptions: {
      ignored: '**/db.json',
    },
    // modify the webpack config however you'd like to by adding to this object
  })
}
