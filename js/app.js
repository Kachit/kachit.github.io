'use strict';

var servicesFactory = angular.module('servicesFactory', []);

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

var router = new Router();


function Router() {
    var baseUrl = '';
    var routes = new RoutesCollection();

    return {
        setBaseUrl: function(url) {
            baseUrl = url;
            return this;
        },
        getBaseUrl: function() {
            return baseUrl;
        },
        addRoute: function(route) {
            routes.add(route);
            return this;
        },
        getRoute: function (name) {

        }
    }
}

function RoutesCollection() {
    var routes = {};
    return {
        add: function(route) {
            routes.push(route);
        },
        get: function (name) {
            return routes[name];
        },
        getList: function() {
            return routes;
        }
    }
}

function Route() {
    var controller;
    var action;
    var params = [];

    this.generate = function () {
        return controller + '/' + action;
    }
}

