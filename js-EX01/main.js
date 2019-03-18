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
let away = "away"
let hScore = 0;
let aScore = 0;
let qtr = 0;
build();

/*padder(away, 1);
padder(qtrTxt, 1);
padder(home, 1);
padder(aScore.toString(), 2);
padder(qtr.toString(), 2);
padder(hScore.toString(), 2);*/

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
    line1.textContent += padder(away);
    line1.textContent += padder(qtrTxt);
    line1.textContent += padder(home);
    line2.textContent += padder(aScore);
    line2.textContent += padder(qtr);
    line2.textContent += padder(hScore);
}

function buttonRebuild(){
    away = document.getElementById("aNameRB").value;
    home = document.getElementById("hNameRB").value;
    aScore = document.getElementById("aScoreRB").value;
    hScore = document.getElementById("hScoreRB").value;
    qtr = document.getElementById("qtrRB").value;
    rebuild()
}