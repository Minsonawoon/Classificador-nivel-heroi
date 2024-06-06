const prompt = require('prompt-sync')();

// Declarando variáveis
let nomeHeroi = prompt("Digite o nome do seu herói: ");  // Solicita o nome do herói
let xpHeroi = parseInt(prompt("Digite a quantidade de experiência do seu herói: "));  // Solicita a quantidade de XP e converte para inteiro
let nivel = "";  // Variável para armazenar o nível

// Estrutura de decisão
if (xpHeroi <= 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir a mensagem final
console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);



