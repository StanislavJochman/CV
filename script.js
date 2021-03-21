// *************************************************************************** COMP ACH NAV **********************************
var numOfMod = 12;
var numOfTl = 3;
var numOfInfComp = 2;
var numOfRobComp = 5;
var numOfInfProj = 4;
var numOfRobProj = 3;

$('.compNavBtn').eq(0).css("background-color", "#0c1d24");
$('.compNavBtn').eq(0).css("color", "#e4e3f5");

$('.projNavBtn').eq(0).css("background-color", "#e4e3f5");
$('.projNavBtn').eq(0).css("color", "#0c1d24");

for (i = 1; i < numOfTl; i++) {
    $('.compNavBtn').eq(i).css("background-color", "transparent");
    $('.compNavBtn').eq(i).css("color", "#0c1d24");

    $('.projNavBtn').eq(i).css("background-color", "transparent");
    $('.projNavBtn').eq(i).css("color", "#e4e3f5");
};

function open_all_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('hidden');
        $('.infcomp').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('hidden');
        $('.robcomp').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent");
        $('.compNavBtn').eq(i).css("color", "#0c1d24");
    };

    $('.compNavBtn').eq(0).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(0).css("color", "#e4e3f5");
};

function open_rob_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('shown');
        $('.infcomp').eq(i).addClass('hidden');
    };

    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('hidden');
        $('.robcomp').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent");
        $('.compNavBtn').eq(i).css("color", "#0c1d24");
    };

    $('.compNavBtn').eq(2).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(2).css("color", "#e4e3f5");
};

function open_inf_comp() {
    for (i = 0; i < numOfInfComp; i++) {
        $('.infcomp').eq(i).removeClass('hidden');
        $('.infcomp').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfRobComp; i++) {
        $('.robcomp').eq(i).removeClass('shown');
        $('.robcomp').eq(i).addClass('hidden');
    };

    for (i = 0; i < numOfTl; i++) {
        $('.compNavBtn').eq(i).css("background-color", "transparent");
        $('.compNavBtn').eq(i).css("color", "#0c1d24");
    };

    $('.compNavBtn').eq(1).css("background-color", "#0c1d24");
    $('.compNavBtn').eq(1).css("color", "#e4e3f5");
};

function open_all_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('hidden');
        $('.infproj').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('hidden');
        $('.robproj').eq(i).addClass('shown');
    };

    for (i = 1; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent");
        $('.projNavBtn').eq(i).css("color", "#e4e3f5");
    };

    $('.projNavBtn').eq(0).css("background-color", "#e4e3f5");
    $('.projNavBtn').eq(0).css("color", "#0c1d24");
};

function open_rob_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('shown');
        $('.infproj').eq(i).addClass('hidden');
    };

    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('hidden');
        $('.robproj').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent");
        $('.projNavBtn').eq(i).css("color", "#e4e3f5");
    };

    $('.projNavBtn').eq(2).css("background-color", "#e4e3f5");
    $('.projNavBtn').eq(2).css("color", "#0c1d24");
};

function open_inf_proj() {
    for (i = 0; i < numOfInfProj; i++) {
        $('.infproj').eq(i).removeClass('hidden');
        $('.infproj').eq(i).addClass('shown');
    };

    for (i = 0; i < numOfRobProj; i++) {
        $('.robproj').eq(i).removeClass('shown');
        $('.robproj').eq(i).addClass('hidden');
    };

    for (i = 0; i < numOfTl; i++) {
        $('.projNavBtn').eq(i).css("background-color", "transparent");
        $('.projNavBtn').eq(i).css("color", "#e4e3f5");
    };

    $('.projNavBtn').eq(1).css("background-color", "#e4e3f5");
    $('.projNavBtn').eq(1).css("color", "#0c1d24");
};

// *************************************************************************** ABOUT NAV **********************************

$('.aboutNavBtn').eq(0).css("background-color", "#0c1d24");
$('.aboutNavBtn').eq(0).css("color", "#e4e3f5");

for (i = 1; i < numOfTl; i++) {
    $('.tldiv').eq(i).addClass('hidden');
    $('.aboutNavBtn').eq(i).css("background-color", "transparent");
    $('.aboutNavBtn').eq(i).css("color", "#0c1d24");
};

function open_tl(num) {

    for (i = 0; i < numOfTl; i++) {
        $('.tldiv').eq(i).addClass('hidden');
        $('.aboutNavBtn').eq(i).css("background-color", "transparent");
        $('.aboutNavBtn').eq(i).css("color", "#0c1d24");
    };

    $('.tldiv').eq(num).removeClass('hidden');
    $('.tldiv').eq(num).addClass('shown');
    $('.aboutNavBtn').eq(num).css("background-color", "#0c1d24");
    $('.aboutNavBtn').eq(num).css("color", "#e4e3f5");

};

// *************************************************************************** SKILLS **********************************

var listOfSkills = ['.html', '.css', '.js', '.python', '.arduino', '.ne', '.cs'];
var skillPerc = [75, 70, 75, 85, 40, 100, 40];
var numOfScircles = listOfSkills.length;
var browserW = $(window).width();
var gradientStart = '#8cc2d9';
var gradientEnd = '#0d1f26';

for (i = 0; i < numOfScircles; i++) {
    $(listOfSkills[i]).css('width', `${skillPerc[i]}%`);

    var skillId = listOfSkills[i].replace(".", "") + "-perc";
    document.getElementById(skillId).innerHTML = skillPerc[i] + "%";

    if (skillPerc[i] < 25)
        gradientEnd = '#53a3c6';
    else if (skillPerc[i] < 50)
        gradientEnd = '#337a99';
    else if (skillPerc[i] < 75)
        gradientEnd = '#204d60';
    else
        gradientEnd = '#0d1f26';

    $(listOfSkills[i]).css('background-image', `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`);
};

// *************************************************************************** SCROLL **********************************

$(document).ready(function() {
    $('.container').click(function() {
        $('body').css('overflow', 'hidden');
        $('.modal-content').css('overflow-y', 'auto');
    });
    $('.close_m').click(function() {
        $('body').css('overflow', 'auto');
        $('.modal-content').css('overflow-y', 'hidden');
    });
    $('.close_m_b').click(function() {
        $('body').css('overflow', 'auto');
        $('.modal-content').css('overflow-y', 'hidden');
    });
});

// *********************************************************************** .skillsCont SIZES ****************************
/*
var skillsConW = $('.skillsCont').width();
var browserW = $(window).width()
var skillsContH = ((browserW / 100) * skillsConW) + 10;

console.log(browserW);
$('.skillsCont').css('height', skillsContH + 'px');
*/