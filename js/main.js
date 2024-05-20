// let fechaActual=2024;
// const fechaNacimiento= parseInt(prompt("introdusca su año de Nacimiento:"));

// if(!isNaN(fechaNacimiento)){
//     if((fechaNacimiento.toString().length)!= 4 ){
//         alert("El numero ingresado de fecha no es correcto")
//     }
//     else{
//         let edad= fechaActual-fechaNacimiento;
//         if(edad<0){
//             alert("El numero ingresado de fecha no es correcto")     
//             }
//         else if(edad<18){
//             alert("Eres Menor de Edad, no puedes ingresar" +"\n Tienes "+edad+ "años")     
//             }
//         else{
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
                let descripcionDesayuno1="Huevos con pan y Chocolate"
                let precioDesayuno2 = 20000;
                let tipoDesayuno2 = 2;
                let descripcionDesayuno2="Arepa con carne y cafe"
                let precioDesayuno3 = 30000;
                let tipoDesayuno3 = 3;
                let descripcionDesayuno3="tamal con chocolate y pan"
                //agrega una nueva clave valor a los objetos del array
                for (let i = 0; i < pedido.length; i++) {
                    if(pedido[i].tipoDesayuno == tipoDesayuno1){
                        pedido[i].descripcionDesayuno1="Huevos con pan y Chocolate";
                    }
                };
                for (let i = 0; i < pedido.length; i++) {
                    if(pedido[i].tipoDesayuno == tipoDesayuno2){
                        pedido[i].descripcionDesayuno2="Arepa con carne y cafe";
                    }
                };
                for (let i = 0; i < pedido.length; i++) {
                    if(pedido[i].tipoDesayuno == tipoDesayuno3){
                        pedido[i].descripcionDesayuno3="tamal con chocolate y pan";
                    }
                };
                //cambio el tipo de desayuno por un valor especifico y agrego una descripcion

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

                console.log(pedido)




//                 function total(primerNumero, segundoNumero) {
//                     return primerNumero +((primerNumero) *(segundoNumero));
//                 }
//                 switch (producto){
//                     case 1:
//                         let valorDesayuno1= 10000;
//                         alert("Huevos con pan y Chocolate " +" le cuesta: $ "+valorDesayuno1);
//                         alert("total a pagar con iva es :"+ "$"+total(valorDesayuno1,0.19));
//                     break; 
//                     case 2:
//                         let valorDesayuno2= 20000;
//                         alert("Arepa con carne y cafe"  +" le cuesta: $ "+valorDesayuno2);
//                         alert("total a pagar con iva es :"+ "$"+total(valorDesayuno2,0.19));
//                     break;
//                     case 3:
//                         let valorDesayuno3= 30000;
//                         alert("tamal con chocolate y pan"  +" le cuesta: $ "+valorDesayuno3);
//                         alert("total a pagar con iva es :"+ "$"+total(valorDesayuno3,0.19));
//                     break;
//                     default:
//                         alert("Opcion no Valida")
//                     break;   
//                 } 
//             }    
//         }
//     }
// }
// else{
// alert("Opcion no Valida "+ fechaNacimiento+ " no es un año de Nacimiento " )
// }
