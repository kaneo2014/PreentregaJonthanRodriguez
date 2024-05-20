let fechaActual=2024;
const fechaNacimiento= parseInt(prompt("introdusca su año de Nacimiento:"));

if(!isNaN(fechaNacimiento)){
    if((fechaNacimiento.toString().length)!= 4 ){
        alert("El numero ingresado de fecha no es correcto")
    }
    else{
        let edad= fechaActual-fechaNacimiento;
        if(edad<0){
            alert("El numero ingresado de fecha no es correcto")     
            }
        else if(edad<18){
            alert("Eres Menor de Edad, no puedes ingresar" +"\n Tienes "+edad+ "años")     
            }
        else{
            alert ("Bienvenido a su desayuno en linea")
            let numeroDesayunos= parseInt(prompt("Indique el numero de desayunos:"))
                let pedido=[]
                
            for (let i = 1; i <= numeroDesayunos; i++) {
                let producto=parseInt(prompt("Desayuno # "+ i +"\n Selecione uno de los siguientes desayunos que tenemos:"+
                "\n 1. Huevos con pan y Chocolate"+" $10.000" + "\n 2.Arepa con carne y cafe  "+" $20.000"+ "\n 3.tamal con chocolate y pan "+" $30.000"))   
                while(isNaN(producto) || producto <=0|| producto >=4){
                    alert("El usuario ingresó "+ producto+ " Opcion no Valida");
                    producto=parseInt(prompt("Desayuno # "+ i +"\n Selecione uno de los siguientes desayunos que tenemos:"+
                    "\n 1. Huevos con pan y Chocolate"+" $10.000" + "\n 2.Arepa con carne y cafe  "+" $20.000"+ "\n 3.tamal con chocolate y pan "+" $30.000"))  
                }
                let desayunoAgregado={
                    desayuno:i,
                    tipoDesayuno:producto
                }
                pedido.push(desayunoAgregado);
            }
            let precioDesayuno1 = 10000;
            let tipoDesayuno1 = 1;
            let precioDesayuno2 = 20000;
            let tipoDesayuno2 = 2;
            let precioDesayuno3 = 30000;
            let tipoDesayuno3 = 3;
            //agrega una nueva clave valor a los objetos del array
            for (let i = 0; i < pedido.length; i++) {
                if(pedido[i].tipoDesayuno == tipoDesayuno1){
                    pedido[i].descripcionDesayuno="Huevos con pan y Chocolate";
                }
            };
            for (let i = 0; i < pedido.length; i++) {
                if(pedido[i].tipoDesayuno == tipoDesayuno2){
                    pedido[i].descripcionDesayuno="Arepa con carne y cafe";
                }
            };
            for (let i = 0; i < pedido.length; i++) {
                if(pedido[i].tipoDesayuno == tipoDesayuno3){
                    pedido[i].descripcionDesayuno="tamal con chocolate y pan";
                }
            };
            //cambio el tipo de desayuno por un valor especifico
            pedido.map((dato)=>{
                if(dato.tipoDesayuno == tipoDesayuno1){
                dato.tipoDesayuno = precioDesayuno1;
                }
                return dato;
            });
            pedido.map((dato)=>{
                if(dato.tipoDesayuno == tipoDesayuno2){
                dato.tipoDesayuno = precioDesayuno2;
                }
                return dato;
            });
            pedido.map((dato)=>{
                if(dato.tipoDesayuno == tipoDesayuno3){
                dato.tipoDesayuno = precioDesayuno3;
                }
                return dato;
            });
            //Saca el total de valores sumados de un valor de los objetos del array
            function totalCompra() {
                let total=pedido.reduce((acc,pedidoTotal)=>acc+pedidoTotal.tipoDesayuno,0)
                let iva=0.19;
                return (total+(total*iva))
            }
            //Es la cantidad de objetos dentro del array
            function cantidadDesayunos() {
                let total=pedido.length;
                return total
            }
            //Resumen de todos los desyunos
            resumenDesayunos=[]
            for (const producto of pedido) {
                resumenDesayunos.push(("\n"+(producto.desayuno)+ ") es :"+(producto.descripcionDesayuno)));
            }
            alert("El resumen de sus desayunos:"+"\n"+ resumenDesayunos)
            //Resumen del total a Pagar
            alert("Total a Pagar con impuestos es $ "+totalCompra()+"\n Con un total de "+cantidadDesayunos()+" Desayunos") 
        }    
    }
}
else{
alert("Opcion no Valida "+ fechaNacimiento+ " no es un año de Nacimiento " )
}
