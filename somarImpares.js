var l = console.log; //para dar mais agilidade na escrita e deixar o código mais limpo.
function somarImpares(n){//Soma dos números inteiros ímpares   
        if(validador(n)){

            if(n === 0 || n === 1){
                return l(n);
            }else{
                    var cont =0;
                    var resultado = 0;
                    for(var i = 1; i<= n;i++){
                         if(i%2 !== 0){
                             resultado = resultado +i;
                             cont++; 
                         }else{
                             n = n+1;
                         }
                    }
                    return l(resultado);
                 }
        }
        else{
        l("undefined");
        }
    }
    function validador(n){ //validar a entrada.
        if(typeof n ==="number") return  true;
        else return false;
    }
somarImpares(100);