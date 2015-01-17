'use strict';

var app = angular.module('app', []);

app.controller('newsCtrl', ['$scope', function($scope) {

    $scope.list = false;
    $scope.posts = [
        {
            id: 1,
            title: 'name1',
            active: false,
            text: 'text1'
        },
        {
            id: 2,
            title: 'name2',
            active: false,
            text: 'text3'
        },
        {
            id: 3,
            title: 'name3',
            active: true,
            text: 'text3'
        },
        {
            id: 5,
            title: 'name5',
            active: false,
            text: 'text5'
        },
        {
            id: 6,
            title: 'name6',
            active: true,
            text: 'text6'
        },
        {
            id: 4,
            title: 'name4',
            active: true,
            text: 'text4'
        }
    ];

    $scope.getFileName = function() {
        return ($scope.list) ? '/html/list.html' : '/html/table.html';
    };

    $scope.addNewUser = function() {
        alert(123);
    };

    $scope.newUser = {};

    $scope.message = "Ready";
}]);

app.directive('tap', function(){
    return function (scope, elem, attrs){
        elem.on('mouseenter', function() {
            scope.$apply(attrs['tap']);
        });
    }
});