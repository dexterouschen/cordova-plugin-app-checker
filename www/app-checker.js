function promisifyCordovaExec(command, params, className) {
  params = params || [];
  className = className || 'AppChecker';

  return new Promise(function innerPromise(resolve, reject) {
    var rejecter = function rejecter(error) {
      console.error('[Android App Checker] Error:', error);
      reject(error)
    };

    cordova.exec(resolve, rejecter, className, command, params);
  });
}

/**
 * Check if app is enabled or not.
 */
function isAppEnabled(packageName) {
  return promisifyCordovaExec('isAppEnabled', [packageName]);
}

/**
 * Gets the version of app.
 */
function getAppVersion(packageName) {
  return promisifyCordovaExec('getAppVersion', [packageName]);
}

/**
 * Opens the Google Play page of app.
 */
function openGooglePlayPage(packageName) {
  return promisifyCordovaExec('openGooglePlayPage', [packageName]);

}

module.exports = {
  isAppEnabled: isAppEnabled,
  getAppVersion: getAppVersion,
  openGooglePlayPage: openGooglePlayPage
}