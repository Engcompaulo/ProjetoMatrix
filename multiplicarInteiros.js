function multiplicarInteiros(n){//Multiplicar os números inteiros
        if(validador(n)){
            var mult = 1;
                if(n === 0 || n===1){
                    return 1;
                }else{
                    for(var i = 2;i<=n ;){
                        mult = mult*i;
                        i++;
                        }      
                return mult;
                }
            }else{
            l("undefined");    
            }

    }
   
    function validador(n){ //validar a entrada.
        if(typeof n ==="number") return  true;
        else return false;
    }
console.log(multiplicarInteiros(5));
