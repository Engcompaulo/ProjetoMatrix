function multiplicarInteiros(n){//Multiplicar os números inteiros
        
		if(typeof n ==="number"){
             return operacao(n);
          
            }

}

function operacao(n){
    var multiplicarinteiros = 1;
                if(n === 0 || n===1){
                    return 1;
                }else{
                    for(var i = 2;i<=n ;){
                       multiplicarinteiros = multiplicarinteiros*i;
                        i++;
                        }      
                return multiplicarinteiros;
                }
  
}

console.log(multiplicarInteiros(5));
