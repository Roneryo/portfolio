var audio  = document.querySelector(".audio");
audio.loop = true;
audio.playbackRate = 1;

let boca   = document.querySelector(".mouth");
let ojos   = document.querySelector(".eye")
let cuerpo = document.querySelector(".body");
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

let sonar = ()=> {
    audio.play();
    cuerpo.src = '';
    cuerpo.src = 'assets/Anna/normal.png';
    h1.style.animationPlayState = "running";
    boca.style.display= 'initial';
    ojos.style.display= 'initial';
};

cuerpo.addEventListener('click',sonar);

h1.addEventListener('animationend',()=>{
    console.log("Se ha terminado la animacion de caracteres");
    audio.pause();
    boca.style.display= 'none';
    ojos.style.display= 'none';
    h3.style.animationPlayState = "running";
    cuerpo.removeEventListener("click",sonar);
})
h3.addEventListener('animationend',()=>{
    setTimeout(()=>{
        location.href='/';
    },1500)
})