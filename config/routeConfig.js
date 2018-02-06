angular.module("CadastroDeCorridas").config(function ($routeProvider) {
	$routeProvider.when("/home", {
    templateUrl: "view/home.html"
  });

  $routeProvider.when("/motoristas", {
    templateUrl: "view/motoristas.html",
    controller: "CadastroDeMotoristasController"
  });

  $routeProvider.when("/passageiros", {
    templateUrl: "view/passageiros.html",
    controller: "CadastroDePassageirosController"
  });

  $routeProvider.when("/corridas", {
    templateUrl: "view/corridas.html",
    controller: "CadastroDeCorridasController"
  });

  $routeProvider.otherwise({redirectTo: "/home"})

});
