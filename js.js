

///////////////////////////////  HEADER ///////////////////////////////////////
//animacion de la barra de menu
document.querySelector(".bars__menu").addEventListener("click", animateBars );
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let tOculto = document.querySelector(".texto-oculto");
let ver = document.querySelector(".verMas");
let itemTexto = document.querySelector(".texto");
let btnsubir = document.querySelector(".leer-mas");
let persona = document.getElementById("persona");
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
}

//menu visible
const botonBar = document.querySelector(".bars__menu")
const item = document.querySelector(".menu-menu")
botonBar.addEventListener("click" , () => {
    item.classList.toggle("menu-v")
})
//------------------------------------------------------------------------------------


ver.addEventListener("click" , () => {
    tOculto.classList.toggle("texto-visible");
    itemTexto.classList.toggle("textoFondo");
    btnsubir.classList.toggle("leer-mas_volver");
    // persona.style.animation = "mover 1s" ;
})




// eslaider
function obtenerDatos() {
    const data = new XMLHttpRequest();
    data.open('GET','slaider.json',true);

    data.send();

    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText)
            
             let datos = JSON.parse(this.responseText);
             let slaider = document.querySelector(".slide-contenedor")
             for (let item of datos) {
                let div1 = document.createElement("div");
      div1.setAttribute("class","mislider fade");
      div1.style.backgroundImage = "linear-gradient(to top, #ffffff 0%, #cf151200 23%), url("+item.imagen+") ";
      div1.style.backgroundPosition = "center";
      div1.style.backgroundSize = "cover";
      div1.style.backgroundRepeat = "no-repeat";
     
      slaider.appendChild(div1);
                console.log(item.imagen)
             }
    }




    }
}
obtenerDatos()










let indice = 1
muestraslides(indice)

function avanzaslide(n){
    muestraslides(indice+=n)
}

function posicionslide(n){
    muestraslides(indice=n)
}
setInterval(function tiempo(){
    muestraslides(indice+=1)
},3000);
function muestraslides(n){
 
    let slides = document.getElementsByClassName("mislider")
    // console.log(slides[3])
if(n > slides.length){
        indice = 1;
}

if(n<1){
    indice = slides.length();
}

for(let i=0;i< slides.length;i++){
    slides[i].style.display = "none"
}

slides[indice-1].style.display = "block"

}

