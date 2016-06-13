var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services','720kb.datepicker']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/users', {
    templateUrl: 'partials/User_list.html',
    controller: 'UserListController'
  }).
  when('/users/:id', {
    templateUrl: 'partials/User_detail.html',
    controller: 'UserDetailController'
  }).
  when('/add_user', {
    templateUrl: 'partials/Add_user.html',
    controller: 'AddUserController'
  }).  
  when('/tasks', {
    templateUrl: 'partials/Task_list.html',
    controller: 'TaskListController'
  }).
  when('/add_task', {
    templateUrl: 'partials/Add_task.html',
    controller: 'AddTaskController'
  }).
  when('/tasks/:tid', {
    templateUrl: 'partials/Task_detail.html',
    controller: 'TaskDetailController'
  }).
  when('/edit_task/:tid', {
    templateUrl: 'partials/Edit_task.html',
    controller: 'EditTaskController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).

  otherwise({
    redirectTo: '/settings'
  });
}]);
