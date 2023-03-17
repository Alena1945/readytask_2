// Цветные часы с использованием setInterval
// важность: 4
// Создайте цветные часы как в примере ниже:


// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

let timerIntervalForClean;

const startTime = () => {
    timerIntervalForClean = setInterval(() => {
        let myDate = new Date();
        const h = myDate.getHours();
        const m = myDate.getMinutes();
        const s = myDate.getSeconds();
        
        h < 10 ? (hours.innerHTML = `0${h}`) : (hours.innerHTML = h);
        m < 10 ? (minuts.innerHTML = `0${m}`) : (minuts.innerHTML = m);
        s < 10 ? (seconds.innerHTML = `0${s}`) : (seconds.innerHTML = s);
        }, 1000);
};

const stopTimer = () => {
    let myDate = new Date();
    const h = myDate.getHours();
    const m = myDate.getMinutes();
    const s = myDate.getSeconds();

    h < 10 ? (hours.innerHTML = `0${h}`) : (hours.innerHTML = h);
    m < 10 ? (minuts.innerHTML = `0${m}`) : (minuts.innerHTML = m);
    s < 10 ? (seconds.innerHTML = `0${s}`) : (seconds.innerHTML = s);
    clearInterval(timerIntervalForClean);
    timerIntervalForClean = null;
};