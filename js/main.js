//let prompt("\n 1. " + "\n 2. "+ "\n 3. ");

let fechaActual=2024;
const fechaNacimiento= parseInt(prompt("introdusca su año de Nacimiento:"));
let edad= fechaActual-fechaNacimiento;
if( edad<18){
    alert("Eres Menor de Edad, no puedes ingresar" +"\n Tienes "+edad+ "años")

}
else{
    alert ("Bienvenido a su desayuno en linea")

    let producto=prompt("Selecione uno de los siguientes desayunos que tenemos:"+
    "\n 1. Huevos con pan y Chocolate" + "\n 2.Arepa con carne y cafe  "+ "\n 3.tamal con chocolate y pan ")
    
        switch (producto){
            case "1":
                let valorDesayuno1= 10000;
                alert("Huevos con pan y Chocolate " +" le cuesta: $ "+valorDesayuno1);
            break;
            case "2":
                let valorDesayuno2= 20000;
                alert("Arepa con carne y cafe"  +" le cuesta: $ "+valorDesayuno2);
            break;
            case "3":
                let valorDesayuno3= 30000;
                alert("tamal con chocolate y pan"  +" le cuesta: $ "+valorDesayuno3);
            break;
            default:
                alert("Opcion no Valida")
            break;   
        }
    
}