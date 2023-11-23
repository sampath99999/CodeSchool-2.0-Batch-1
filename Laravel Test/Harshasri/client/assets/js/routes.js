myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: "home",
            url: "/",
            templateUrl: "templates/home.html",
            controller: "homeController"

        })
        .state({
            name: 'register',
            url: "/register",
            templateUrl: "templates/register.html",
            controller: "registerController"
        })
        .state({
            name: 'login',
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "loginController"
        })
        .state({
            name: 'logout',
            url: "/logout",
            templateUrl: "templates/login.html",
            // controller:"loginController"
        })
        .state({
            name: 'jobs',
            url: "/jobs",
            templateUrl: "templates/jobs.html",
            controller: "jobController"
        })
        .state({
            name: 'applyJob',
            url: "/applyJob",
            templateUrl: "templates/applyJob.html",
            controller: "applyJobController"
        })

        .state({
            name: 'applications',
            url: "/applications",
            templateUrl: "templates/applications.html",
            controller: "applicationController"
        })

    $urlRouterProvider.otherwise("/");
})