let move = 1;

function handler(event) {

    if (event.clientY >=95) {

    if (event.clientX >= 368 ) {
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
    document.body.style.background = `url('./pic${move}.jpg') no-repeat center/cover`;
    console.log(event);
}
}

function click1() {
    document.body.style.background = `url('./pic1.jpg') no-repeat center/cover`;
    
}
function click2() {
    document.body.style.background = `url('./pic2.jpg') no-repeat center/cover`;
    
}
function click3() {
    document.body.style.background = `url('./pic3.jpg') no-repeat center/cover`;
    
}
function click4() {
    document.body.style.background = `url('./pic4.jpg') no-repeat center/cover`;
    
}
function click5() {
    document.body.style.background = `url('./pic5.jpg') no-repeat center/cover`;
    
}
function click6() {
    document.body.style.background = `url('./pic6.jpg') no-repeat center/cover`;
    
}
