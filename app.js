let move = 1;

function handler(event) {

    let offsetX = event.offsetX;
    let imgWidth = event.target.clientWidth;
    let screenPercentage = Math.floor((offsetX * 100) / imgWidth);

    if (event.clientY >= 95) {

        if (screenPercentage > 30) {
            ++move;
            if (move > 6) {
                move = 1;
            }
        }
        else {
            --move;
            if (move < 1) {
                move = 6;
            }
        }
        document.body.style.background = `url('./img/pic${move}.jpg') no-repeat center/cover`;
        console.log(event);
    }
}

function click1() {
    document.body.style.background = `url('./img/pic1.jpg') no-repeat center/cover`;
    move = 1

}
function click2() {
    document.body.style.background = `url('./img/pic2.jpg') no-repeat center/cover`;
    move = 2

}
function click3() {
    document.body.style.background = `url('./img/pic3.jpg') no-repeat center/cover`;
    move = 3

}
function click4() {
    document.body.style.background = `url('./img/pic4.jpg') no-repeat center/cover`;
    move = 4

}
function click5() {
    document.body.style.background = `url('./img/pic5.jpg') no-repeat center/cover`;
    move = 5

}
function click6() {
    document.body.style.background = `url('./img/pic6.jpg') no-repeat center/cover`;
    move = 6

}

let isMouseOver = false;

setInterval(() => {

    if (!isMouseOver) {
      
    
        ++move;
        if (move > 6) {
            move = 1;
        }
        document.body.style.background = `url('./img/pic${move}.jpg') no-repeat center/cover`;
    }

}, 3000)

function over() {
    isMouseOver = true
}

function out() {
    isMouseOver = false
}