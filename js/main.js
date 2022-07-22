
function mudacormenu(){
    var cormenu = document.getElementById("dropdownMenuLink");
    cormenu.style.color="rgb(0, 128, 128)";            
}
function voltacormenu(){
    var cor = document.getElementById("dropdownMenuLink");
    cor.style.color="white";   
}
function mudacorclapale(){
    var coritem = document.getElementById("dropdown-clapale");
    coritem.style.color="rgb(0, 128, 128)";
}
function voltacorclapale(){
    var coritem = document.getElementById("dropdown-clapale");
    coritem.style.color="white";
}
function mudacorhotel(){
    var coritem = document.getElementById("dropdown-hotel");
    coritem.style.color="rgb(0, 128, 128)";
}
function voltacorhotel(){
    var coritem = document.getElementById("dropdown-hotel");
    coritem.style.color="white";
}
function mudacorvoz(){
    var coritem = document.getElementById("dropdown-voz");
    coritem.style.color="rgb(0, 128, 128)";
}
function voltacorvoz(){
    var coritem = document.getElementById("dropdown-voz");
    coritem.style.color="white";
}
const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 2.0;
console.log(metadeWindow);
function animarScroll(){
    const topoItem = scrollAnima.getBoundingClientRect().top;

    console.log(topoItem);

    const itemVisivel = topoItem - metadeWindow < 0;
    if(itemVisivel){
        scrollAnima.classList.add('show-button');
    }else{
        scrollAnima.classList.remove('show-button');
    };
}

window.addEventListener('scroll',animarScroll);

function ampliarclapale(){
    
    var subir = document.querySelector('div#ampliarclapale');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-20px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}

function ampliarhotel(){
    
    var subir = document.querySelector('div#ampliarhotel');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-20px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}

function ampliarvozdopovo(){
    
    var subir = document.querySelector('div#ampliarvozdopovo');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-20px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
