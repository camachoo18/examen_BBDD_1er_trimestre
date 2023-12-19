let lista = JSON.parse(localStorage.getItem("lista"));
if (lista === null){
  lista = []
} else{
  for( let i = 0; i < lista.length; i++){
    const elemento = document.createElement("p");
    elemento.innerHTML = lista[i]
      document.querySelector(".resultado ").appendChild(elemento)
}
}


function añadir(){
  const valor =  document.querySelector("#input_usuario").value
  lista.push(valor);
  
  const elemento = document.createElement("p");
  elemento.innerHTML = valor;
  document.querySelector(".resultado ").appendChild(elemento)
  
  localStorage.setItem("lista",JSON.stringify(lista))
  

}

function borrar(){
    lista=[];
    document.querySelector(".resultado").innerHTML = ""
  
    localStorage.removeItem("lista")

}

function random(array){
  return array[Math.floor(Math.random() *array.length)]
}

function sortear(){
  const ganador = random(lista)
   document.querySelector(".resultadoSorteo").innerHTML = ganador
  
}

function capturarTecla(event){
 if(event.isComposing || event.keyCode ===13){
  añadir()
}
}