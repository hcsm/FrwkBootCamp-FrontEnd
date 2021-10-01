import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@frameworker/react-single",
  app: () => System.import("@frameworker/react-single"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
