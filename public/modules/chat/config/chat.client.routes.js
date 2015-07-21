'use strict';

angular.module('chat')
    .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider.
                    state('chat', {
                        url: '/chat',
                        templateUrl: 'modules/core/views/chat.client.view.html'
                });
            }]);