const buttonHeight= 50;
const buttonWidth= 150;
const maxWidth = window.innerWidth-buttonWidth;
const maxHeight = window.innerHeight-buttonHeight;

function randText() {
    return Math.floor(Math.random() * 4 + 1);
}

window.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('runner');
    var audio = new Audio('audio/bad.mp3');
    audio.play();

    if(button.id="runner"){
        button.addEventListener('mouseover', () => {
            button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
            button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';  
            switch (randText()) {
                case 1:
                    button.innerHTML="Podiamos ser tão felizes";
                    break;
                case 2:
                    button.innerHTML="O botão de \"Sim\" é o outro";
                    break;
                case 3:
                    button.innerHTML="Parece que te enganaste";
                    break;
                default:
                    button.innerHTML="SIM!!!!";
                    button.id="success";
                    break;
            }
        })}
    
})


