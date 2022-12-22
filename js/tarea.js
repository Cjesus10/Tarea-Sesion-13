let app = angular.module("MyApp",[])

app.controller("formCtrl", function($scope){
    $scope.calcular = function(){
        
        let dist = parseInt($scope.distancia)
        $scope.costoTotal = 0;
        $scope.costo = 0;
        
        if(dist <= 300){
            $scope.costo = 250;
        }
        else if(dist > 300 && dist <= 1000){
            $scope.costo = 250 + 30*(dist - 300);
        }
        else if(dist > 1000){
            $scope.costo =  250 + 30*700 + 20*(dist - 1000);
        }
        if($scope.costo > 500){
            $scope.desc = 10/100*$scope.costo;
        }
        else{
            $scope.desc = 0;
        }
        $scope.costoTotal = $scope.costo -  $scope.desc;
    }
    $scope.calcular()
})
