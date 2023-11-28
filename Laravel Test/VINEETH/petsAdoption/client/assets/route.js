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
        .state('adopt', {
            url: '/adopt',
            templateUrl: './Templates/see.html',
            controller: "SeeController"
        })
        .state('order', {
            url: '/order',
            templateUrl: './Templates/order.html',
            controller: "OrderController"
        })
        .state('request', {
            url: '/request',
            templateUrl: './Templates/request.html',
            controller: "RequestController"
        })
    $urlRouterProvider.otherwise('/');
})