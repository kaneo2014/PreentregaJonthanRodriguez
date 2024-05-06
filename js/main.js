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
            let producto=parseInt(prompt("Selecione uno de los siguientes desayunos que tenemos:"+
            "\n 1. Huevos con pan y Chocolate" + "\n 2.Arepa con carne y cafe  "+ "\n 3.tamal con chocolate y pan "))   
            
            while((producto <=0)|| (producto >=4)){
                alert("El usuario ingresó "+ producto+ " Opcion no Valida");
                producto=parseInt(prompt("Selecione uno de los siguientes desayunos que tenemos:"+
                "\n 1. Huevos con pan y Chocolate" + "\n 2.Arepa con carne y cafe  "+ "\n 3.tamal con chocolate y pan ")) 
            }
            function total(primerNumero, segundoNumero) {
                return primerNumero +((primerNumero) *(segundoNumero));
            }
            switch (producto){
                case 1:
                    let valorDesayuno1= 10000;
                    alert("Huevos con pan y Chocolate " +" le cuesta: $ "+valorDesayuno1);
                    alert("total a pagar con iva es :"+ "$"+total(valorDesayuno1,0.19));
                break; 
                case 2:
                    let valorDesayuno2= 20000;
                    alert("Arepa con carne y cafe"  +" le cuesta: $ "+valorDesayuno2);
                    alert("total a pagar con iva es :"+ "$"+total(valorDesayuno2,0.19));
                break;
                case 3:
                    let valorDesayuno3= 30000;
                    alert("tamal con chocolate y pan"  +" le cuesta: $ "+valorDesayuno3);
                    alert("total a pagar con iva es :"+ "$"+total(valorDesayuno3,0.19));
                break;
                default:
                    alert("Opcion no Valida")
                break;   
            }   
        }
    }
}
else{
alert("Opcion no Valida "+ fechaNacimiento+ " no es un año de Nacimiento " )
}
