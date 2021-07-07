const { Router, request } = require("express");
const { validate } = require("../Validators/validators");
const { ValidationRules } = require("../validators/ValidationRules");
const Service = require("../services/service");

const routes = Router();

routes.post("/",  ValidationRules(), validate, (request, response) => {
  const {NOME, CINTURA, QUADRIL, SEXO} = request.body;
  const pessoa = {NOME, CINTURA, QUADRIL, SEXO};
  
  const retornoCalculo = Service.calcular(PESSOA);
  
  return response.status(200).json({ retornoCalculo });
});

module.exports = routes;