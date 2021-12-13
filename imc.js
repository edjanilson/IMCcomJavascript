const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const quadril = document.getElementById('quadril').value;

    if (nome !== '' && altura !== '' && peso !== '' && quadril !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        const valorIAC = (quadril / (altura * altura)).toFixed(1);

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} Seu IAC é de ${valorIAC}. Para homens, o ideal é entre 8 a 20 e, para mulheres, de 21 a 32.`;
        
    } else if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} Da próxima vez, informe a circunferência do seu quadril para calcular o IAC.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos. Apenas o campo quadril não é obrigatório!!!';
    }

}

calcular.addEventListener('click', imc);



function limpa() {

document.getElementById("nome").value=" "
document.getElementById("peso").value=" "
document.getElementById("altura").value=" "
document.getElementById("quadril").value=" "
resultado.textContent=" ";

}



