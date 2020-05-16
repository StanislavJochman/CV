// ********************************************************************************* TIMELINES ***************************************************************

var numOfTl = 3;

$('.aboutNavBtn').eq(0).css("background-color", "#0c1d24")

for (i = 1; i < numOfTl; i++) {
	$('.tldiv').eq(i).addClass('hidden');
    $('.aboutNavBtn').eq(i).css("background-color", "transparent")
    $('.aboutNavBtn').eq(i).css("color", "#e4e3f5")
}

function open_tl(num) {

    for (i = 0; i < numOfTl; i++) {
        $('.tldiv').eq(i).addClass('hidden');
        $('.aboutNavBtn').eq(i).css("background-color", "transparent")
        $('.aboutNavBtn').eq(i).css("color", "#e4e3f5")
    }

    $('.tldiv').eq(num).removeClass('hidden');
    $('.tldiv').eq(num).addClass('shown');
    $('.aboutNavBtn').eq(num).css("background-color", "#0c1d24")
}

// ********************************************************************************* COMPETITIONS ************************************************************

var numOfComp = 7;
var numOfRob = 5;
var numOfInf = 2;

$('.compNavBtn').eq(0).css("background-color", "#0c1d24")

for (i = 1; i < 3; i++) {
    $('.compNavBtn').eq(i).css("background-color", "transparent")
    $('.compNavBtn').eq(i).css("color", "#e4e3f5")
}

function open_all_comp() {
    for (i = 0; i < numOfComp; i++) {
        $('.comp').eq(i).removeClass('hidden');
        $('.comp').eq(i).addClass('shown');
    }
    $('.compNavBtn').eq(0).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(1).css("background-color", "transparent");
    $('.compNavBtn').eq(2).css("background-color", "transparent");
}

function open_inf_comp() {

    for (i = 0; i < numOfInf; i++) {
        $('.inf').eq(i).removeClass('hidden');
        $('.inf').eq(i).addClass('shown');
    }

    $('.compNavBtn').eq(1).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(2).css("background-color", "transparent");
    $('.compNavBtn').eq(0).css("background-color", "transparent");
}

function open_rob_comp() {

    for (i = 0; i < numOfRob; i++) {
        $('.rob').eq(i).removeClass('hidden');
        $('.rob').eq(i).addClass('shown');
    }
    
    $('.compNavBtn').eq(2).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(1).css("background-color", "transparent");
    $('.compNavBtn').eq(0).css("background-color", "transparent");
}

open_all_comp();

// ********************************************************************************* SKILLS *******************************************************************

var listOfSkills = ['.html', '.css', '.js', '.python', '.arduino', '.ne']
var skillPerc = [80, 80, 70, 80, 60, 95]

for (i = 0; i < 6; i++) {
    var circle = document.querySelector(listOfSkills[i]);
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    var offset = circumference - skillPerc[i] / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}