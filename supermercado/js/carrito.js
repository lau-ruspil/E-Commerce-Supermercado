const productosEnCarrito = localStorage.getItem("productos-en-carrito");
let arrayProductosEnCarrito = JSON.parse(productosEnCarrito) || [];

// Contendor de tarjetas de productos del carrito
const contenedorCarritoProductos = document.querySelector(
	"#contenedor-carrito-productos"
);

//Parrafo texto carrito vacio
const carritoVacio = document.querySelector("#carrito-vacio");

function cargarProductosEnCarrito() {
	contenedorCarritoProductos.innerHTML = ""; // Limpiamos el contenedor antes de cargar productos

	if (arrayProductosEnCarrito.length === 0) {
		carritoVacio.style.display = "block";
		return;
	} else {
		carritoVacio.style.display = "none";
	}
	arrayProductosEnCarrito.forEach((producto) => {
		const divTarjeta = document.createElement("div");
		divTarjeta.classList.add("tarjeta-producto-carrito");

		let elementoPrecioViejo = "";
		// Generar el precio Viejo si existe
		if (producto.precioViejo && producto.oferta) {
			elementoPrecioViejo = `<p class="producto-precio-viejo-carrito">Antes: $${producto.precioViejo}</p>`;
		}

		divTarjeta.innerHTML = `
			<img src="${producto.img}"; 
				alt="${producto.titulo}"
			/>
			<h3 class="producto-titulo-carrito">
				${producto.titulo}
			</h3>
			<p class="producto-precio-actual-carrito">
				Precio: $${producto.precioActual}
			</p>
			${elementoPrecioViejo} 
			<p id="subtotal-${producto.id}" class="producto-subtotal-carrito">Subtotal: $${
			producto.precioActual * producto.cantidad
		}</p>
			<input
				class="input-cantidad"
				id="input-cantidad-${producto.id}"
				type="number"
				value= "${producto.cantidad}"
			/>
			<button class="boton-eliminar" id="boton-eliminar-${producto.id}">
				Eliminar
			</button>
		`;
		contenedorCarritoProductos.appendChild(divTarjeta);

		// Selecciono los inputs de cantidad
		const inputCantidad = document.querySelector(
			`#input-cantidad-${producto.id}`
		);

		// Selecciono los botones de Eliminar
		const botonEliminar = document.querySelector(
			`#boton-eliminar-${producto.id}`
		);

		// Escuchador de evento en el input para llamar a la funcion que actualiza la cantidad y el subtotal
		inputCantidad.addEventListener("input", (e) => {
			actualizarCantidadProducto(producto.id, e.target.value);
		});

		// Escuchador de evento en el boton para eliminar el producto del carrito
		botonEliminar.addEventListener("click", () => {
			eliminarProducto(producto.id);
		});
	});
}

// Funcion para actualizar la cantidad y el subtotal
function actualizarCantidadProducto(idProducto, nuevaCantidad) {
	const producto = arrayProductosEnCarrito.find((p) => p.id === idProducto);

	// Si encontramos el producto
	if (producto) {
		// Convertimos la cantidad a número entero
		producto.cantidad = parseInt(nuevaCantidad, 10);

		// Si la cantidad no es un número válido o es menor que 1, restauramos a 1
		if (isNaN(producto.cantidad) || producto.cantidad < 1) {
			producto.cantidad = 1; // Si no es válido, restablecemos la cantidad a 1
		}

		// Actualizamos la cantidad del producto
		producto.cantidad = producto.cantidad;

		// Actualizamos el input de cantidad en el HTML para reflejar la cantidad correcta
		const inputCantidad = document.querySelector(
			`#input-cantidad-${idProducto}`
		);
		inputCantidad.value = producto.cantidad; // Aseguramos que el input se actualice

		// Actualizamos el subtotal en el HTML
		const elementoSubTotal = document.querySelector(
			`#subtotal-${idProducto}`
		);
		elementoSubTotal.textContent = `Subtotal: $${
			producto.precioActual * producto.cantidad // Asegurarnos que el subtotal se actualice
		}`;

		// Guardamos el carrito actualizado en localStorage
		localStorage.setItem(
			"productos-en-carrito",
			JSON.stringify(arrayProductosEnCarrito)
		);
	}
}

// Funcion para eliminar productos del carrito
function eliminarProducto(idProducto) {
	// actualizar el array filtrado para excluir el producto con el id indicado
	arrayProductosEnCarrito = arrayProductosEnCarrito.filter(
		(p) => p.id !== idProducto
	);

	// guardar el carrito Actualizado
	localStorage.setItem(
		"productos-en-carrito",
		JSON.stringify(arrayProductosEnCarrito)
	);

	cargarProductosEnCarrito();
}

// Llamar a la funcion cargar productos
cargarProductosEnCarrito();
