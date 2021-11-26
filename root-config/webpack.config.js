const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var fs = require("fs");

var cert = fs.readFileSync("../server.crt");
var key = fs.readFileSync("../server.key");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "frameworker";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      https: {
        cert: cert,
        key: key,
      },
      proxy: {
        "/api": {
          target: "http://localhost:8004/framebook",
          secure: false,
          pathRewrite: {
            "^/api": "",
          },
        },
        "/accessToken": {
          logLevel: "info",
          target: "https://www.linkedin.com/oauth/v2/accessToken",
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            "^/accessToken": "",
          },
        },
        "/linkedinData": {
          logLevel: "info",
          target:
            "https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))",
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            "^/linkedinData": "",
          },
        },
        "/json-server": {
          target: "http://localhost:3000",
          secure: false,
          pathRewrite: {
            "^/json-server": "",
          },
        },
      },
    },
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
