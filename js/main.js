
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
    }

     // se agrega una clase a un segundo div dentro de un ID
    const car=document.querySelector("#contenedor-carrito div")
        car.classList.add("carrito-footer");
        car.id="carrito-footer";


//adicionamos los productos a mostrar
let productos =[
    { id:"1234",
    name: "Caldo de Costilla",
    price:8000,
    img:"/Imagenes/CaldodeCostilla.png",
    description: "Caldo de costillar con Papa "
    },
    { id:"2345",
    name: "Tamal con Chocolate",
    price:9000,
    img:"/Imagenes/Tamalconchocolate.jpg",
    description: "Tamal con chocolate pan y queso"
    },
    { id:"3456",
    name: "Huevos con Arepa",
    price:7500,
    img:"/Imagenes/huevosconarepa.jpg",
    description: "Huevos con jamon y queso y arepa"
    },
    { id:"4567",
    name: "Changua",
    price:2700,
    img:"/Imagenes/Changuaconhuevo.jpg",
    description: "sopa con huevo leche papa y cilantro"
    },
    { id:"5678",
    name: "Calentado Paisa",
    price:2700,
    img:"/Imagenes/Calentadopaisa.jpg",
    description: "Frijoles rebueltos con arroz, con huevos, carne y queson con arepa."
    }
]

let postres =[
    { id:"6789",
    name: "Merengon",
    price:8000,
    img:"/Imagenes/Merengon.jpg",
    description: "Merengue con crema y fruta "
    },
    { id:"78910",
    name: "Manjar blanco",
    price:9000,
    img:"/Imagenes/Manjarblanco.jpg",
    description: "Arequipe de leche con uvas pasas"
    },
    { id:"891011",
    name: "Fresas con crema",
    price:7500,
    img:"/Imagenes/Fresasconcrema.jpg",
    description: "Fresas con crema de leche y leche condensada"
    },
    { id:"9101112",
    name: "Brebas",
    price:2700,
    img:"/Imagenes/Brebasconarequipe.jpg",
    description: "Brebas con arequipe"
    },
    { id:"10111213",
    name: "Arroz de leche",
    price:2700,
    img:"/Imagenes/ArrozdeLeche.jpg",
    description: "Arroz con leche y leche condensada."
    }
]
let bebidas =[
    { id:"11121314",
    name: "Tinto",
    price:8000,
    img:"/Imagenes/Tinto.jpg",
    description: "tinto o cafe colombiano "
    },
    { id:"12131415",
    name: "Refajo",
    price:9000,
    img:"/Imagenes/Refajo.jpg",
    description: "Gaseosa colombiana con cervesa e hielo"
    },
    { id:"13141516",
    name: "Lulada",
    price:7500,
    img:"/Imagenes/Lulada.jpg",
    description: "Jugo de pulpa de fruta de lulo con hielo y agua"
    },
    { id:"14151617",
    name: "Aguadepanela",
    price:2700,
    img:"/Imagenes/Aguadepanela.jpg",
    description: "Agua de panela con agua y limon"
    },
    { id:"15161718",
    name: "Agua Ardiente",
    price:2700,
    img:"/Imagenes/Aguardiente.jpg",
    description: "Bebida alcolica a base de destilacion de grutas y cereales"
    }
]

// funcion para mostrar los productos
function mostrarProductos(){
    let contenedor =document.querySelector("#productos")
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

    let contenedor2 =document.querySelector("#bebidas")
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
        const productoID = btn.getAttribute("data-id");
        agregarAlCarrito(productoID);
        });
        });
    }

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
        let btnDelete = btn.getAttribute('data-id');
        eliminarDelCarrito(btnDelete);
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
mostrarProductos();


