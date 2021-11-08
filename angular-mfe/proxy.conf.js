const PROXY_CONFIG = [
  {
    context: ["/api/**"],
    target: "http://localhost:8004",
    secure: false,
    pathRewrite: {
      "^/api": "",
    },
  },
];

module.exports = PROXY_CONFIG;
