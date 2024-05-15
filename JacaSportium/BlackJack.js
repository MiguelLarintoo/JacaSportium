        document.addEventListener('DOMContentLoaded', function() {
            let playerBet = 0;

            function askForBet() {
                let bet = prompt("Ingrese la cantidad que quiere apostar:");
                bet = parseInt(bet, 10);

                while (isNaN(bet) || bet <= 0) {
                    alert("Por favor, ingrese una cantidad válida.");
                    bet = prompt("Ingrese la cantidad que quiere apostar:");
                    bet = parseInt(bet, 10);
                }

                playerBet = bet;
                alert("Ha apostado: " + playerBet);
                // Aquí puedes actualizar la interfaz para mostrar la apuesta
            }

            function pedirCarta() {
                // Lógica para pedir carta
                console.log("Pedir carta");
            }

            function retirarse() {
                // Lógica para retirarse
                console.log("Retirarse");
            }

            function doblarApuesta() {
                // Lógica para doblar la apuesta
                console.log("Doblar apuesta");
            }

            document.getElementById('hacerApuesta').addEventListener('click', askForBet);
            document.getElementById('pedirCarta').addEventListener('click', pedirCarta);
            document.getElementById('retirarse').addEventListener('click', retirarse);
            document.getElementById('doblarApuesta').addEventListener('click', doblarApuesta);
        });
