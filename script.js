
const calcular=document.querySelector('.calcular');

function CalculoIMC(){
    const nome=document.querySelector('.nome').value;
    const altura=document.querySelector('.altura').value;
    const peso=document.querySelector('.peso').value;
    const resultado=document.querySelector('.resultado');

    const IMC=(peso/(altura* altura).toFixed(1))

    if(IMC<18.5){
        resultado.textContent='$(nome)você está abaixo do seu peso: seu imc $(IMC)';
    }

    else if (IMC<25){
        resultado.textContent='$(nome)você não está no seu peso ideal: seu imc $(IMC)';
    }

    else if (IMC<30){
        resultado.textContent='$(nome)você está acima do seu peso ideal:seu imc $(IMC)';
    }

    else if (imc<35){
        resultado.textContent='$(nome)você está com obesidade grau I: seu imc $(IMC)';
    }

    else if (imc<40){
        resultado.textContent='$(nome)você está com obesidade grau II: seu imc $(IMC)';
    }
    else {
        resultado.textContent='$(nome)você está com obesidade grau II: seu imc $(IMC)';
    }



    
    

}

calcular.addEventListener('click',calcularIMC)



