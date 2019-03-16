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
    line1.textContent = [away] + "QTR" + [home];
    line2.textContent = [aScore] + [qtr] + [hScore];
}

