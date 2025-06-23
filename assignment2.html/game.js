let positionleft = 350;
let character = document.getElementById("character");

function moverleft() {
    if (positionleft > 0) {
        positionleft = positionleft - 5;
        character.style.left = positionleft + "px";
    }
    console.log(positionleft);
}

function moveRight(){
    //setinterval()
}