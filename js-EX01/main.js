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


function midPad(str) {
    str = str.toString();
    lineLength = 5;
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) == 1){odder = 1;}
    pstart = (Math.floor((lineLength / 2))) +  (Math.floor((parseInt(str.length) / 2))) + odder;
    pend =  lineLength;
    let out = str.padStart([pstart]).padEnd([pend]);
    lineLength = 12;
    return out;
}

function topPad(str) {
    str = str.toString();
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) == 1){odder = 1;}
    pstart =  (str.length) + ((((lineLength *2)+ 5) / 2).toFixed(0) - (((str.length) - odder) / 2).toFixed(0));
    pend =  lineLength;
    let out = str.padStart([pstart]).padEnd([pend]);
    return out;
}

var lineLength = 12;
var awayDis = document.getElementById('awayDis');
var qtrTitle = document.getElementById('qtrTitle');
var homeDis = document.getElementById('homeDis');
var aScoreDis = document.getElementById('aScoreDis');
var qtrDis = document.getElementById('qtrDis');
var hScoreDis = document.getElementById('hScoreDis');
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
let who = "";

function build(){
    topper.textContent = topPad(topMes);
    awayDis.textContent = padder(away);
    qtrTitle.textContent = midPad(qtrTxt);
    homeDis.textContent = padder(home);
    aScoreDis.textContent = padder(aScore);
    qtrDis.textContent = midPad(qtr);
    hScoreDis.textContent = padder(hScore);
}

function clear(){
    topper.textContent = "";
    awayDis.textContent = "";
    qtrTitle.textContent = "";
    homeDis.textContent = "";
    aScoreDis.textContent = "";
    qtrDis.textContent = "";
    hScoreDis.textContent = "";
    document.getElementById("aNameRB").value ="";
    document.getElementById("hNameRB").value ="";
    document.getElementById("aScoreRB").value ="";
    document.getElementById("hScoreRB").value ="";
    document.getElementById("qtrRB").value ="";
    document.getElementById("topMes").value ="";
}

function rebuild() {
    topper.textContent = topPad(topMes);
    awayDis.textContent = padder(awayRB);
    qtrTitle.textContent = midPad(qtrTxt);
    homeDis.textContent = padder(homeRB);
    aScoreDis.textContent = padder(aScoreRB);
    qtrDis.textContent = midPad(qtrRB);
    hScoreDis.textContent = padder(hScoreRB);
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
    clear();
    rebuild()
}

window.addEventListener("keydown", function(event) {
    let str =event.key;
    if (str == 'Enter'){
        topMes ="";
        buttonRebuild();
    }
}, true);

function scoreBlink(to){
    if (who == "away") {
        document.getElementById('awayDis').setAttribute("class", "teamHL");
        document.getElementById('aScoreDis').setAttribute("class", "blinking");
    }
    else {
        document.getElementById('homeDis').setAttribute("class", "teamHL");
        document.getElementById('hScoreDis').setAttribute("class", "blinking");
    }
    toPass = parseInt(to) * 1000;
    setTimeout(forReset, toPass);
}

function forReset (){
    document.getElementById('awayDis').setAttribute("class","mainLines");
    document.getElementById('aScoreDis').setAttribute("class","mainLines");
    document.getElementById('homeDis').setAttribute("class","mainLines");
    document.getElementById('hScoreDis').setAttribute("class","mainLines");
    setTimeout(function() {
        topMes = "";
        rebuild();
    }, 3000)
}

function tdAway(){
    topMes = "";
    topMes = "TOUCHDOWN " + [awayRB];
    who = "away";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 6;
    who = "away";
    scoreBlink(5);
    rebuild();
}

function tdHome(){
    topMes = "";
    topMes = "TOUCHDOWN " + [homeRB];
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 6;
    who = "home";
    scoreBlink(5);
    rebuild();
}

function fgAway(){
    topMes = "";
    who = "away";
    topMes = "FIELD GOAL IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 3;
    scoreBlink(3);
    rebuild();
}

function fgHome(){
    topMes = "";
    who = "home";
    topMes = "FIELD GOAL IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 3;
    scoreBlink(3);
    rebuild();
}

function twoAway(){
    topMes = "";
    who = "away";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 2;
    scoreBlink(5);
    rebuild();
}

function twoHome(){
    topMes = "";
    who = "home";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 2;
    scoreBlink(5);
    rebuild();
}

function oneAway(){
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 1;
    scoreBlink(1);
    rebuild();
}

function oneHome(){
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 1;
    scoreBlink(1);
    rebuild();
}