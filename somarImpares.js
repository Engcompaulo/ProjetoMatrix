var l = console.log;

function validador(n){ 
        return typeof n =="number";
    }

function somarImpares(n){        
	if(validador(n)){
          return  operacao(n);
        }
}

function operacao(n){
        var cont =0;
        var saida = 0;
        var somarimpares=0;
               do{
               cont++;
                   if (cont%2 !==0 && n !== 0){
                   	somarimpares = somarimpares + cont;
                        saida++;
                   }
               }while (saida < n);
          return  somarimpares;

}
  
l(somarImpares(3));