var inc = 1000;


var target_date = new Date("06/20/2020"); // set the countdown date
var days, hours, minutes, seconds; // variables for time units
var countdown = document.getElementById("tiles"); // get tag element
getCountdown();
setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}
