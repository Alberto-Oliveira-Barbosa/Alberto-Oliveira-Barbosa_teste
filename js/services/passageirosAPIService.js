angular.module("CadastroDeCorridas").factory("passageirosAPI", function($http, config){
  var _getPassageiros = function(){
    return $http.get(config.urlBase + "/passageiros")
  };

  var _adicionaPassageiro = function(passageiro){
    return $http.post(config.urlBase + "/passageiros", passageiro)
  };
  return{
    getPassageiros: _getPassageiros,
    adicionaPassageiro: _adicionaPassageiro
  }
});
