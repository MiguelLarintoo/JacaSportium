const slots = document.querySelectorAll('.slot');
const spinButton = document.getElementById('spin');
const balanceDisplay = document.getElementById('balance');
let balance = 100; // Saldo inicial establecido en 100

function spin() {
    let wins = 0;
    slots.forEach(slot => {
        const fruit = ['Limón', 'Naranja', 'Plátano', 'Sandía', 'Cereza', 'Estrella','7'];
        const randomFruit = fruit[Math.floor(Math.random() * fruit.length)];
        slot.textContent = randomFruit;
        if (randomFruit === 'Estrella') {
            wins++;
        }
    });

    if (wins === 3) {
        balance += 2 * balance;
    } else if (wins === 2) {
        balance += 1 * balance;
    } else if (wins === 1) {
        balance += 0.5 * balance;
    } else {
        balance -= balance;
    }

    balanceDisplay.textContent = `Saldo: ${balance}`;
}

spinButton.addEventListener('click', spin);

