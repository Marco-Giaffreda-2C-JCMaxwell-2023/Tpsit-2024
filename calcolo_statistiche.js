function calculateWaitingTimes(execTimes) {
    const waitingTimes = [0]; // Il primo processo non attende

    for (let i = 1; i < execTimes.length; i++) {
        // Il tempo di attesa è la somma del tempo di attesa precedente e del tempo di esecuzione precedente
        waitingTimes[i] = waitingTimes[i - 1] + execTimes[i - 1];
    }

    return waitingTimes;
}

// Esempio di utilizzo
const data = [1, 2, 2, 3, 4, 4, 4, 5];
const waitingTimes = calculateWaitingTimes(data);

console.log("Array dei tempi di attesa:", waitingTimes);
// Output: [0, 1, 3, 5, 8, 12, 16, 20]
