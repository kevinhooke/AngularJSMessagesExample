describe('Tests for simple controller', function () {
    var $controller;

    beforeEach(angular.mock.module('simpleApp'));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('Should return hello message if param is not blank', function () {
        var $scope = {};
        var controller = $controller('simpleCtrl', { $scope: $scope });

        $scope.formdata.name = "Test";
        $scope.hello();
        expect($scope.hellomsg).toBe("Hello Test");
    });

    it('Should return blank if param is blank', function () {
        var $scope = {};
        var controller = $controller('simpleCtrl', { $scope: $scope });

        $scope.formdata.name = "";
        $scope.hello();
        expect($scope.hellomsg).toBe("");
    });


})
