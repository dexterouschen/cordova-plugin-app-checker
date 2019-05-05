# cordova-plugin-app-checker

Checks whether certain android application is enabled or not.

## Installation

```
cordova plugin add cordova-plugin-app-checker
```

## Usage

As this plugin is used to detect the version of an installed app.

## API

### isAppEnabled()

It returns a promise which will be resolved to `true` if the app is enabled and `false` otherwise.

```js
cordova.plugins.appChecker.isAppEnabled()
  .then(function(enabled) { console.log(enabled); })
  .catch(function(error) { console.error(error); });
```

### getAppVersion()

It returns a promise which will be resolved to the string representation of the version number (eg: `57.0.2987.132`) or rejected with a `Package is not found` error if the app is not installed

```js
cordova.plugins.appChecker.getAppVersion()
  .then(function(version) { console.log(version); })
  .catch(function(error) { console.error(error); });
```

### openGooglePlayPage()

A helper function to open the Google Play page of app. Useful for prompting the user to update/enable the app.

```js
cordova.plugins.appChecker.openGooglePlayPage()
  .then(function() { console.log('Google Play page of app has been opened.'); })
  .catch(function(error) { console.error(error); });
```