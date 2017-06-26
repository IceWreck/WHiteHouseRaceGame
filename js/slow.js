var hsmacks = 0;
var tsmacks = 0;







var timecreate1;
var timeclick1;
var react1;



$("#p1").click(function() {
    $("#p2").fadeIn("fast");
    tsmacks = tsmacks + 1;
    navigator.vibrate(50);
    timeclick1 = Date.now();
    react = (timeclick1 - timecreate1) / 1000;
    document.getElementById("time").innerHTML = react;
    $("#p1").fadeOut("fast");
    makebox1();
});

makebox1();




var timecreate;
var timeclick;
var react;



$("#p2").click(function() {
    $("#p1").fadeIn("fast");
    hsmacks = hsmacks + 1;
    navigator.vibrate(50);
    timeclick = Date.now();
    react = (timeclick - timecreate) / 1000;
    document.getElementById("time").innerHTML = react;
    $("#p2").fadeOut("fast");
    makebox2();
});

makebox2();

setTimeout(function() {

    
     var alert = phonon.alert('Within thirty seconds, you smacked Hilary Clinton: ' + hsmacks + ' Times.  Donald Trump: ' + tsmacks + ' Times.', 'Score');
    alert.on('confirm', function() {window.location = "index.html";} );

    

   // setTimeout(function() { window.location = "index.html"; }, 10000);



}, 30000);



///Functions

function makebox2() {
    timecreate = Date.now();
    var min = 2000;
    var max = 4000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(function() {




        var top = Math.random();
        top = top * 375;
        var left = Math.random();
        left = left * 200;

        $("#p2").css("margin-top", top + "px");
        $("#p2").css("margin-left", left + "px");


        //styles will be added here
        $("#p2").fadeIn("fast");

    }, randomNumber);
}

function makebox1() {
    timecreate1 = Date.now();
    var min = 2000;
    var max = 4000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(function() {




        var top = Math.random();
        top = top * 375;
        var left = Math.random();
        left = left * 200;

        $("#p1").css("margin-top", top + "px");
        $("#p1").css("margin-left", left + "px");


        //styles will be added here
        $("#p1").fadeIn("fast");

    }, randomNumber);
}
