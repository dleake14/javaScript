    output();




function output () {
    var line1;
    var line2;
    line1 = document.querySelector('line1');
    line2 = document.querySelector('line2');
    let home = "Oklahoma";
    let away = "Texas";
    let hScore = 14;
    let aScore = 0;
    let qtr = 1;
    let pad = 0;
    let awayPad = parseInt((12 / 2) - (away.length / 2));
    line1 = [away].toString().toUpperCase().padStart(10,'F');
    
   /* line1.textContent = [away].toString().toUpperCase().padStart(3,'#').padEnd(3,'#') + "QTR" + [home];*/
    /*line2.textContent = [aScore] + [qtr] + [hScore] ;*/
}

