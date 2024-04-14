//Declarando Nome e Xp do campeão
let nomeDoCampeao = "MatLemes"
let xpAtualDoCampeao = 100000;
let nivelDoCampeao;


if (xpAtualDoCampeao <= 1000) {
    nivelDoCampeao = "Ferro";
}

else if  (xpAtualDoCampeao <= 2000) {
    nivelDoCampeao = "Bronze";
}

else if (xpAtualDoCampeao <= 3000) {
    nivelDoCampeao = "Prata";
}

else if (xpAtualDoCampeao <= 600000){
    nivelDoCampeao = "Ouro";
}

else if (xpAtualDoCampeao <= 15000) {
    nivelDoCampeao = "Platina";
    
}

else  
{nivelDoCampeao = "Diamante";}



console.log("O campeão " + nomeDoCampeao + " está na liga " + nivelDoCampeao );











