const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8004/framebook",
    secure: false,
    pathRewrite: {
      "^/api": "",
    },
  },
  {
    context: ["/linkedinData"],
    logLevel: "info",
    target:
      "https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/linkedinData": "",
    },
  },
  {
    context: ["/accessToken"],
    logLevel: "info",
    target: "https://www.linkedin.com/oauth/v2/accessToken",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/accessToken": "",
    },
  },
];

module.exports = PROXY_CONFIG;
