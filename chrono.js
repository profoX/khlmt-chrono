var sec = 0;
var timerId = undefined;
var addSec = function() {
    ++sec;
    $("#viewCount").html(sec);
}

$(document).ready(function() {
	$("#btnStart").click(function() {
	    sec = 0;
        if (timerId !== undefined) {
		    clearInterval(timerId);
		}
		timerId = setInterval(addSec, 1000);
		$("#viewCount").html(sec);
	});
	$("#btnContinue").click(function() {
	    if (timerId === undefined) {
		    timerId = setInterval(addSec, 1000);
	    }
	});
	$("#btnPause").click(function() {
	    if (timerId !== undefined) {
		    clearInterval(timerId);
		    timerId = undefined;
		}
	});
});

function startTimer() {
    timerId = setInterval(addSec, 1000);
}
