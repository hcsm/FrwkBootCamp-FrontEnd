// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8004/framebook/',
  linkedin_client_id: '78xsg4u4u9xay1',
  linkedin_redirect_uri:'https%3A%2F%2Flocalhost%3A9000%2FlinkedinLoginResponse',
  linkedin_scope: 'r_liteprofile',
  linkedin_state: '987654321',
  linkedin_response_type: 'code',
  linkedin_client_secret:"sBMUZUFbLErvhGoF",
  loginEventType: 'user-logged-in',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
