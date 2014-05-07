angular.module('starter', ['ionic', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tab.main', {
                url: '/main',
                views: {
                    'tab-main': {
                        templateUrl: 'templates/tab-main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('tab.project', {
                url: '/project',
                views: {
                    'tab-project': {
                        templateUrl: 'templates/tab-project.html',
                        controller: 'ProjectCtrl'
                    }
                }
            })
            .state('tab.project-detail', {
                url: '/project/:projectId',
                views: {
                    'tab-project': {
                        templateUrl: 'templates/project-detail.html',
                        controller: 'ProjectDetailCtrl'
                    }
                }
            })
            .state('tab.story', {
                url: '/story',
                views: {
                    'tab-story': {
                        templateUrl: 'templates/tab-story.html',
                        controller: 'StoryCtrl'
                    }
                }
            })
            .state('tab.story-detail', {
                url: '/story/:storyId',
                views: {
                    'tab-story': {
                        templateUrl: 'templates/story-detail.html',
                        controller: 'StoryDetailCtrl'
                    }
                }
            })
            .state('tab.task', {
                url: '/task',
                views: {
                    'tab-task': {
                        templateUrl: 'templates/tab-task.html',
                        controller: 'TaskCtrl'
                    }
                }
            })
            .state('tab.task-detail', {
                url: '/task/:taskId',
                views: {
                    'tab-task': {
                        templateUrl: 'templates/task-detail.html',
                        controller: 'TaskDetailCtrl'
                    }
                }
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
        $urlRouterProvider.otherwise('/tab/main');
    });

