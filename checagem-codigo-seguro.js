const codigo = String(gets() || "");

let acessoLiberado = true;

if (codigo.length !== 8) {
    acessoLiberado = false;
}

if (acessoLiberado && codigo[0] !== "S") {
    acessoLiberado = false;
}

if (acessoLiberado && codigo[codigo.length - 1] !== "X") {
    acessoLiberado = false;
}

let quantidadeDigitos = 0;

for (let i = 1; i < codigo.length - 1; i++) {
    const caractere = codigo[i];

    if (caractere >= "0" && caractere <= "9") {
        quantidadeDigitos++;
    }
}

if (quantidadeDigitos !== 3) {
    acessoLiberado = false;
}

print(acessoLiberado ? "ACESSO LIBERADO" : "ACESSO NEGADO");