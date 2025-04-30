let boton=document.querySelector("#boton")


let bastosLabel = document.querySelector("#bastos")
let copasLabel = document.querySelector("#copas")
let espadasLabel = document.querySelector("#espadas")
let ourosLabel = document.querySelector("#ouros")

let carta1=document.querySelector("#carta1")
let carta2=document.querySelector("#carta2")
let carta3=document.querySelector("#carta3")
let carta4=document.querySelector("#carta4")
let carta5=document.querySelector("#carta5")
let carta6=document.querySelector("#carta6")
let carta7=document.querySelector("#carta7")

let cartas =[ carta1 ,carta2 ,carta3 ,carta4 ,carta5 ,carta6 ,carta7 ]

boton.addEventListener('click',generarMazo)

const paus=["oro","espada","basto","copa"]
const numeros=["As","2","3","4","5","6","7","sota","caballo","rey"]
function generarCartaAleatoria(){

    randomPau=paus[Math.floor(Math.random()*paus.length)]
    randomIndice= Math.floor(Math.random()*numeros.length)
    randomNumero=numeros[randomIndice]
    return{
        paus:randomPau,
        numeros:randomNumero,
        nome:randomNumero + " de " + randomPau,
        ruta:randomPau+ (randomIndice + 1) +".png"
    }

}



console.log(generarCartaAleatoria().nome)
function generarMazo() {
    
    contadorBastos=0
    contadorCopas=0
    contadorEspadas=0
    contadorOros=0

    let man = []

    for(carta of cartas) {
        let novaCarta = generarCartaAleatoria()

        man.push(novaCarta)

        carta.src = novaCarta.ruta

        if (novaCarta.pau === "oro") {
            contadorOros++
        } else if (novaCarta.paus === "basto") {
            contadorBastos++
        } else if (novaCarta.paus === "copa") {
            contadorCopas++
        }
        else if (novaCarta.paus === "espada") {
            contadorEspadas++
        }
    }
    espadasLabel.innerHTML= "ESPADAS: " + contadorEspadas
    copasLabel.innerHTML= "COPAS: " + contadorCopas
    ourosLabel.innerHTML= "OUROS: " + contadorOros
    bastosLabel.innerHTML= "BASTOS: " + contadorBastos 
}