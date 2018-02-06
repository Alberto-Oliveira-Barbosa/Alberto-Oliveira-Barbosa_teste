angular.module("CadastroDeCorridas").controller("CadastroDeMotoristasController", function ($scope, motoristasAPI) {
  $scope.nomeModulo = "Motoristas Cadastrados";
  $scope.motoristas = [];

  $scope.sexos = [
    {tipo: "MASCULINO"},
    {tipo: "FEMININO"}

  ];
  $scope.statusDoMotorista = [
    {nome: "ATIVO"},
    {nome: "INATIVO"}
  ];

  var carregarMotoristas = function(){
    motoristasAPI.getMotoristas().then(function(response) {
      $scope.motoristas = response.data;
    });
  };


  $scope.adicionarMotorista = function (motorista) {
    motoristasAPI.adicionaMotorista(motorista).then(function(response){
      delete $scope.motorista;
      $scope.motoristaForm.$setPristine();
      carregarMotoristas();
    });


  };
  $scope.apagarMotoristas = function(motoristas){
    $scope.motoristas = motoristas.filter(function (motorista){
      if (!motorista.selecionado) return motorista;
    });
  };
  carregarMotoristas();
});
