angular.module("CadastroDeCorridas").controller("CadastroDePassageirosController", function ($scope,passageirosAPI) {
  $scope.nomeModulo = "Passageiros Cadastrados";
  $scope.passageiros = [];

  $scope.sexos = [ {tipo: "MASCULINO"},{tipo: "FEMININO"}];


  var carregarPassageiros = function(){
    passageirosAPI.getPassageiros().then(function(response){
      $scope.passageiros = response.data;
    });
  };


  $scope.adicionarPassageiro = function (passageiro) {
    passageirosAPI.adicionaPassageiro(passageiro).then(function(response){
      delete $scope.passageiro;
      $scope.passageiroForm.$setPristine();
      carregarPassageiros();
    });


  };
  $scope.apagarPassageiros = function(passageiros){
    $scope.passageiros = passageiros.filter(function (passageiro){
      if (!passageiro.selecionado) return passageiro;
    });
  };
  carregarPassageiros();
});
