
// adiciono id al header
const header = document.querySelector('header');
header.id ="inicio";
// adiciono class al nav
const navbar=document.querySelector("#inicio nav")
navbar.classList.add("navbar")

// adiciono class y ID a los DIV que hay en el nav
const logo=document.querySelector(".navbar")
if (logo.children.length > 1) {
    logo.children[0].classList.add("logo");
    logo.children[1].classList.add("opciones");
    logo.children[2].id ="carrito";
}

// adiciono clases a los div que hay en el Footer
    const footer = document.querySelector('footer');
    // Asegúrate de que hay al menos dos div dentro del footer
    if (footer.children.length > 1) {
        footer.children[0].classList.add("barraI");
        footer.children[1].classList.add("inferior");
    }
    // se agrega una clase a un segundo div dentro de la clase "inferior"
    const redes=document.querySelector(".inferior div")
    redes.classList.add("redes");

    // adicionamos ID y clases desde los hijos del main
    const main = document.querySelector('main');
    if (main.children.length > 1) {
        main.children[1].classList.add("productos");
        main.children[1].id ="productos";
        main.children[3].classList.add("productos");
        main.children[3].id ="postres";
        main.children[5].classList.add("productos");
        main.children[5].id ="bebidas";
        main.children[7].classList.add("contenedor-carrito");
        main.children[7].id="contenedor-carrito";
        main.children[8].id="total";
        main.children[9].id="BotonTotal";

        
    }

     // se agrega una clase a un segundo div dentro de un ID
    const car=document.querySelector("#contenedor-carrito div")
        car.classList.add("carrito-footer");
        car.id="carrito-footer";


//adicionamos los productos a mostrar como Array Vacios ya que se extraeran de 3 .Json

let productos =[]
let postres = []
let bebidas = []

// Petición para obtener productos desde 3 archivos.json y asisgnarlos a un Array vacio para mostrar en el DOM
async function obtenerProductos() {
    try {
        const respuestap = await fetch("./productos.json");
        const datos1 = await respuestap.json();
        productos = datos1

        const respuestapo = await fetch("./postre.json");
        const datos2 = await respuestapo.json();
        postres = datos2

        const respuestab = await fetch("./bebidas.json");
        const datos3 = await respuestab.json();
        bebidas = datos3

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
    
// funcion para mostrar los productos en el DOM
    function mostrarProductos(){
        const contenedor =document.querySelector("#productos")
        let productosHTML = '';
            for (const product of productos){
                productosHTML += 
                `
                <div class="card" id=${product.id}>
                    <img src=${product.img} alt=${product.description}>
                    <div class="desProducto" >
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <b>${product.price}</b>
                        <button class="agregar-carrito" data-id=${product.id}>Agregar</button>
                    </div>
                </div>
            `}
            contenedor.innerHTML = productosHTML;
            
        let contenedor1 =document.querySelector("#postres")
        let productos1HTML = '';
    
        for (const postr of postres){
            productos1HTML += 
            `
            <div class="card" id=${postr.id}>
                <img src=${postr.img} alt=${postr.description}>
                <div class="desProducto" >
                    <h3>${postr.name}</h3>
                    <p>${postr.description}</p>
                    <b>${postr.price}</b>
                    <button class="agregar-carrito" data-id=${postr.id}>Agregar</button>
                </div>
            </div>
        `}
        contenedor1.innerHTML = productos1HTML;
    
        const contenedor2 =document.querySelector("#bebidas")
        let productos2HTML = '';
    
        for (const bebi of bebidas){
            productos2HTML += 
            `
            <div class="card" id=${bebi.id}>
                <img src=${bebi.img} alt=${bebi.description}>
                <div class="desProducto" >
                    <h3>${bebi.name}</h3>
                    <p>${bebi.description}</p>
                    <b>${bebi.price}</b>
                    <button class="agregar-carrito" data-id=${bebi.id}>Agregar</button>
                </div>
            </div>
        `}
            contenedor2.innerHTML = productos2HTML;

            document.querySelectorAll(".agregar-carrito").forEach(btn => {
            btn.addEventListener("click", () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Agregado con exito",
                    showConfirmButton: false,
                    timer: 900
                });
            const productoID = btn.getAttribute("data-id");
            agregarAlCarrito(productoID);
            });
            });
    }
    mostrarProductos()
}

obtenerProductos();

 //agregamos al carrito productos
function agregarAlCarrito(productoID) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const products = [...productos, ...postres, ...bebidas].find(product => product.id === productoID);
    const productosEnCarrito = carrito.find(p => p.id === productoID);
  
    if (productosEnCarrito) {
      productosEnCarrito.cantidad += 1;
      productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.price;
    } else {
      carrito.push({
        id: productoID,
        name: products.name,
        price: products.price,
        cantidad: 1,
        totalPrice: products.price
      });
    }
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }  
  // funcion para mostrar lo que se a agregado al carrito de productos

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedorCarrito = document.querySelector("#contenedor-carrito");
    let footer = document.querySelector("#total");
    let carritoHTML = '';
    
    for (const p of carrito) {
        carritoHTML += `
        <div class="card-carrito" id=${p.id}>
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <p>Cantidad: ${p.cantidad}</p>
            <p>Total: $${p.totalPrice}</p>
            <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
        </div>
        `;
    }   
  
    contenedorCarrito.innerHTML = carritoHTML;
  
    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            Swal.fire({
                title: "Estas Seguro?",
                text: "Eliminaras esto del Carrito",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Eliminar!"
                }).then((result) => {  
                if (result.isConfirmed) {
                    let btnDelete = btn.getAttribute('data-id');
                    eliminarDelCarrito(btnDelete);
                    Swal.fire({
                    title: "Eliminado!",
                    text: "Su producto fue Eliminado del Carrito.",
                    icon: "success"
                    });
                }
            });
        });
    });
  
    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);
  
    footer.innerHTML = `Total: $${totalCarrito}`
}

  //funcion para eliminar lo que se agrega al carrito de productos

 function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);
  
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    mostrarCarrito();
 
}

//Evento para finalizar la compra


document.querySelectorAll('#BotonTotal').forEach(btn => {
    btn.addEventListener('click', () => {
        let carritom = JSON.parse(localStorage.getItem("carrito")|| []);
        let content = '';
        let totalSum = 0;
        if (carritom.length > 0) {
            content = '<ul>';
            carritom.forEach(item => {
                content += `<li>${item.name}, Cantidad: ${item.cantidad}, Precio Total: ${item.totalPrice}</li>`;
                totalSum += item.totalPrice;
            });
            content += '</ul>';
        } else {
            content = '<p>No hay elementos en el carrito.</p>';
        }
        content += `<strong><p>Total: ${totalSum}</p></strong>`;
        Swal.fire({
            title: "Total a Comprar",
            html: content,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: "Completado"
        });
    });
});




