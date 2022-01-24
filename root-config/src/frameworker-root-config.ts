import { registerApplication, start } from "single-spa";
interface Application {
  name: string;
  package: string;
  activeWhen: string;
  exact: string;
}

interface ApplicationResponseData {
  applications: Application[];
}

// {
//   "applications": [
//     {
//       "name": "@frameworker/react-single",
//       "package":  "@frameworker/react-single",
//       "activeWhen": "/",
//       "exact": "false"
//     }
//   ]
// }
fetch("https://run.mocky.io/v3/b0ae8a06-fed8-4bce-94ce-8d76b33e86fc")
  .then((response) => response.json())
  .then((data: ApplicationResponseData) =>
    data.applications.forEach((application) => {
      registerApplication({
        name: application.name,
        // eslint-disable-next-line no-restricted-properties
        app: () => System.import(application.package),
        activeWhen: application.exact
          ? (location) => location.pathname === application.activeWhen
          : [application.activeWhen],
      });
      registerApplication({
        name: "@frameworker/angular-mfe",
        // eslint-disable-next-line no-restricted-properties
        app: () => System.import("@frameworker/angular-mfe"),
        activeWhen: ["/login","/linkedinLoginResponse"],
      });
    })
  )
  .finally(() =>
    start({
      urlRerouteOnly: true,
    })
  );
