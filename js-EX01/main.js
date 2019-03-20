function padder(str) {
    str = str.toString();
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) == 1){odder = 1;}
    pstart =  (str.length) + ((lineLength / 2).toFixed(0) - (((str.length) - odder) / 2).toFixed(0));
    pend =  lineLength;
    let out = str.padStart([pstart]).padEnd([pend]);
    return out;
}

function topPad(str) {
    str = str.toString();
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) == 1){odder = 1;}
    pstart =  (str.length) + (((lineLength *3) / 2).toFixed(0) - (((str.length) - odder) / 2).toFixed(0));
    pend =  lineLength;
    let out = str.padStart([pstart]).padEnd([pend]);
    return out;
}

var lineLength = 12;
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var topper = document.getElementById('topper');
var topMes = "INIT";
let home = "home";
let qtrTxt = "QTR"
let away = "away";
let hScore = "-";
let aScore = "-";
let qtr = "-";
build();
let homeRB = "home";
let awayRB = "away"
let hScoreRB = 0;
let aScoreRB = 0;
let qtrRB = 0;

function build(){
    topper.textContent = topPad(topMes);
    line1.textContent += padder(away);
    line1.textContent += padder(qtrTxt);
    line1.textContent += padder(home);
    line2.textContent += padder(aScore);
    line2.textContent += padder(qtr);
    line2.textContent += padder(hScore);
}

function rebuild(){
    topper.textContent = line1.textContent = line2.textContent ="";
    topper.textContent = topPad(topMes);
    line1.textContent += padder(awayRB) + padder(qtrTxt) + padder(homeRB);
    line2.textContent += padder(aScoreRB) + padder(qtrRB) + padder(hScoreRB);
}

function buttonRebuild(){
    if (document.getElementById("aNameRB").value != ""){
        awayRB = document.getElementById("aNameRB").value;}
    if (document.getElementById("hNameRB").value != ""){
        homeRB = document.getElementById("hNameRB").value;}
    if (document.getElementById("aScoreRB").value != ""){
        aScoreRB = document.getElementById("aScoreRB").value;}
    if (document.getElementById("hScoreRB").value != ""){
        hScoreRB = document.getElementById("hScoreRB").value;}
    if (document.getElementById("qtrRB").value != ""){
        qtrRB = document.getElementById("qtrRB").value;}
    if (document.getElementById("topMes").value != ""){
        topMes = document.getElementById("topMes").value;}
    rebuild()
    document.getElementById("aNameRB").value ="";
    document.getElementById("hNameRB").value ="";
    document.getElementById("aScoreRB").value ="";
    document.getElementById("hScoreRB").value ="";
    document.getElementById("qtrRB").value ="";
    document.getElementById("topMes").value ="";
}

window.addEventListener("keydown", function(event) {
    let str =event.key;
    if (str == 'Enter'){
        topMes ="";
        buttonRebuild();
    }
}, true);

function tdAway(){
    topMes = "";
    topMes = "TOUCHDOWN " + [awayRB];
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 6;
    rebuild();
}

function tdHome(){
    topMes = "";
    topMes = "TOUCHDOWN " + [homeRB];
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 6;
    rebuild();
}

function fgAway(){
    topMes = "";
    topMes = "FIELD GOAL IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 3;
    rebuild();
}

function fgHome(){
    topMes = "";
    topMes = "FIELD GOAL IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 3;
    rebuild();
}

function twoAway(){
    topMes = "";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 2;
    rebuild();
}

function twoHome(){
    topMes = "";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 2;
    rebuild();
}

function oneAway(){
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 1;
    rebuild();
}

function oneHome(){
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 1;
    rebuild();
}