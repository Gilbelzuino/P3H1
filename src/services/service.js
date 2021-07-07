module.exports.calcular = (PESSOA) => {
    let NOME, VALOR, CLASSIFICACAO;

    VALOR = PESSOA.CINTURA / PESSOA.QUADRIL;
    NOME = PESSOA.NOME;

    if(PESSOA.SEXO == "F" || PESSOA.SEXO == "f"){
        if(VALOR <= 0.80){
            CLASSIFICACAO = "Baixo";
        }
        else if(VALOR >= 0.81 && VALOR <= 0.85){
            CLASSIFICACAO = "Moderado";
        }
        else{
            CLASSIFICACAO = "Alto";
        }
    }
    else{
        if(VALOR <= 0.95){
            CLASSIFICACAO = "Baixo";
        }
        else if(VALOR >= 0.96 && VALOR <= 1.0){
            CLASSIFICACAO = "Moderado";
        }
        else{
            CLASSIFICACAO = "Alto";
        }
    }

    let retorno = {
        NOME: NOME,
        VALOR: VALOR,
        CLASSIFICACAO: CLASSIFICACAO
    }
    return retorno
};