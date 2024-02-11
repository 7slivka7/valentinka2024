const btnYes = document.querySelector('.yes');
const btnNo = document.querySelector('.no');

let btnYesFz = 2;
let btnNoFz = 2;

btnNo.addEventListener('click', function () {
    doYesBiger();
});

btnYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesBiger(){
    btnYesFz += .4;
    btnYes.style.fontSize = btnYesFz + 'em';
    btnNoFz -=.5;
    btnNo.style.fontSize = btnNoFz + 'em';
}

function buttonYesPushed (){
    location.href = './page2.html';
}