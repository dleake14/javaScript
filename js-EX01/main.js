function padder(str) {
    str = str.toString();
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) === 1){odder = 1;}
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
    if ((str.length % 2) === 1){odder = 1;}
    pstart = (Math.floor((lineLength / 2))) +  (Math.floor((parseInt(str.length) / 2))) + odder;
    pend =  lineLength;
    lineLength = 12;
    return str.padStart([pstart]).padEnd([pend]);
}

function topPad(str) {
    str = str.toString();
    let pstart = 0, pend = 0;
    let odder = 0;
    if ((str.length % 2) === 1){odder = 1;}
    pstart =  (str.length) + ((((lineLength *2)+ 5) / 2).toFixed(0) - (((str.length) - odder) / 2).toFixed(0));
    pend =  lineLength;
    return str.padStart([pstart]).padEnd([pend]);
}

function downer(down) {
    switch (down){
        case 0: return "KO";
        case 1: return "1st & ";
        case 2: return "2nd & ";
        case 3: return "3rd & ";
        case 4: return "4th & ";
        case 5: return "PAT";
        case 6: return "";
        default: return down;
    }
}

function dister(down, dist, gtg, fad){
    if (Number.isNaN(dist) === true || down === 0 || down >= 5){return "";}
    if (fad === true){return 10;}
    return dist;
}

function dAndDisp (down, dist){
    let dadDisp = downer(down) + dister(down, dist);
    return dadDisp;
}


let lineLength = 12;
let awayDis = document.getElementById('awayDis');
let qtrTitle = document.getElementById('qtrTitle');
let homeDis = document.getElementById('homeDis');
let aScoreDis = document.getElementById('aScoreDis');
let qtrDis = document.getElementById('qtrDis');
let hScoreDis = document.getElementById('hScoreDis');
let topper = document.getElementById('topper');
let ballOnDis = document.getElementById('ballOnDis');
let dAndDDis = document.getElementById('dAndDDis');
let possDis = document.getElementById('possDis');
let prevDaD = document.getElementById('prevDaD');
let prevBO = document.getElementById('prevBO')
let topMes = "INIT";
let home = "home";
let qtrTxt = "QTR";
let away = "away";
let hScore = "-";
let aScore = "-";
let qtr = "-";
let homeRB = "home";
let awayRB = "away";
let hScoreRB = 0;
let aScoreRB = 0;
let qtrRB = "-";
let who = "";
let poss = "-->";
let down = 0;
let dist = 0;
let ballOn = -40;
let possRB = "|";
let downRB = "|";
let distRB  = "|"
let ballOnRB = "-|";
build();

function build(){
    topper.textContent = topPad(topMes);
    awayDis.textContent = padder(away);
    qtrTitle.textContent = midPad(qtrTxt);
    homeDis.textContent = padder(home);
    aScoreDis.textContent = padder(aScore);
    qtrDis.textContent = midPad(qtr);
    hScoreDis.textContent = padder(hScore);
    dAndDDis.textContent = padder(dAndDisp(parseInt(down), parseInt(dist)));
    possDis.textContent = midPad(poss);
    ballOnDis.textContent = padder(ballOn);
    prevBO.textContent = "-"
    prevDaD.textContent = "Init & Init";
}

function clear(){
    topper.textContent = "";
    awayDis.textContent = "";
    qtrTitle.textContent = "";
    homeDis.textContent = "";
    aScoreDis.textContent = "";
    qtrDis.textContent = "";
    hScoreDis.textContent = "";
    dAndDDis.textContent = "";
    possDis.textContent = "";
    ballOnDis.textContent = "";
    document.getElementById("aNameRB").value ="";
    document.getElementById("hNameRB").value ="";
    document.getElementById("aScoreRB").value ="";
    document.getElementById("hScoreRB").value ="";
    document.getElementById("qtrRB").value ="";
    document.getElementById("topMes").value ="";
    document.getElementById("downInp").value ="";
    document.getElementById("distInp").value ="";
    document.getElementById("ballOnInp").value ="";
}

function rebuild() {
    topper.textContent = topPad(topMes);
    awayDis.textContent = padder(awayRB);
    qtrTitle.textContent = midPad(qtrTxt);
    homeDis.textContent = padder(homeRB);
    aScoreDis.textContent = padder(aScoreRB);
    qtrDis.textContent = midPad(qtrRB);
    hScoreDis.textContent = padder(hScoreRB);
    dAndDDis.textContent = padder(dAndDisp(parseInt(downRB), parseInt(distRB)));
    possDis.textContent = midPad(possRB);
    ballOnDis.textContent = padder(ballOnRB);
}

function buttonRebuild(){
    prevDaD.textContent = padder(dAndDisp(parseInt(downRB), parseInt(distRB)));
    if (document.getElementById("aNameRB").value !== ""){
        awayRB = document.getElementById("aNameRB").value;}
    if (document.getElementById("hNameRB").value !== ""){
        homeRB = document.getElementById("hNameRB").value;}
    if (document.getElementById("aScoreRB").value !== ""){
        aScoreRB = document.getElementById("aScoreRB").value;}
    if (document.getElementById("hScoreRB").value !== ""){
        hScoreRB = document.getElementById("hScoreRB").value;}
    if (document.getElementById("qtrRB").value !== ""){
        qtrRB = document.getElementById("qtrRB").value;}
    if (document.getElementById("topMes").value !== ""){
        topMes = document.getElementById("topMes").value;}
    if (document.getElementById("downInp").value !== ""){
        downRB = document.getElementById("downInp").value;}
    if (document.getElementById("distInp").value !== ""){
        distRB = document.getElementById("distInp").value;}
    if (document.getElementById("ballOnInp").value !== ""){
        prevBO.textContent = ballOnRB;
        ballOnRB = document.getElementById("ballOnInp").value;}
    clear();
    rebuild()
}

window.addEventListener("keydown", function(event) {
    let str =event.key;
    if (str === 'Enter'){
        topMes ="";
        buttonRebuild();
    }
}, true);

/*function updateBtn(){
    let reply;
    if (isNaN(ballOnRB) === true || ballOnRB <= -50 || ballOnRB >=  50){reply = "Er";}


    return reply;
}*/


function scoreBlink(to){
    if (who === "away") {
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