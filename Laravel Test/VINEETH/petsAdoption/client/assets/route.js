myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './Templates/home.html',
            controller: "HomeController"
        })
        .state('login', {
            url: '/login',
            templateUrl: './Templates/login.html',
            controller: "LoginController"
        })
        .state('donate', {
            url: '/donate',
            templateUrl: './Templates/donate.html',
            controller: "DonateController"
        })
        .state('see', {
            url: '/see',
            templateUrl: './Templates/see.html',
            controller: "SeeController"
        })

    $urlRouterProvider.otherwise('/');
})