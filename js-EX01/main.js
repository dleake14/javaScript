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

function dAndDisp (down, dist){
    var dadDisp;
    if (dist === -1 || down === 0 || down >= 5) {return dadDisp = downer(down);}
    if (dist === 0) {return dadDisp = downer(down) + "GOAL";}
    else {return dadDisp = downer(down) + dist;}
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
let prevDaDDis = document.getElementById('prevDaD');
let prevBODis = document.getElementById('prevBO')
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
let poss = "<->";
let down = 0;
let dist = -1;
let ballOn = -40;
let possRB = "<>";
let downRB = 0;
let distRB  = -1
let ballOnRB = -40;
let prevBO = -99;
let prevDown = 0;
let prevDist = -1;
let prevPoss = "";
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
    prevDaDDis.textContent = "Init & Init";
    prevBODis.textContent = "-";
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
    prevDaDDis.textContent = padder(dAndDisp(parseInt(prevDown), parseInt(prevDist)));
    prevBODis.textContent = prevBO;

}

function buttonRebuild(){
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
        prevDown = parseInt(downRB);
        downRB = document.getElementById("downInp").value;}
    if (document.getElementById("distInp").value !== ""){
        prevDist = parseInt(distRB);
        distRB = document.getElementById("distInp").value;}
    if (document.getElementById("ballOnInp").value !== ""){
        prevBO = parseInt(ballOnRB);
        ballOnRB = document.getElementById("ballOnInp").value;}
    possCheck();
    clear();
    rebuild()
}

window.addEventListener("keydown", function(event) {
    let str =event.key;
    if (str === 'Enter'){
        topMes ="";
        playBtn();
    }
}, true);

function possCheck(){
    if (document.getElementById("possA").checked === true){poss = "away"}
        else if (document.getElementById("possH").checked === true){poss = "home";}
        else {poss = "<->";}
        possAssign(poss);
}

function possAssign (poss){
    if (poss === "away"){
        document.getElementById("possA").checked = true;
        document.getElementById("possH").checked = false;
        possRB = "<--";
    }
    else if (poss === "home"){
        document.getElementById("possA").checked = false;
        document.getElementById("possH").checked = true;
        possRB = "-->";
    }
    else {
        document.getElementById("possA").checked = false;
        document.getElementById("possH").checked = false;
        possRB = "<->";
    }
}


function gainLoss(prevBO, ballOnRB){
    let gL =0;
    let prev = parseInt(prevBO);
    let now = parseInt(ballOnRB);

    //prev is on - side of field
    if (prev <= -1){
        prev = (50 - Math.abs(prev)) + 50;
    }
    //now is on - side of field
    if (now <= -1){
        now = (50 - Math.abs(now)) + 50;
    }
    gL = prev - now;
    return gL;
}

function playBtn() {
    possCheck();
    let gain = 0;
    if (document.getElementById("ballOnInp").value !== "") {
        prevBO = parseInt(ballOnRB);
        parseInt(ballOnRB = document.getElementById("ballOnInp").value);
        prevDown = parseInt(downRB);
        prevDist = parseInt(distRB);
        gain = gainLoss(prevBO, ballOnRB);
        //Gain gives you a first down
        if (gain >= prevDist && prevDist !== 0 || prevDown === 0) {
            down = 1;
            //Goal to go check
            if (ballOnRB <= 10 && ballOnRB >= 1) {
                dist = 0;
            } else {
                dist = 10;
            }
        }
        //Gain does NOT give first down
        else if (prevDown < 4) {
            down = (prevDown + 1);
            if (prevDist === 0)
                {
                    dist = prevDist;
                }
            else {dist = prevDist - gain;}
        }
        else {down = 0; dist=10;}
    }
    distRB = dist;
    downRB = down;
    clear();
    rebuild();
    return gain;

}


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
    possAssign("away");
    topMes = "";
    topMes = "TOUCHDOWN " + [awayRB];
    who = "away";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 6;
    downRB = 5;
    distRB = 0;
    ballOnRB = 3;
    who = "away";
    scoreBlink(5);
    rebuild();
}

function tdHome(){
    possAssign("home");
    topMes = "";
    topMes = "TOUCHDOWN " + [homeRB];
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 6;
    downRB = 5;
    distRB = 0;
    ballOnRB = 3;
    who = "home";
    scoreBlink(5);
    rebuild();
}

function fgAway(){
    possAssign("away");
    topMes = "";
    who = "away";
    topMes = "FIELD GOAL IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 3;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(3);
    rebuild();
}

function fgHome(){
    possAssign("home");
    topMes = "";
    who = "home";
    topMes = "FIELD GOAL IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 3;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(3);
    rebuild();
}

function twoAway(){
    possAssign("away");
    topMes = "";
    who = "away";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 2;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(5);
    rebuild();
}

function twoHome(){
    possAssign("home");
    topMes = "";
    who = "home";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 2;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(5);
    rebuild();
}

function oneAway(){
    possAssign("away");
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    aScoreRB = parseInt(aScoreRB);
    aScoreRB += 1;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(1);
    rebuild();
}

function oneHome(){
    possAssign("home");
    topMes = "";
    topMes = "EXTRA POINT IS GOOD";
    hScoreRB = parseInt(hScoreRB);
    hScoreRB += 1;
    downRB = 0;
    distRB = 0;
    ballOnRB = -40;
    scoreBlink(1);
    rebuild();
}