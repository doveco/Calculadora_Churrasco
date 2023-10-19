document.getElementById("calculando").addEventListener("click", calcular);

    function calcular() {
        console.log("Calculando...");
        var quantidadePessoas = parseInt(document.getElementById("pessoas").value);
        var quantidadeGramas = parseInt(document.getElementById("gramas").value);
        var tipoCarne = document.getElementById("carne").value;
        var precoCarne = parseFloat(document.getElementById("preco").value);

        if (quantidadePessoas && quantidadeGramas && tipoCarne && precoCarne) {
            var totalCarne = (quantidadePessoas * quantidadeGramas) / 1000;
            var precoTotal = (totalCarne * precoCarne).toFixed(2);
            var precoPessoa = (precoTotal / quantidadePessoas).toFixed(2);

            if (quantidadePessoas > 10) {
                precoTotal *= 1.1;
            }

           document.getElementById("resultado").innerHTML = `O total de Carne para ${quantidadePessoas} pessoas é 
           de ${totalCarne} Kg e o valor total é R$${precoTotal} ficando R$${precoPessoa} por pessoa.`;

        } else {
            alert("Preencha todos os campos antes de calcular!");
        }
    }
    

