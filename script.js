let aciertos=document.querySelector("#aciertos")
let fallos=document.querySelector("#fallos")


let vaso1=document.querySelector("#vaso1")
let vaso2=document.querySelector("#vaso2")
let vaso3=document.querySelector("#vaso3")

let boton=document.querySelector("#reset")

let posicionMoneda=agocharMoneda()

console.log(posicionMoneda)

let juego=false


let contadorAciertos=0
let contadorFallos=0

vaso1.addEventListener('click',comprobarVaso1)
vaso2.addEventListener('click',comprobarVaso2)
vaso3.addEventListener('click',comprobarVaso3)
boton.addEventListener('click',reset)

function agocharMoneda() {
   return Math.floor(Math.random()*3)
}
function comprobarVaso1(){
    if(juego===false){
    if (posicionMoneda==0){
        contadorAciertos++
        aciertos.innerHTML="Aciertos: " + contadorAciertos
        vaso1.src="moneda.png"

    }else{
        contadorFallos++
        fallos.innerHTML="Fallos: "+contadorFallos
        vaso1.style.visibility="hidden"
        }
        juego=true
    }
}
function comprobarVaso2(){
    if(juego===false){
    if (posicionMoneda==1){
        contadorAciertos++
        aciertos.innerHTML="Aciertos: "+ contadorAciertos
        vaso2.src="moneda.png"

    }else{
        contadorFallos++
        fallos.innerHTML="Fallos: "+ contadorFallos
        vaso2.style.visibility="hidden"
    }
    juego=true
}
}
function comprobarVaso3(){
    if (juego===false){
    if (posicionMoneda==2){
        contadorAciertos++
        aciertos.innerHTML="Aciertos: "+ contadorAciertos
        vaso3.src="moneda.png"

    }else{
        contadorFallos++
        fallos.innerHTML="Fallos: "+contadorFallos
         vaso3.style.visibility="hidden"
    }
    juego=true
}

}
function reset() {
    posicionMoneda=agocharMoneda()
    juego=false

    vaso1.src="vaso.jpg"
    vaso2.src="vaso.jpg"
    vaso3.src="vaso.jpg"


    vaso1.style.visibility="visible"
    vaso2.style.visibility="visible"
    vaso3.style.visibility="visible"
    
}
