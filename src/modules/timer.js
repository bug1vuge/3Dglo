const timerModule = (deadline) => {

    //1) Получаем элементы
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        //2) Находим разницу между дедлайном и текущим временнем
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000; //кол-во секунд до дедлайна

        //3)Делим timeRemaining на часы, минуты, секунды
        let hours = Math.floor((timeRemaining / 60) / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        }
    };

    const addZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num
        }
    };

    const updateTimer = () => {
        let timerData = getTimeRemaining();

        //4) Записываем в спаны
        timerHours.textContent = addZero(timerData.hours);
        timerMinutes.textContent = addZero(timerData.minutes);
        timerSeconds.textContent = addZero(timerData.seconds);

        let isTimerUpdate = setInterval(updateTimer, 1000);

        if (timerData.timeRemaining < 0) {
            clearInterval(isTimerUpdate);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    };

    updateTimer();
};

export default timerModule;
