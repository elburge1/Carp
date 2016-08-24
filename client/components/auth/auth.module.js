'use strict';

angular.module('carpoolAppApp.auth', ['carpoolAppApp.constants', 'carpoolAppApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
