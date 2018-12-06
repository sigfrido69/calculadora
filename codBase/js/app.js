
  var Calculadora = (function(){
    var puntodecimal = 0;
    var signo=0;
    var primerValor=0;
    var operacion=0;

    return {
      
        agregarDigito : function(numero){
          var nuevoValor="0";
          var valorAnterior= document.getElementById("display").textContent;
          if ((valorAnterior==0)&&(valorAnterior.length==1)){
            nuevoValor=numero;
          }//if
          else{
            if (valorAnterior.length<8)
              nuevoValor=valorAnterior.concat(numero);
            else
              nuevoValor=valorAnterior;
          }
          document.getElementById("display").textContent=nuevoValor;
        },
        agregarDecimal : function(){
          var nuevoValor="";
          var valorAnterior= document.getElementById("display").textContent;
          if ((valorAnterior==0)&&(puntodecimal==0)){
            nuevoValor="0.";
          }//if
          else{
            if ((valorAnterior.length<8)&&(puntodecimal==0))
              nuevoValor=valorAnterior.concat(".");
            else
              nuevoValor=valorAnterior;
          }
          document.getElementById("display").textContent=nuevoValor;
          puntodecimal=1;
        },
        onc : function(){
          document.getElementById("display").textContent="0";
          puntodecimal = 0;
          signo=0;
        },
        masmenos : function(){
          var negativo="-";
          var valorAnterior= document.getElementById("display").textContent;
          if(signo==0){
            document.getElementById("display").textContent=negativo+valorAnterior;
            signo=1;
          }else{
            document.getElementById("display").textContent=valorAnterior.substring(1);
            signo=0;
          } 
        },
        realizaOperacion : function(operacionCaptura){
          primerValor=document.getElementById("display").textContent;
          operacion=operacionCaptura;
          Calculadora.onc();
        },
        resultado : function(){
          var segundovalor=document.getElementById("display").textContent;
          var formatoresultado="";
          switch(operacion) {
            case 1:
              resultado=primerValor/segundovalor;
            break;
            case 2:
              resultado=primerValor*segundovalor;
            break;
            case 3:
              resultado=primerValor-segundovalor;
            break;
            case 4:
              resultado=parseFloat(primerValor)+parseFloat(segundovalor);
            break;
            default:
            resultado=0;
          }
          formatoresultado=resultado.toString();
          document.getElementById("display").textContent=formatoresultado.substring(0, 8);
        }


    };
})();

    
