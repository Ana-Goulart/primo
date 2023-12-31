
function primo() {
            var n = parseInt(document.getElementById('num').value);

            // Verificar se o número é menor que 2 (1 e números negativos não são primos)
            if (n < 2) {
                alert("Não é primo");
                return false;
            }

            // Verificar se o número é igual a 2 (único número primo par)
            if (n == 2 || n == 1) {
                alert("Número primo");
                return true;
            }

            // Verificar se o número é par (exceto o número 2, que já foi verificado acima)
            if (n % 2 === 0) {
                alert("Não é primo");
                return false;
            }

            // Verificar se o número é divisível por algum número ímpar a partir de 3 até a sua raiz quadrada
            for (let i = 3; i * i <= n; i += 2) {
                if (n % i === 0) { //ele vai fazendo o loop ate algum número resultat em 0
                    alert("Não é primo");
                    return false;
                }
            }

            alert("Número primo");
            return true;
        }
