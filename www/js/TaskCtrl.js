var TaskCtrl = ['$scope','$ionicModal', function ($scope,$ionicModal) {
    $scope.tasks = [
        { title: 'Collect coins' },
        { title: 'Eat mushrooms' },
        { title: 'Get high enough to grab the flag' },
        { title: 'Find the Princess' }
    ];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('templates/new-task.html', function (modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createTask = function (task) {
        if (task == "" || task == undefined || task == null || task.length==0) {
            return;
        }
        $scope.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
    };

    // Open our new task modal
    $scope.newTask = function () {
        $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function () {
        $scope.taskModal.hide();
    };
}];