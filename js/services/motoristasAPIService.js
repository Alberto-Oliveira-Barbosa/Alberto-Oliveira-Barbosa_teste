angular.module("CadastroDeCorridas").factory("motoristasAPI", function ($http, config){
  var _getMotoristas = function(){
    return $http.get(config.urlBase + '/motoristas');
  };

  var _adicionaMotorista = function(motorista){
    return $http.post(config.urlBase + "/motoristas", motorista)
  };
  return{
    getMotoristas: _getMotoristas,
    adicionaMotorista: _adicionaMotorista
  };
});
