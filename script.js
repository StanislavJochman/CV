// *************************************************************************** COMP ACH NAV **********************************
var numOfMod = 12;
var numOfTl = 3;
var numOfInfComp = 2;
var numOfRobComp = 5;
var numOfInfProj = 4;
var numOfRobProj = 3;

$('.compNavBtn').eq(0).css("background-color", "#0c1d24")
$('.compNavBtn').eq(0).css("color", "#e4e3f5")

$('.projNavBtn').eq(0).css("background-color", "#e4e3f5")
$('.projNavBtn').eq(0).css("color", "#0c1d24")

for (i = 1; i < numOfTl; i++) {
    $('.compNavBtn').eq(i).css("background-color", "transparent")
    $('.compNavBtn').eq(i).css("color", "#0c1d24")
	
    $('.projNavBtn').eq(i).css("background-color", "transparent")
    $('.projNavBtn').eq(i).css("color", "#e4e3f5")
}

function open_all_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('hidden');
        $('.infcomp').eq(i).addClass('shown');
    }
    
    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('hidden');
        $('.robcomp').eq(i).addClass('shown');
    }

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent")
        $('.compNavBtn').eq(i).css("color", "#0c1d24")
    }
    
    $('.compNavBtn').eq(0).css("background-color", "#0c1d24")
    $('.compNavBtn').eq(0).css("color", "#e4e3f5")
}

function open_rob_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('shown');
        $('.infcomp').eq(i).addClass('hidden');
    }
    
    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('hidden');
        $('.robcomp').eq(i).addClass('shown');
    }

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent")
        $('.compNavBtn').eq(i).css("color", "#0c1d24")
    }
    
    $('.compNavBtn').eq(2).css("background-color", "#0c1d24")
    $('.compNavBtn').eq(2).css("color", "#e4e3f5")
}

function open_inf_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('hidden');
        $('.infcomp').eq(i).addClass('shown');
    }
    
    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('shown');
        $('.robcomp').eq(i).addClass('hidden');
    }

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent")
        $('.compNavBtn').eq(i).css("color", "#0c1d24")
    }
    
    $('.compNavBtn').eq(1).css("background-color", "#0c1d24")
    $('.compNavBtn').eq(1).css("color", "#e4e3f5")
}

function open_all_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('hidden');
        $('.infproj').eq(i).addClass('shown');
    }
    
    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('hidden');
        $('.robproj').eq(i).addClass('shown');
    }
    
    $('.projNavBtn').eq(0).css("background-color", "#e4e3f5")
    $('.projNavBtn').eq(0).css("color", "#0c1d24")

    for (i = 1; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent")
        $('.projNavBtn').eq(i).css("color", "#e4e3f5")
    }
}

function open_rob_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('shown');
        $('.infproj').eq(i).addClass('hidden');
    }
    
    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('hidden');
        $('.robproj').eq(i).addClass('shown');
    }

    for (i = 0; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent")
        $('.projNavBtn').eq(i).css("color", "#e4e3f5")
    }
    
    $('.projNavBtn').eq(2).css("background-color", "#e4e3f5")
    $('.projNavBtn').eq(2).css("color", "#0c1d24")
}

function open_inf_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('hidden');
        $('.infproj').eq(i).addClass('shown');
    }
    
    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('shown');
        $('.robproj').eq(i).addClass('hidden');
    }

    for (i = 0; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent")
        $('.projNavBtn').eq(i).css("color", "#e4e3f5")
    }
    
    $('.projNavBtn').eq(1).css("background-color", "#e4e3f5")
    $('.projNavBtn').eq(1).css("color", "#0c1d24")
}

// *************************************************************************** ABOUT NAV **********************************

$('.aboutNavBtn').eq(0).css("background-color", "#0c1d24")
$('.aboutNavBtn').eq(0).css("color", "#e4e3f5")

for (i = 1; i < numOfTl; i++) {
	$('.tldiv').eq(i).addClass('hidden');
    $('.aboutNavBtn').eq(i).css("background-color", "transparent")
    $('.aboutNavBtn').eq(i).css("color", "#0c1d24")
}

function open_tl(num) {

    for (i = 0; i < numOfTl; i++) {
        $('.tldiv').eq(i).addClass('hidden');
        $('.aboutNavBtn').eq(i).css("background-color", "transparent")
        $('.aboutNavBtn').eq(i).css("color", "#0c1d24")
    }

    $('.tldiv').eq(num).removeClass('hidden');
    $('.tldiv').eq(num).addClass('shown');
    $('.aboutNavBtn').eq(num).css("background-color", "#0c1d24")
    $('.aboutNavBtn').eq(num).css("color", "#e4e3f5")

}

// *************************************************************************** SKILLS **********************************

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