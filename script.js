console.log("hola mundo"); 

let intentos =6; 
let palabra = "RATON"; // palabra = ["R","A","T","O","N"]

console.log(palabra); 

let intento = "TAJON";//intento del usuario 

//algoritmo 
/* 
si palabra es igual a intento entonces imprimir ganaste 
sino 
    restar cantidad intentos en 1 
    sino si primer_intento es igual a primer_palabra entonces  
    imprimir primer_intento en verde   
    sino si primer_intento existe palabra entonces imprimir 
    primer_intento amarillo 
    sino entonces imprima primer_intento gris 

si intentos es igual a cero entonce imprimo perdiste 
    */ 
 function intentar(){
    if (palabra===intento){

        console.log("GANASTE");
    }else{
        intentos = intentos -1; //intentos --1
        console.log("te queda",intentos,"intentos");
        for(pos in palabra){
            //console.log("mensaje",pos);
            if(intento[pos]===palabra[pos]){
                console.log(intento[pos],"verde");
            }else if (palabra.includes(intento[pos])) {
                console.log(intento[pos],"amarrillo");
            }else{
                console.log(intento[pos],"gris");
            }
        }
    }
    
    if(intento===0){
        console.log("PERDISTE");
    }
 }

 intentar ("CAJON")
 intentar ("RAJON")
 intentar ("MAJON")
   //let vector = [1,"hola",true,34];
   //console.log(palabra[3]);


