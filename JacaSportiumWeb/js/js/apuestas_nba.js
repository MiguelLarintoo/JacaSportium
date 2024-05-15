document.addEventListener('DOMContentLoaded', () => {
    const bettingButtons = document.querySelectorAll('.betting-options button');
    const modal = document.getElementById('betModal');
    const closeModal = document.getElementById('closeModal');
    const calculateButton = document.getElementById('calculateButton');
    const betAmountInput = document.getElementById('betAmount');
    const resultDiv = document.getElementById('result');
    const bettingOption = document.getElementById('bettingOption');

    // Abre el modal al hacer clic en cualquier botón de apuesta
    bettingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            bettingOption.textContent = `Apuesta en ${buttonText}`;
            modal.style.display = 'block';
        });
    });

    // Cierra el modal cuando se hace clic en el botón de cierre
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Calcula la ganancia basada en la apuesta y las probabilidades
    calculateButton.addEventListener('click', () => {
        const betAmount = parseFloat(betAmountInput.value);
        const oddsText = bettingOption.textContent.split(' - ')[1];
        const odds = parseFloat(oddsText);

        if (isNaN(betAmount) || betAmount <= 0) {
            resultDiv.textContent = "Por favor, ingrese un monto válido.";
        } else {
            const winnings = betAmount * odds;
            resultDiv.textContent = `Si apuesta $${betAmount.toFixed(2)}, ganará $${winnings.toFixed(2)}.`;
        }
    });
});

