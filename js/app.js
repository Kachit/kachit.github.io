'use strict';

(function() {
    var servicesFactory = angular.module('servicesFactory', []);

    var serviceContainer = {

    };

    servicesFactory.service('newsService', function(){
        var news = [
            {title: 123},
            {title: 231},
            {title: 456},
            {title: 789}
        ];
        return {
            add: function(item) {
                news.push(item);
                return this;
            },
            getList: function() {
                return news;
            }
        };
    });

    var app = angular.module('app', ['servicesFactory']);

    app.controller('newsCtrl', ['$scope', 'newsService', function($scope, newsService) {
        newsService.add({title:258}).add({title:753});
        $scope.news = newsService.getList();
    }]);
})();