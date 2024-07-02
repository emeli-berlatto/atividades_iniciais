function updateClock() {
    let currentTime =  new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = formaTime(hours);
    minutes = formaTime(minutes);
    seconds = formaTime(seconds);

    document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds}`;

}

function formaTime(time){

    return time < 10 ? `0${time}` : time;

}

updateClock();

 setInterval(updateClock,1000);