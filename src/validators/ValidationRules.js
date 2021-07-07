const { body } = require("express-validator");

const ValidationRules = () => {
  return [
    body("NOME").notEmpty().withMessage("Nome não preenchido."),
    body("CINTURA").not().isIn([0]).withMessage("O tamanho da cintura não pode ser zero."),
    body("QUADRIL").not().isIn([0]).withMessage("O tamanho do quadril não pode ser zero."),
    body("SEXO").isIn(['F', 'f', 'M', 'm']).withMessage("Opção inválida em sexo."),
  ];
};

module.exports = {
  ValidationRules,
};
