const calcModule = (price = 100) => {

    const calcInputs = document.querySelectorAll('input.calc-item');
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.querySelector('#total');

    total.textContent = `${0} руб.`

    calcInputs.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d]/g, '');
        });
    });


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;

        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = Math.ceil(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
        } else {
            totalValue = 0;
        }

        total.textContent = `${totalValue} руб.`;

        if (calcTypeValue === 0) {
            calcSquare.value = '';
            calcCount.value = '';
            calcDay.value = '';
        }
    };

    calcBlock.addEventListener('input', (e) => {
        countCalc();
    });

};

export default calcModule;