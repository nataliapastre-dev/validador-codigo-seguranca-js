const codigo = String(gets());

let temMaiuscula = false;
let temDigito = false;

for (const caractere of codigo) {
    if (caractere >= 'A' && caractere <= 'Z') {
        temMaiuscula = true;
    }

    if (caractere >= '0' && caractere <= '9') {
        temDigito = true;
    }

    if (temMaiuscula && temDigito) {
        break;
    }
}

const tamanhoMinimo = codigo.length >= 6;
const resultado = (tamanhoMinimo && temMaiuscula && temDigito) ? 'seguro' : 'inseguro';

print(resultado);