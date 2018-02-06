angular.module("CadastroDeCorridas").factory("corridasAPI", function ($http, config){
  var _getMotoristas = function(){
    return $http.get(config.urlBase + '/corridas');
  };

  var _adicionaCorrida = function(corrida){
    return $http.post(config.urlBase + "/corridas", corrida)
  };
  return{
    getCorridas: _getCorridas,
    adicionaCorrida: _adicionaCorrida
  };
});
