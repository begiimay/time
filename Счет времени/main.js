const currentYear = new Date().getFullYear();

const nextYear = new Date(`1 January ${currentYear + 1} 00:00:00`);

const nextYearJuly = new Date(`7 july ${currentYear + 1} 00:00:00`);

function realTime(){
    let time = new Date();
    let getYear = time.getFullYear();
    let getMonth = time.getMonth();
    let getHours = time.getHours();
    let getMinutes = time.getMinutes();
    let getSeconds = time.getSeconds();
    document.getElementById('year').innerHTML = getYear;
    document.getElementById('month').innerHTML = getMonth < 10 ? '0' +getMonth :  getMonth ;
    document.getElementById('hour').innerHTML = getHours < 10 ? '0' +getHours: getHours;
    document.getElementById('minute').innerHTML = getMinutes < 10 ? '0' +getMinutes: getMinutes;
    document.getElementById('second').innerHTML = getSeconds < 10 ? '0' +getSeconds : getSeconds;
}
realTime();
setInterval(() => {
    realTime()
} ,1000);

function updateCounter(){
    let currentTime = new Date();

    let diff =  nextYear - currentTime;
     
    const daysleft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursleft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesleft = Math.floor(diff / 1000 / 60 )% 24;
    const secondsleft = Math.floor(diff / 1000) % 60;


    document.getElementById('days').innerHTML = daysleft;
    document.getElementById('hours').innerHTML = hoursleft < 10 ? '0' +hoursleft : hoursleft;
    document.getElementById('minutes').innerHTML = minutesleft < 10 ? '0' +minutesleft : minutesleft;
    document.getElementById('seconds').innerHTML = secondsleft < 10 ? '0'+ secondsleft : secondsleft;
    
}

updateCounter();
setInterval(() => {
    updateCounter()
} ,1000);

function nextYear2(){ 
    let currentYear = new Date(); 
    let diff2 =  nextYearJuly - currentYear ; 
 
    const daysleft2 = Math.floor(diff2 / 1000 / 60 / 60 / 24); 
    const hoursleft2 = Math.floor(diff2 / 1000 / 60 / 60) % 24; 
    const minutesleft2 = Math.floor(diff2 / 1000 / 60 ) % 24; 
    const secondsleft2 =  Math.floor(diff2 / 1000) % 60; 
 
    document.getElementById('nextDay').innerHTML = daysleft2; 
    document.getElementById('nextHour').innerHTML = hoursleft2 < 10 ? '0' +hoursleft2 : hoursleft2 ; 
    document.getElementById('nextMinute').innerHTML = minutesleft2 < 10 ? '0' +minutesleft2 : minutesleft2; 
    document.getElementById('nextSecond').innerHTML = secondsleft2 < 10 ? '0' +secondsleft2 : secondsleft2; 
 
} 
 
nextYear2(); 
setInterval(() => { 
    nextYear2(); 
})
















