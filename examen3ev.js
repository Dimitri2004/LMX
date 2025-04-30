
 let nome=document.querySelector("#nombre");
 let apellido=document.querySelector("#apellido");
let boton=document.querySelector("#boton");
 let texto=document.querySelector("#texto");


 //ARRAYS
 const arrayNombre=['Pantera','Muerta','barriga'];
const arrayApellido=['Desnuda','Bailarin','Sanguinaria'];
 const arrayLetra=['P','B','E'];





 //OBJETOS
//  let objetoNombre={
//  A:'Pantera',
//  B:'Muerte',
//  C:'Hoja'
//  }
//  OBJETOS
//  let objetoApellido={
//      A:'Bailarina',
//      B:'Suicida',
//    C:'Saltarina'
//  }








 boton.addEventListener('click',generarNombre)

 function generarNombre() {
    
   let inicialNome=  nome.value[0]
      let inicialApellido=  apellido.value[0]

 //OBJETOS
//nombreLuchador=objetoNombre[inicialNome]
//apellidoLuchador=objetoApellido[inicialApellido]

 //ARRAYS
 let posicionNombre =arrayLetra.indexOf(inicialNome)
 let posicionApellido =arrayLetra.indexOf(inicialApellido)

 let nombreLuchador =arrayNombre[posicionNombre]
 let apellidoLuchador=arrayApellido[posicionApellido]
 
texto.innerHTML=nombreLuchador +' '+ apellidoLuchador

}
