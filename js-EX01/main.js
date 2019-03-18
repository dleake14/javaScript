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

var lineLength = 12;
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
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
    line1.textContent += padder(away);
    line1.textContent += padder(qtrTxt);
    line1.textContent += padder(home);
    line2.textContent += padder(aScore);
    line2.textContent += padder(qtr);
    line2.textContent += padder(hScore);
}

function rebuild(){
    line1.textContent ="";
    line2.textContent ="";
    line1.textContent += padder(awayRB);
    line1.textContent += padder(qtrTxt);
    line1.textContent += padder(homeRB);
    line2.textContent += padder(aScoreRB);
    line2.textContent += padder(qtrRB);
    line2.textContent += padder(hScoreRB);
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
    rebuild()
    document.getElementById("aNameRB").value ="";
    document.getElementById("hNameRB").value ="";
    document.getElementById("aScoreRB").value ="";
    document.getElementById("hScoreRB").value ="";
    document.getElementById("qtrRB").value ="";
}

