let inputAdultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;
    
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)}Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)}Garrafas de Bebidas</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}