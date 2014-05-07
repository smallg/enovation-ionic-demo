var ProjectDetailCtrl = ['$scope', '$stateParams', 'Project', function ($scope, $stateParams, Project) {
    $scope.project = Project.get($stateParams.projectId);
}];