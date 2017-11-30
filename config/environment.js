/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'proyectoteyco',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
      apiKey: "AIzaSyAxfEtBGau4u1nX7pGRiY_-YeoMWaGoruI",
      authDomain: "teyco-87172.firebaseapp.com",
      databaseURL: "https://teyco-87172.firebaseio.com",
      projectId: "teyco-87172",
      storageBucket: "teyco-87172.appspot.com",
      messagingSenderId: "884248412388"
    };
    ENV.torii = {
      sessionServiceName:'session'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyAxfEtBGau4u1nX7pGRiY_-YeoMWaGoruI",
      authDomain: "teyco-87172.firebaseapp.com",
      databaseURL: "https://teyco-87172.firebaseio.com",
      projectId: "teyco-87172",
      storageBucket: "teyco-87172.appspot.com",
      messagingSenderId: "884248412388"
    };
    ENV.torii = {
      sessionServiceName:'session'
    };

  }

  return ENV;
};
