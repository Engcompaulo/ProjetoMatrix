
function validador(n){ 
     return typeof n ==="number"
}

function somarInteiros(n){
  
        if(validador(n)){
            return (n*(n+1))/2; 
        }
             
}


console.log(somarInteiros(100000));