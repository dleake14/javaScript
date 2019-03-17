function padder(str, lineNum) {
    var pstart = 0, pend = 0;
    var odder = 0;
    if ((str.length % 2) == 1){
        odder = 1;
    }
    pstart =  (str.length) + ((lineLength / 2).toFixed(0) - (((str.length) - odder) / 2).toFixed(0));
    pend =  lineLength;
    var out = str.padStart([pstart]).padEnd([pend]);

    if (lineNum ==1) {
        appendOne(out);
    }
    else {appendTwo(out)}
}


var lineLength = 12;
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
let home = "Oklahoma";
let qtrTxt = "QTR"
let away = "Texas";
let hScore = 14;
let aScore = 0;
let qtr = 1;
let pad = 0;

padder(away, 1);
padder(qtrTxt, 1);
padder(home, 1);
padder(aScore.toString(), 2);
padder(qtr.toString(), 2);
padder(hScore.toString(), 2);


function appendOne(out){
    line1.textContent += out;
}

function appendTwo(out){
    line2.textContent += out;
}


