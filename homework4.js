function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let percent;

    if (odd === 0) {
        percent = 0;
    } else {
        percent = (even / odd) * 100;
    }

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", even);
    console.log("Непарних чисел:", odd);
    console.log("Відсоток парних до непарних:", percent.toFixed(2) + "%");
}

checkProbabilityTheory(1000);