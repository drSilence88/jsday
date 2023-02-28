//1.- Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) YYY-MM-DD HH:mm eg. 2012-01-02 07:05
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours() - 1;
let minute = date.getMinutes() - 45;

if (hour >= 0 && hour < 10) {
    hour = "0" + hour;
}
if (minute >= 0 && minute < 10) {
    minute = "0" + minute;
}

console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);