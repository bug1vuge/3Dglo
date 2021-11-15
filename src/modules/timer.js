const timerModule = (deadline) => {

    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    let isTimerUpdate;

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

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

        timerHours.textContent = addZero(timerData.hours);
        timerMinutes.textContent = addZero(timerData.minutes);
        timerSeconds.textContent = addZero(timerData.seconds);

        if (timerData.timeRemaining < 0) {
            clearInterval(isTimerUpdate);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };

    isTimerUpdate = setInterval(updateTimer, 1000);
};

export default timerModule;
