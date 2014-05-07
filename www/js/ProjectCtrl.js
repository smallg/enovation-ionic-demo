var ProjectCtrl = ['$scope','Project', function ($scope,Project) {
    $scope.projects = Project.all();
}];