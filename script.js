function converterRomano() {
    const romano = document.getElementById("romano").value.toUpperCase();

    const valores = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        let atual = valores[romano[i]];
        let proximo = valores[romano[i + 1]];

        if (atual === undefined) {
            document.getElementById("resultado").innerText =
                "Digite um número romano válido!";
            return;
        }

        if (proximo > atual) {
            total -= atual;
        } else {
            total += atual;
        }
    }

    document.getElementById("resultado").innerText =
        "Número decimal: " + total;
}