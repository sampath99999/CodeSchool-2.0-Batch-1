myApp.config([
  "$urlRouterProvider",
  "$stateProvider",
  function ($urlRouterProvider, $stateProvider) {
    $stateProvider

      .state("home", {
        url: "/home",
        templateUrl: "./templates/home.html",
        controller: "homeController",
      })
      .state("events", {
        url: "/events",
        templateUrl: "./events.html",
        controller: "eventsController",
      });
    $urlRouterProvider.otherwise("events");
  },
]);
