import { formatearPrecio } from "./util.js"; // Importamos la funcion para formatear precio

// Guardamos el array del localStorage
const productosEnCarrito = localStorage.getItem("productos-en-carrito");

//Convertimos el array del localStorage en formato JSON
let arrayProductosEnCarrito = JSON.parse(productosEnCarrito) || [];

//Contenedor carrito
const contenedorCarrito = document.querySelector("#contenedor-carrito");

//Parrafo texto carrito vacio
const carritoVacio = document.querySelector("#carrito-vacio");

// Contendor de tarjetas de productos del carrito
const contenedorCarritoProductos = document.querySelector(
	"#contenedor-carrito-productos"
);

// Contenedor de las acciones del carrito
const contenedorCarritoAcciones = document.querySelector(
	"#contenedor-carrito-acciones"
);

// Boton de vaciar carrito
const botonVaciarCarrito = document.querySelector("#btn-vaciar-carrito");

// Boton Comprar Carrito
const botonComprar = document.querySelector("#btn-comprar");

// Funcion para cargar los productos en el carrito
function cargarProductosEnCarrito() {
	contenedorCarritoProductos.innerHTML = ""; // Limpiamos el contenedor antes de cargar productos

	if (arrayProductosEnCarrito.length === 0) {
		// Si no hay productos en el carrito
		carritoVacio.style.display = "block"; // Mostramos el mensaje de carrito vacío
		contenedorCarrito.style.display = "none"; // Ocultamos el contenedor del carrito
		contenedorCarritoAcciones.style.display = "none"; // Ocultamos el contenedor de las acciones del carrito
		return;
	} else {
		// Si hay productos en el carrito
		carritoVacio.style.display = "none"; // Ocultamos el mensaje de carrito vacío
		contenedorCarritoAcciones.classList.add("contenedor-carrito-acciones"); // agregamos estilos al contenedor de acciones
	}
	// Por cada producto del array del local storage creamos una tarjeta
	arrayProductosEnCarrito.forEach((producto) => {
		const divTarjeta = document.createElement("div");
		divTarjeta.classList.add("tarjeta-producto-carrito");

		let elementoPrecioViejo = "";
		// Generar el precio Viejo si existe
		if (producto.precioViejo && producto.oferta) {
			elementoPrecioViejo = `<p class="producto-precio-viejo-carrito">Antes: <span class="span-precio-viejo">$${formatearPrecio(
				producto.precioViejo
			)}</span></p>`;
		}

		divTarjeta.innerHTML = `
			<img src="${producto.img}"; 
				alt="${producto.titulo}"
			/>
			<h3 class="producto-titulo-carrito">
				${producto.titulo}
			</h3>
			<p class="producto-precio-actual-carrito">
				Precio: <span class="span-precio-actual">$${formatearPrecio(
					producto.precioActual
				)}
			</span></p>
			${elementoPrecioViejo} 
			<p id="subtotal-${
				producto.id
			}" class="producto-subtotal-carrito">Subtotal: <span class="span-subtotal">$${formatearPrecio(
			producto.precioActual * producto.cantidad
		)}</span></p>
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

		if (elementoSubTotal) {
			// Seleccionamos el span dentro del p para actualizar solo su contenido
			const spanSubtotal =
				elementoSubTotal.querySelector(".span-subtotal");

			// Actualizamos el valor del subtotal dentro del span
			if (spanSubtotal) {
				spanSubtotal.textContent = `$${formatearPrecio(
					producto.precioActual * producto.cantidad
				)}`;
			}
		}

		// Guardamos el carrito actualizado en localStorage
		localStorage.setItem(
			"productos-en-carrito",
			JSON.stringify(arrayProductosEnCarrito)
		);

		actualizarTotal();
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

	cargarProductosEnCarrito(); // cargamos los productos filtrados
	actualizarTotal(); // Actualizamos el total despues de eliminar productos
}

function actualizarTotal() {
	// guardamos en la variable total la sumatoria de todos los subtotales
	const total = arrayProductosEnCarrito.reduce(
		(acc, producto) => acc + producto.precioActual * producto.cantidad,
		0
	);

	// traemos el elemento span del total
	const spanTotal = document.querySelector(".total");

	// Agregamos contenido con los subtotales sumados previamente
	spanTotal.textContent = `$${formatearPrecio(total)}`;
}

// Escuchador de evento al boton de comprar carrito
botonComprar.addEventListener("click", () => {
	mostrarModalCompra(); // mostrar modal
});

// Crear y manejar el modal de forma dinámica
function mostrarModalCompra() {
	// Crear Modal
	const modal = document.createElement("div");
	modal.classList.add("modal");

	// Crear contenido del modal
	const modalContenido = document.createElement("div");
	modalContenido.classList.add("modal-contenido");

	// Crear X para cerrar el modal
	const modalCerrar = document.createElement("span");
	modalCerrar.classList.add("modal-cerrar");
	modalCerrar.textContent = "X";

	// Crear Titulo Confirmar Compra
	const titulo = document.createElement("h2");
	titulo.classList.add("titulo-confirmar-compra");
	titulo.textContent = "Confirmar Compra";

	// Crear Mensaje del modal
	const mensaje = document.createElement("p");
	mensaje.classList.add("mensaje");
	mensaje.textContent =
		"¿Estás seguro de que deseas comprar estos productos?";

	// Div que contiene el total con dicho valor
	const modalTotal = document.createElement("div");
	modalTotal.classList.add("modal-total");

	// Crear Titulo Total
	const tituloTotal = document.createElement("h3");
	tituloTotal.classList.add("modal-total-titulo");
	tituloTotal.textContent = "Total:";

	// Crear Valor del total
	const spanTotal = document.createElement("span");
	spanTotal.classList.add("modal-total-span");

	// Calcular el total y agregarlo al modal
	const total = arrayProductosEnCarrito.reduce(
		(acc, producto) => acc + producto.precioActual * producto.cantidad,
		0
	);

	// Agregar el total como contenido del elemento
	spanTotal.textContent = `$${formatearPrecio(total)}`;

	// Añadir los elementos al contenedor modalTotal
	modalTotal.appendChild(tituloTotal);
	modalTotal.appendChild(spanTotal);

	// Crear el contenedor de las acciones del modal
	const ModalAcciones = document.createElement("div");
	ModalAcciones.classList.add("modal-acciones");

	// Crear boton confirmar
	const botonConfirmar = document.createElement("button");
	botonConfirmar.classList.add("modal-acciones-boton-confirmar");
	botonConfirmar.textContent = "Confirmar";

	const botonCancelar = document.createElement("button");
	botonCancelar.classList.add("modal-acciones-boton-cancelar");
	botonCancelar.textContent = "Cancelar";

	// Añadir los botones al contenedor de las acciones del modal
	ModalAcciones.appendChild(botonConfirmar);
	ModalAcciones.appendChild(botonCancelar);

	modalContenido.appendChild(modalCerrar); // Añadir la X (cerrar) al contenedor del contenido del modal
	modalContenido.appendChild(titulo); // Añadir Titulo: Confirmar Compra al contenedor del contenido del modal
	modalContenido.appendChild(mensaje); // Añadir mensaje al contenedor del contenido del modal
	modalContenido.appendChild(modalTotal); // Añadir contenedor del total al contenedor del contenido del modal
	modalContenido.appendChild(ModalAcciones); // Añadir el contenedor de acciones al contenedor del contenido del modal

	modal.appendChild(modalContenido); // Añadir todo el contenido del modal al contenedor principal del modal

	document.body.appendChild(modal); //Añadir el modal al documento body
	modal.style.display = "block";
	modalContenido.classList.add("show");

	// Añadir escuchador de evento al elemento Span ("X") para que oculte el modal
	modalCerrar.addEventListener("click", () => cerrarModal(modal));

	// Añadir escuchador de evento al botón Cancelar para ocultar el modal
	botonCancelar.addEventListener("click", () => cerrarModal(modal));

	// Añadir escuchador de evento al boton de confirmar compra
	botonConfirmar.addEventListener("click", () => {
		cerrarModal(modal);
		mostrarCheckout();
	});
}

// Funcion para cerrar el modal
function cerrarModal(modal) {
	document.body.removeChild(modal);
}

function mostrarCheckout() {
	// Crear el checkout
	const checkout = document.createElement("div");
	checkout.classList.add("checkout");

	// Crear el contenedor del formulario
	const contenedorFormulario = document.createElement("div");
	contenedorFormulario.classList.add("contenedor-form");

	// Crear el título del formulario
	const tituloFormulario = document.createElement("h2");
	tituloFormulario.classList.add("titulo-formulario");
	tituloFormulario.textContent = "Proceso de Pago";

	// Crear el formulario
	const formulario = document.createElement("form");
	formulario.classList.add("formulario");

	// Crear funciones para mostrar error y ocultar error
	function mostrarError(input, mensaje) {
		const spanError = input.nextElementSibling;
		spanError.textContent = mensaje;
		spanError.style.display = "block";
	}

	function ocultarError(input) {
		const spanError = input.nextElementSibling;
		spanError.textContent = "";
		spanError.style.display = "none";
	}

	// Crear el campo nombre del titular
	const campoNombre = document.createElement("div");
	campoNombre.classList.add("form-campo");
	campoNombre.innerHTML = `
    <label for="nombre-titular">Nombre del Titular:</label>
    <input type="text" id="nombre-titular" name="nombre-titular" placeholder="Ingresa tu nombre completo"  />
    <span class="mostrar-error"></span>
  `;

	// Crear el campo número de tarjeta
	const campoTarjeta = document.createElement("div");
	campoTarjeta.classList.add("form-campo");
	campoTarjeta.innerHTML = `
    <label for="numero-tarjeta">Número de Tarjeta:</label>
    <input type="text" id="numero-tarjeta" name="numero-tarjeta" placeholder="1234 5678 9012 3456" />
    <span class="mostrar-error"></span>
  `;

	// Crear el campo fecha de vencimiento
	const campoFecha = document.createElement("div");
	campoFecha.classList.add("form-campo");
	campoFecha.innerHTML = `
    <label for="fecha-de-vencimiento">Fecha de Vencimiento (MM/AA):</label>
    <input type="text" id="fecha-de-vencimiento" name="fecha-de-vencimiento" placeholder="MM/AA"  />
    <span class="mostrar-error"></span>
  `;

	// Crear el campo código de seguridad (CVV)
	const campoCvv = document.createElement("div");
	campoCvv.classList.add("form-campo");
	campoCvv.innerHTML = `
    <label for="codigo-cvv">Código CVV:</label>
    <input type="text" id="codigo-cvv" name="codigo-cvv" placeholder="123" />
    <span class="mostrar-error"></span>
  `;

	const contenedorBotones = document.createElement("div");
	contenedorBotones.classList.add("boton-container");

	// Crear el botón Pagar
	const botonPagar = document.createElement("button");
	botonPagar.classList.add("boton-pagar");
	botonPagar.textContent = "Pagar";

	// Crear el botón Cancelar
	const botonCancelar = document.createElement("button");
	botonCancelar.classList.add("boton-cancelar");
	botonCancelar.textContent = "Cancelar";

	contenedorBotones.appendChild(botonPagar);
	contenedorBotones.appendChild(botonCancelar);

	// Añadir campos al formulario
	formulario.appendChild(campoNombre);
	formulario.appendChild(campoTarjeta);
	formulario.appendChild(campoFecha);
	formulario.appendChild(campoCvv);
	formulario.appendChild(contenedorBotones);

	contenedorFormulario.appendChild(tituloFormulario);
	contenedorFormulario.appendChild(formulario);

	checkout.appendChild(contenedorFormulario);
	document.body.appendChild(checkout);
	console.log("Se agrego el checkout al cuerpo");

	// Escuchar evento de cancelación
	botonCancelar.addEventListener("click", () => {
		document.body.removeChild(checkout);
	});

	// Validación del formulario
	formulario.addEventListener("submit", (e) => {
		e.preventDefault();
		let esValido = true;

		const nombreTitular = formulario.querySelector("#nombre-titular");
		const numeroTarjeta = formulario.querySelector("#numero-tarjeta");
		const fechaVto = formulario.querySelector("#fecha-de-vencimiento");
		const codigoCvv = formulario.querySelector("#codigo-cvv");

		// Validar Nombre del Titular
		if (!nombreTitular.value.trim()) {
			mostrarError(nombreTitular, "Este campo es obligatorio");
			esValido = false;
		} else if (nombreTitular.value.trim().length < 3) {
			mostrarError(
				nombreTitular,
				"El nombre debe contener al menos 3 caracteres"
			);
			esValido = false;
		} else if (!/^[a-zA-Z\s]+$/.test(nombreTitular.value.trim())) {
			mostrarError(
				nombreTitular,
				"El nombre debe contener solo letras y espacios."
			);
			esValido = false;
		} else {
			ocultarError(nombreTitular);
		}

		// Validar Número de Tarjeta
		const tarjetaSinEspacios = numeroTarjeta.value.replace(/\s+/g, "");
		if (!tarjetaSinEspacios) {
			mostrarError(numeroTarjeta, "Este campo es obligatorio");
			esValido = false;
		} else if (
			!/^\d{16}$/.test(tarjetaSinEspacios) ||
			!validarNumeroTarjeta(tarjetaSinEspacios)
		) {
			mostrarError(numeroTarjeta, "El número de tarjeta no es válido.");
			esValido = false;
		} else {
			ocultarError(numeroTarjeta);
		}

		// Validar Fecha de Vencimiento
		if (!fechaVto.value) {
			mostrarError(fechaVto, "Este campo es obligatorio");
			esValido = false;
		} else if (
			!/^(0[1-9]|1[0-2])\/\d{2}$/.test(fechaVto.value) ||
			!validarFechaVencimiento(fechaVto.value)
		) {
			mostrarError(fechaVto, "La fecha de vencimiento no es válida");
			esValido = false;
		} else {
			ocultarError(fechaVto);
		}

		// Validar CVV
		if (!codigoCvv.value) {
			mostrarError(codigoCvv, "Este campo es obligatorio");
			esValido = false;
		} else if (!/^\d{3}$/.test(codigoCvv.value)) {
			mostrarError(codigoCvv, "El código CVV no es válido.");
			esValido = false;
		} else {
			ocultarError(codigoCvv);
		}

		// Mostrar modal de éxito si es válido
		if (esValido) {
			mostrarModalExito();
			document.body.removeChild(checkout);
		}
	});
}

// Validar número de tarjeta (Luhn)
function validarNumeroTarjeta(numero) {
	let suma = 0;
	let alternar = false;
	for (let i = numero.length - 1; i >= 0; i--) {
		let digito = parseInt(numero.charAt(i), 10);
		if (alternar) {
			digito *= 2;
			if (digito > 9) digito -= 9;
		}
		suma += digito;
		alternar = !alternar;
	}
	return suma % 10 === 0;
}

// Validar fecha de vencimiento
function validarFechaVencimiento(fecha) {
	const [mes, año] = fecha.split("/").map(Number);
	const ahora = new Date();
	const añoActual = ahora.getFullYear() % 100; // Últimos 2 dígitos del año
	const mesActual = ahora.getMonth() + 1;

	return año > añoActual || (año === añoActual && mes >= mesActual);
}

function mostrarModalExito() {
	// Crear Modal de éxito
	const modalExito = document.createElement("div");
	modalExito.classList.add("modal");

	// Crear contenedor del contenido del modal
	const modalContenido = document.createElement("div");
	modalContenido.classList.add("modal-contenido");

	// Crear X para cerrar el modal
	const modalCerrar = document.createElement("span");
	modalCerrar.classList.add("modal-cerrar");
	modalCerrar.textContent = "X";

	// Crear el titulo para el modal
	const tituloExito = document.createElement("h2");
	tituloExito.textContent = "¡Compra realizada con éxito!";
	tituloExito.classList.add("titulo-exito");

	// Crear el mensaje de éxito para el modal
	const mensajeExito = document.createElement("p");
	mensajeExito.textContent =
		"Gracias por tu compra. Te enviaremos un correo con los detalles.";
	mensajeExito.classList.add("mensaje-exito");

	// Añadir los elementos al contenedor
	modalContenido.appendChild(modalCerrar);
	modalContenido.appendChild(tituloExito);
	modalContenido.appendChild(mensajeExito);

	// Añadir los elementos al contenedor principal
	modalExito.appendChild(modalContenido);

	// Añadir al body el contenedor con todo el contenido del modal
	document.body.appendChild(modalExito);

	// Mostrar el modal
	modalExito.style.display = "block";

	// Cerrar el modal al hacer clic en la "X"
	modalCerrar.addEventListener("click", () => {
		document.body.removeChild(modalExito); // Removemos el modal
		arrayProductosEnCarrito = []; // Vaciamos el arreglo de productos
		localStorage.setItem("productos-en-carrito", JSON.stringify([])); // Guardamos el arreglo vacio en local storage
		cargarProductosEnCarrito(); // Llamamos a cargar productos para que muestre carrito vacio
	});
}

// Escuchador de evento al boton de vaciar carrito
botonVaciarCarrito.addEventListener("click", () => {
	arrayProductosEnCarrito = []; // Vaciamos el array de productos
	localStorage.setItem("productos-en-carrito", JSON.stringify([])); // Guardamos en el localStorage el array vacío
	cargarProductosEnCarrito(); //Llamamos a cargar productos para que muestre carrito vacio
});

// Llamar a la funcion cargar productos
cargarProductosEnCarrito();

// Llamar a la funcion de actualizar total
actualizarTotal();
