let blanco=document.querySelector("#blanco")
let azul=document.querySelector("#azul")
let rojo=document.querySelector("#rojo")
let amarillo=document.querySelector("#amarillo")


let jugadores=[blanco,azul,amarillo,rojo]

const listaRecursos={
    2:{blanco:[],azul:[],rojo:["oveja"],amarillo:[]},
    3:{blanco:["madera"],azul:["piedra"],rojo:[],amarillo:["piedra"]},
    4:{blanco:[],azul:["millo"],rojo:[],amarillo:["millo","oveja"]},
    5:{blanco:[],azul:["barro","oveja"],rojo:[],amarillo:[]},
    6:{blanco:["barro"],azul:[],rojo:["barro"],amarillo:["millo"]},
    7:{blanco:[],azul:[],rojo:[],amarillo:[]},
    8:{blanco:["piedra"],azul:["madera"],rojo:["madera"],amarillo:[]},
    9:{blanco:[],azul:[],rojo:["millo"],amarillo:["madera"]},
    10:{blanco:[],azul:[],rojo:["piedra"],amarillo:["barro"]},
    11:{blanco:["madera"],azul:["obeja"],rojo:["madera"],amarillo:[]},
    
}
function lanzarDados() {

let dado1=Math.floor(Math.random()*6)+1
let dado2=Math.floor(Math.random()*6)+1
let resultado=dado1+dado2
console.log(resultado)
return resultado
}

function asignarRecursos() {
let resultado=lanzarDados()
let lista=listaRecursos[resultado]

for (let recurso of lista.blanco){
   // blanco.innerHTML+="<img src='" + recurso + ".png'></img>";
   blanco.innerHTML+=`<img src='${recurso}.png'></img>`
}
for (let recurso of lista.azul){
    // blanco.innerHTML+="<img src='" + recurso + ".png'></img>";
    azul.innerHTML+=`<img src='${recurso}.png'></img>`
 }
 for (let recurso of lista.rojo){
    // blanco.innerHTML+="<img src='" + recurso + ".png'></img>";
    rojo.innerHTML+=`<img src='${recurso}.png'></img>`
 }
 for (let recurso of lista.amarillo){
    // blanco.innerHTML+="<img src='" + recurso + ".png'></img>";
    amarillo.innerHTML+=`<img src='${recurso}.png'></img>`
 }

}
asignarRecursos()


