(function(){

  'use strict';

  angular.module('jmp-calculator', ['ionic'])

  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){

      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
})();
