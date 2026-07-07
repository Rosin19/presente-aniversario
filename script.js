function abrirCarta(){

document
.getElementById("envelope")
.classList
.add("aberto");

}

function mostrarCoracoes(event){

event.stopPropagation();

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.animationDuration=(2+Math.random()*2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

}