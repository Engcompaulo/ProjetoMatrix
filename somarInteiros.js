function somarInteiros(n){ //Soma dos números inteiros
     var soma = 0;
        if(validador(n)){
            return soma=(n*(n+1))/2; 
        }else{
           return "undefined";
        }
             
}
function validador(n){ //validar a entrada.
     if(typeof n ==="number") return  true;
     else return false;
}

console.log(somarInteiros(100));