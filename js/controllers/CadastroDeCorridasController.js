angular.module("CadastroDeCorridas").controller("CadastroDeCorridasController", function ($scope, $http) {
$scope.nomeModulo = "Corridas Cadastradas no Sistema";
$scope.corridas = [];
$scope.passageiros = [];
$scope.motoristas = [];

var carregarMotoristas = function(){
  $http.get('http://localhost:3003/motoristas').then(function(response) {
    $scope.motoristas = response.data;
  });
};

var carregarPassageiros = function(){
  $http.get("http://localhost:3003/passageiros").then(function(response){
    $scope.passageiros = response.data;
  });
};

var carregarCorridas = function(){
  $http.get("http://localhost:3003/corridas").then(function(response){
    $scope.corridas = response.data;
  });
};

$scope.adicionarCorrida = function (corrida) {
  $http.post("http://localhost:3003/corridas", corrida).then(function(response){
    delete $scope.corrida;
    $scope.corridaForm.$setPristine();
    carregarCorridas();
  });
};
$scope.apagarCorridas = function(corridas){
  $scope.corridas = corridas.filter(function (corrida){
    if (!corrida.selecionado) return corrida;
  });
};

carregarMotoristas();
carregarPassageiros();
carregarCorridas();
});
