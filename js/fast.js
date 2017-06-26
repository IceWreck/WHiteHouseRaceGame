
var timecreate1;
var timeclick1;
var react1;

var hsmacks = 0;
var tsmacks = 0;



$("#p1").click(function() {
    $("#p2").show();
    tsmacks = tsmacks + 1;

    navigator.vibrate(50);
    timeclick1 = Date.now();
    react = (timeclick1 - timecreate1) / 1000;
    document.getElementById("time").innerHTML = react;
    $("#p1").hide();
    makebox1();
});

makebox1();




var timecreate;
var timeclick;
var react;



$("#p2").click(function() {
    $("#p1").show();
    hsmacks = hsmacks + 1;
    navigator.vibrate(50);
    timeclick = Date.now();
    react = (timeclick - timecreate) / 1000;
    document.getElementById("time").innerHTML = react;
    $("#p2").hide();
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
    var min = 1000;
    var max = 2000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(function() {




        var top = Math.random();
        top = top * 375;
        var left = Math.random();
        left = left * 200;

        $("#p2").css("margin-top", top + "px");
        $("#p2").css("margin-left", left + "px");


        //styles will be added here
        $("#p2").show();

    }, randomNumber);
}

function makebox1() {
    timecreate1 = Date.now();
    var min = 1000;
    var max = 2000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(function() {




        var top = Math.random();
        top = top * 375;
        var left = Math.random();
        left = left * 200;

        $("#p1").css("margin-top", top + "px");
        $("#p1").css("margin-left", left + "px");


        //styles will be added here
        $("#p1").show();

    }, randomNumber);
}
