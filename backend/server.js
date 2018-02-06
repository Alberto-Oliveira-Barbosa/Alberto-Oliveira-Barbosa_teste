  var motoristas = [
    {nome: 'Carlos', data: '10/01/1980', cpf: 12345678910,sexo:{tipo: 'MASCULINO'}, carro: 'Astra', situacao: {nome  : 'ATIVO'}},
    {nome: 'Antonio', data: '01/02/1985', cpf: 12345678910,sexo:{tipo: 'MASCULINO'}, carro: 'Palio', situacao: {nome: 'ATIVO'}},
    {nome: 'João', data: '11/01/1982', cpf: 12345678910,sexo:{tipo: 'MASCULINO'}, carro: 'Fusion', situacao: {nome: 'ATIVO'}},
    {nome: 'Henrique', data: '23/01/1990', cpf: 12345678910,sexo:{tipo: 'MASCULINO'}, carro: 'Gol', situacao: {nome: 'INATIVO'}},
    {nome: 'Patricia', data: '15/03/1991', cpf: 12345678910, sexo:{tipo: 'FEMININO'}, carro: 'Astra', situacao: {nome: 'INATIVO'}},
    {nome: 'Suelen', data: '10/01/1997', cpf: 12345678910, sexo:{tipo: 'FEMININO'}, carro: 'Astra', situacao: {nome: 'ATIVO'}}
  ];

  var passageiros = [
    {nome: 'Marcos', data: '29/01/1978', cpf: 12345678910, sexo:{tipo: 'MASCULINO'}},
    {nome: 'Maria', data: '02/05/1999', cpf: 12345678910, sexo:{tipo: 'FEMININO'}},
    {nome: 'Carlos', data: '19/09/2000', cpf: 12345678910, sexo:{tipo: 'MASCULINO'}},
    {nome: 'Priscila', data: '10/01/1996', cpf: 12345678910, sexo:{tipo: 'FEMININO'}},
    {nome: 'Ariel', data: '07/04/1998', cpf: 12345678910, sexo:{tipo: 'FEMININO'}}
  ];

  var corridas = [
    {motorista:{nome: "Carlos"}, passageiro:{nome: 'Maria'}, valor:56},
    {motorista:{nome: "Carlos"}, passageiro:{nome: 'Ariel'}, valor:80}
  ];

  app.interceptor(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
  });

  app.interceptor(function(req, res, next){
    res.setHeader('Content-Type','application/json;charset=UTF-8');
    next();
  });

  app.get('/motoristas',function(req, res){
    res.write(JSON.stringify(motoristas));
    res.end();
  });

  app.get('/passageiros', function(req, res){
    res.write(JSON.stringify(passageiros));
    res.end();
  });

  app.get('/corridas', function(req, res){
    res.write(JSON.stringify(corridas));
    res.end();
  });

  app.post('/motoristas',function(req, res){
    var motorista = req.body;
    motoristas.push(JSON.parse(motorista));
    res.end();
  });

  app.post('/passageiros',function(req, res){
    var passageiro = req.body;
    passageiros.push(JSON.parse(passageiro));
    res.end();
  });

  app.post('/corridas',function(req, res){
    var corrida = req.body;
    corridas.push(JSON.parse(corrida));
    res.end();
  });

  app.options('/motoristas', function(req, res){
    res.end();
  });

  app.options('/passageiros', function(req, res){
    res.end();
  });

  app.options('/corridas', function(req, res){
    res.end();
  });
