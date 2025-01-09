const productos = {
	alimentos: {
		verduras: [
			{
				id: 1,
				img: "./img/alimentos/frutasYverduras/verduras/acelga.jpeg",
				titulo: "Acelga Envasada X 500 Gr.",
				precioActual: "1500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 2,
				img: "./img/alimentos/frutasYverduras/verduras/ajo.jpeg",
				titulo: "Ajo X 2 Ud.",
				precioActual: "2490",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 3,
				img: "./img/alimentos/frutasYverduras/verduras/apio.jpeg",
				titulo: "Apio Envasado X 300 Gr.",
				precioActual: "4490",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 4,
				img: "./img/alimentos/frutasYverduras/verduras/berenjenas.jpeg",
				titulo: "Berenjena X 1 Kg.",
				precioActual: "2290",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 5,
				img: "./img/alimentos/frutasYverduras/verduras/brocoli.jpeg",
				titulo: "Brócoli Envasado X 500 Gr.",
				precioActual: "4000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 6,
				img: "./img/alimentos/frutasYverduras/verduras/cebolla.jpeg",
				titulo: "Cebolla X 1 Kg.",
				precioActual: "990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 7,
				img: "./img/alimentos/frutasYverduras/verduras/cebolla_verdeo.jpeg",
				titulo: "Cebolla de Verdeo Envasada X 250 Gr.",
				precioActual: "3990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 8,
				img: "./img/alimentos/frutasYverduras/verduras/coliflor.jpeg",
				titulo: "Coliflor Envasado X 300 Gr.",
				precioActual: "2990",
				precioViejo: "",
				oferta: false,
			},
		],

		frutas: [
			{
				id: 9,
				img: "./img/alimentos/frutasYverduras/frutas/arandanos.jpeg",
				titulo: "Arándanos 125 Gr.",
				precioActual: "1990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 10,
				img: "./img/alimentos/frutasYverduras/frutas/banana.jpeg",
				titulo: "Banana X 1 Kg.",
				precioActual: "1990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 11,
				img: "./img/alimentos/frutasYverduras/frutas/cereza.jpeg",
				titulo: "Cereza X 1 Kg.",
				precioActual: "6990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 12,
				img: "./img/alimentos/frutasYverduras/frutas/coco.jpeg",
				titulo: "Coco X 1 Kg.",
				precioActual: "4300",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 13,
				img: "./img/alimentos/frutasYverduras/frutas/durazno.jpeg",
				titulo: "Durazno X 1 Kg.",
				precioActual: "2495",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 14,
				img: "./img/alimentos/frutasYverduras/frutas/kiwi.jpeg",
				titulo: "Kiwi X 1 Kg.",
				precioActual: "5900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 15,
				img: "./img/alimentos/frutasYverduras/frutas/lima.jpeg",
				titulo: "Lima X 1 Kg.",
				precioActual: "3690",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 16,
				img: "./img/alimentos/frutasYverduras/frutas/limon.jpeg",
				titulo: "Limón X 1 Kg.",
				precioActual: "3790",
				precioViejo: "",
				oferta: false,
			},
		],
		carnes: [
			{
				id: 17,
				img: "./img/alimentos/CarnesYpescados/Carnes/arañita.jpeg",
				titulo: "Arañita X 1 Kg.",
				precioActual: "8900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 18,
				img: "./img/alimentos/CarnesYpescados/Carnes/bife_americano.jpeg",
				titulo: "Bife Americano Novillo X 1 Kg.",
				precioActual: "7900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 19,
				img: "./img/alimentos/CarnesYpescados/Carnes/bife_de_chorizo.jpeg",
				titulo: "Bife de Chorizo Novillito X 1 Kg.",
				precioActual: "11.500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 20,
				img: "./img/alimentos/CarnesYpescados/Carnes/bola_de_lomo.jpeg",
				titulo: "Bola de Lomo Feteada X 1 Kg.",
				precioActual: "9300",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 21,
				img: "./img/alimentos/CarnesYpescados/Carnes/carnaza.jpeg",
				titulo: "Carnaza Novillo X 1 Kg.",
				precioActual: "5290",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 22,
				img: "./img/alimentos/CarnesYpescados/Carnes/carne_picada.jpeg",
				titulo: "Carne Picada X 1 Kg.",
				precioActual: "3900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 23,
				img: "./img/alimentos/CarnesYpescados/Carnes/carre_de_cerdo_congelado.jpeg",
				titulo: "Carré de Cerdo con Hueso X 1 Kg.",
				precioActual: "5000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 24,
				img: "./img/alimentos/CarnesYpescados/Carnes/chinchulin.jpeg",
				titulo: "Chinchulín X 1 Kg.",
				precioActual: "4500",
				precioViejo: "",
				oferta: false,
			},
		],
		pescados: [
			{
				id: 25,
				img: "./img/alimentos/CarnesYpescados/Pescados/cornalitos.jpeg",
				titulo: "Cornalitos X 500 Gr.",
				precioActual: "3400",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 26,
				img: "./img/alimentos/CarnesYpescados/Pescados/filet_de_brotola.jpeg",
				titulo: "Filet de Brotola X 1 Kg.",
				precioActual: "9000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 27,
				img: "./img/alimentos/CarnesYpescados/Pescados/filet_de_merluza.jpeg",
				titulo: "Filet de Merluza Natural X 500 Gr.",
				precioActual: "8990",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 28,
				img: "./img/alimentos/CarnesYpescados/Pescados/filet_de_merluza_rebosado.jpeg",
				titulo: "Filet de Merluza Rebozado X 800 Gr.",
				precioActual: "7750",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 29,
				img: "./img/alimentos/CarnesYpescados/Pescados/filet_de_trucha.jpeg",
				titulo: "Filet de Trucha X 1 kG.",
				precioActual: "23500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 30,
				img: "./img/alimentos/CarnesYpescados/Pescados/filet_gatuzo.jpeg",
				titulo: "Filet Gatuzo X 1 Kg.",
				precioActual: "10000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 31,
				img: "./img/alimentos/CarnesYpescados/Pescados/kanikama.jpeg",
				titulo: "Kanikama X 1 Kg.",
				precioActual: "18000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 32,
				img: "./img/alimentos/CarnesYpescados/Pescados/langostinos_pelados.jpeg",
				titulo: "Langostinos Pelados X 250 Gr.",
				precioActual: "7080",
				precioViejo: "",
				oferta: false,
			},
		],
		panadería: [
			{
				id: 33,
				img: "./img/alimentos/panaderia/alfajor_chocolate.jpeg",
				titulo: "Alfajor de Chocolate X 60 Gr.",
				precioActual: "890",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 34,
				img: "./img/alimentos/panaderia/alfajor_maicena.jpeg",
				titulo: "Alfajor de Maicena X 6 Ud.",
				precioActual: "4800",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 35,
				img: "./img/alimentos/panaderia/bizcochuelo_valente.jpeg",
				titulo: "Bizcochuelo Valente 3 Capas Vainilla X 750 Gr",
				precioActual: "7500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 36,
				img: "./img/alimentos/panaderia/bocadito_higo_nuez.jpeg",
				titulo: "Bocaditos de Higo con Nuez X 165 Gr.",
				precioActual: "3290",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 37,
				img: "./img/alimentos/panaderia/croissant.jpeg",
				titulo: "Croissant X 3 Ud.",
				precioActual: "3150",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 38,
				img: "./img/alimentos/panaderia/donut_clasica.jpeg",
				titulo: "Donut Clásica X 1 Ud.",
				precioActual: "780",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 39,
				img: "./img/alimentos/panaderia/empanada_carne.png",
				titulo: "Empanada de Carne X 2 Ud.",
				precioActual: "2350",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 40,
				img: "./img/alimentos/panaderia/empanada_carne.png",
				titulo: "Empanada de Carne X 6 Ud.",
				precioActual: "6700",
				precioViejo: "",
				oferta: false,
			},
		],
	},
	bebidas: {
		cervezas: [
			{
				id: 41,
				img: "./img/bebidas/Cervezas/cerveza_stella.jpeg",
				titulo: "Cerveza Stella Artois Botella Retornable 975cc.",
				precioActual: "3975",
				precioViejo: "4500",
				oferta: true,
			},
			{
				id: 42,
				img: "./img/bebidas/Cervezas/amber_lager_patagonia.jpeg",
				titulo: "Cerveza Roja Patagonia Amber Lager 730cc.",
				precioActual: "3948.75",
				precioViejo: "4400",
				oferta: true,
			},
			{
				id: 43,
				img: "./img/bebidas/Cervezas/cerveza_brahma.jpeg",
				titulo: "Cerveza Rubia Brahma 1L.",
				precioActual: "1920",
				precioViejo: "2400",
				oferta: true,
			},
			{
				id: 44,
				img: "./img/bebidas/Cervezas/cerveza_corona.jpeg",
				titulo: "Cerveza Rubia Corona 1L.",
				precioActual: "4500",
				precioViejo: "5500",
				oferta: true,
			},
			{
				id: 45,
				img: "./img/bebidas/Cervezas/cerveza_stella_noire.jpeg",
				titulo: "Cerveza Negra Stella Artois Noire 1L.",
				precioActual: "5000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 46,
				img: "./img/bebidas/Cervezas/cerveza_andes_negra.jpeg",
				titulo: "Cerveza Andes Negra 1L.",
				precioActual: "4200",
				precioViejo: "4800",
				oferta: true,
			},
			{
				id: 47,
				img: "./img/bebidas/Cervezas/cerveza_budweiser.jpeg",
				titulo: "Cerveza Rubia Budweiser 1L.",
				precioActual: "2540",
				precioViejo: "3175",
				oferta: true,
			},
			{
				id: 48,
				img: "./img/bebidas/Cervezas/cerveza_imperial.jpeg",
				titulo: "Cerveza Rubia Imperial Botella Retornable 1L.",
				precioActual: "4000",
				precioViejo: "",
				oferta: false,
			},
		],

		vinos: [
			{
				id: 49,
				img: "./img/bebidas/vinos/vino_tinto_alma_mora.jpeg",
				titulo: "Vino Tinto Malbec Alma Mora 750ml.",
				precioActual: "6585",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 50,
				img: "./img/bebidas/vinos/vino_tinto_elementos.jpeg",
				titulo: "Vino Tinto Malbec Elementos 750ml.",
				precioActual: "5750",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 51,
				img: "./img/bebidas/vinos/vino_tinto_los_arboles.jpeg",
				titulo: "Vino Tinto Malbec Los Arboles 750ml.",
				precioActual: "5469",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 52,
				img: "./img/bebidas/vinos/vino_tinto_emilia.jpeg",
				titulo: "Vino Tinto Malbec Emilia 750ml.",
				precioActual: "7150",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 53,
				img: "./img/bebidas/vinos/vino_blanco_cosecha_tardia.jpeg",
				titulo: "Vino Blanco Cosecha Tardía 750ml.",
				precioActual: "4989",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 54,
				img: "./img/bebidas/vinos/vino_blanco_cosecha_alaris.jpeg",
				titulo: "Vino Blanco Cosecha Alaris 750ml.",
				precioActual: "4729",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 55,
				img: "./img/bebidas/vinos/vino_blanco_torrontes_elementos.jpeg",
				titulo: "Vino Blanco Torrontés Elementos 750ml.",
				precioActual: "5750",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 56,
				img: "./img/bebidas/vinos/vino_blanco_dilema.jpeg",
				titulo: "Vino Blanco Dulce Natural Dilema 750ml.",
				precioActual: "4540",
				precioViejo: "",
				oferta: false,
			},
		],

		aperitivos: [
			{
				id: 57,
				img: "./img/bebidas/aperitivos/fernet_branca.jpeg",
				titulo: "Fernet Branca 750cc.",
				precioActual: "12400",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 58,
				img: "./img/bebidas/aperitivos/gancia.jpeg",
				titulo: "Gancia Americano 950cc.",
				precioActual: "5579",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 59,
				img: "./img/bebidas/aperitivos/cinzano_vermouth.jpeg",
				titulo: "Cinzano Vermouth Rosso 1L.",
				precioActual: "6590",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 60,
				img: "./img/bebidas/aperitivos/aperol.jpeg",
				titulo: "Aperol 750cc.",
				precioActual: "9690",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 61,
				img: "./img/bebidas/aperitivos/campari.jpeg",
				titulo: "Campari Bitter 750cc.",
				precioActual: "10290",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 62,
				img: "./img/bebidas/aperitivos/fernet_buhero.jpeg",
				titulo: "Fernet Buhero Negro 700cc.",
				precioActual: "6405",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 63,
				img: "./img/bebidas/aperitivos/dr_lemon.jpeg",
				titulo: "Dr. Lemon Vodka 1L.",
				precioActual: "2430",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 64,
				img: "./img/bebidas/aperitivos/fernet_branca_menta.jpeg",
				titulo: "Fernet Branca Menta 750cc.",
				precioActual: "12400",
				precioViejo: "",
				oferta: false,
			},
		],

		bebidas_Blancas: [
			{
				id: 65,
				img: "./img/bebidas/bebidasBlancas/smirnoff_comun.jpeg",
				titulo: "Vodka Smirnoff 700cc.",
				precioActual: "7999",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 66,
				img: "./img/bebidas/bebidasBlancas/gin_gordon.jpeg",
				titulo: "Gin Gordon´s 700cc .",
				precioActual: "14625",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 67,
				img: "./img/bebidas/bebidasBlancas/smirnoff_frutas_tropicales.jpeg",
				titulo: "Vodka Smirnoff Tropical Fruits 700cc.",
				precioActual: "9349",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 68,
				img: "./img/bebidas/bebidasBlancas/red_label.jpeg",
				titulo: "Whisky Johnnie Walker Red Label 750ml.",
				precioActual: "40955",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 69,
				img: "./img/bebidas/bebidasBlancas/amarula.jpeg",
				titulo: "Licor Amarula 750cc.",
				precioActual: "30559",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 70,
				img: "./img/bebidas/bebidasBlancas/black_label.jpeg",
				titulo: "Whisky Johnnie Walker Black Label 750ml.",
				precioActual: "65569",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 71,
				img: "./img/bebidas/bebidasBlancas/sernova.jpeg",
				titulo: "Vodka Sernova 700cc.",
				precioActual: "7600",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 72,
				img: "./img/bebidas/bebidasBlancas/beefeater_pink.jpeg",
				titulo: "Gin Beefeater London Pink 700cc",
				precioActual: "31735",
				precioViejo: "",
				oferta: false,
			},
		],

		gaseosas: [
			{
				id: 73,
				img: "./img/bebidas/gaseosas/coca_zero.jpeg",
				titulo: "Gaseosa Coca Cola Zero 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 74,
				img: "./img/bebidas/gaseosas/coca_original.jpeg",
				titulo: "Gaseosa Coca Cola Sabor Original 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 75,
				img: "./img/bebidas/gaseosas/sprite.jpeg",
				titulo: "Gaseosa Lima Limón Sprite 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 76,
				img: "./img/bebidas/gaseosas/sevenUp.jpeg",
				titulo: "Gaseosa Lima Limón 7 Up 2.25Lts.",
				precioActual: "2262",
				precioViejo: "3480",
				oferta: true,
			},
			{
				id: 77,
				img: "./img/bebidas/gaseosas/pepsi.jpeg",
				titulo: "Gaseosa Cola Pepsi 2.25Lts.",
				precioActual: "1640",
				precioViejo: "2523.08",
				oferta: true,
			},
			{
				id: 78,
				img: "./img/bebidas/gaseosas/pepsi_black.jpeg",
				titulo: "Gaseosa Cola Pepsi Black 2.25Lts.",
				precioActual: "1273,35",
				precioViejo: "1959",
				oferta: true,
			},
			{
				id: 79,
				img: "./img/bebidas/gaseosas/scheweppes.jpeg",
				titulo: "Gaseosa Pomelo Schweppes Zero 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 80,
				img: "./img/bebidas/gaseosas/fanta.jpeg",
				titulo: "Gaseosa Naranja Fanta 2.25Lts",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
		],
	},
	hogar: {
		muebles: [
			{
				id: 156,
				img: "./img/alimentos/panaderia/tarta_tofi.jpeg",
				titulo: "Mesa de Luz",
				precioActual: "15000",
				precioViejo: "",
				oferta: false,
			},
		],
	},
};

import { formatearPrecio } from "./util.js"; // Importamos la funcion para formatea el precio

// Contendor de tarjetas de productos DOM
const contenedorProductos = document.querySelector(
	"#contenedor-tarjeta-producto"
);

const botonInicio = document.querySelector("#boton-inicio");

let numeritoCarrito = document.querySelector("#numerito");

//Botones Menu Principal
const botonesMenuPrincipal = document.querySelectorAll(".boton-menu");

// Botones subCategorias DOM
const botonesSubMenu = document.querySelectorAll(".btn-categoria");

function crearTarjetaProducto(producto) {
	const divCard = document.createElement("div");
	divCard.classList.add("tarjeta-producto");

	const divImagen = document.createElement("div");
	divImagen.classList.add("contenedor-imagen-producto");

	const imagenProducto = document.createElement("img");
	imagenProducto.src = producto.img;
	imagenProducto.alt = producto.titulo;
	divImagen.appendChild(imagenProducto);

	if (producto.oferta) {
		const spanOferta = document.createElement("span");
		spanOferta.classList.add("oferta");
		spanOferta.textContent = "Oferta";
		divImagen.appendChild(spanOferta);
	}

	const divInfo = document.createElement("div");
	divInfo.classList.add("contenedor-info-producto");

	const tituloProducto = document.createElement("h3");
	tituloProducto.textContent = producto.titulo;
	tituloProducto.classList.add("producto-titulo");
	divInfo.appendChild(tituloProducto);

	const divPrecio = document.createElement("div");
	divPrecio.classList.add("contenedor-producto-precio");

	const precioActual = document.createElement("span");
	precioActual.classList.add("producto-precio-actual");
	precioActual.textContent = `Precio: $${formatearPrecio(
		producto.precioActual
	)}`;
	divPrecio.appendChild(precioActual);

	if (producto.precioViejo) {
		const precioViejoContenedor = document.createElement("span");

		// Agregar la palabra "Antes:"
		const textoAntes = document.createElement("span");
		textoAntes.textContent = "Antes: ";
		textoAntes.classList.add("producto-precio-viejo");
		precioViejoContenedor.appendChild(textoAntes);

		// Crear el precio viejo y agregar el subrayado
		const subrayadoPrecioViejo = document.createElement("span");
		subrayadoPrecioViejo.classList.add("precio-viejo-subrayado");
		subrayadoPrecioViejo.textContent = `$${formatearPrecio(
			producto.precioViejo
		)}`;
		precioViejoContenedor.appendChild(subrayadoPrecioViejo);

		// Agregar el contenedor al div del precio
		divPrecio.appendChild(precioViejoContenedor);
	}

	divInfo.appendChild(divPrecio);

	const botonAgregarCarrito = document.createElement("button");
	botonAgregarCarrito.classList.add("producto-agregar");
	botonAgregarCarrito.textContent = "Agregar al Carrito";
	botonAgregarCarrito.id = producto.id;

	divInfo.appendChild(botonAgregarCarrito);

	divCard.appendChild(divImagen);
	divCard.appendChild(divInfo);

	return divCard;
}

// Función para cargar todos los productos
function cargarProductos(categoriaPrincipal, subCategoriaSeleccionada) {
	contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos productos

	const productosCategoria =
		productos[categoriaPrincipal]?.[subCategoriaSeleccionada];

	if (productosCategoria) {
		const tituloCategoria = document.createElement("h2");
		tituloCategoria.textContent =
			subCategoriaSeleccionada
				.replace(/_/g, " ") // Reemplaza los guiones bajos por espacios
				.charAt(0)
				.toUpperCase() +
			subCategoriaSeleccionada.replace(/_/g, " ").slice(1);
		tituloCategoria.classList.add("titulo-categoria");
		contenedorProductos.appendChild(tituloCategoria);

		productosCategoria.forEach((producto) => {
			const tarjeta = crearTarjetaProducto(producto);
			contenedorProductos.appendChild(tarjeta);
		});
	} else {
		contenedorProductos.innerHTML = `<h2 class='titulo-categoria'>No hay productos disponibles para esta categoría</h2>`;
	}
}

// Función para cargar productos con oferta
function cargarOfertas() {
	contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos productos

	let productosConOferta = [];

	// Recorrer todas las categorías y subcategorías para encontrar productos con ofertas
	for (const categoria in productos) {
		for (const subCategoria in productos[categoria]) {
			const productosSubCategoria = productos[categoria][subCategoria];

			productosSubCategoria.forEach((producto) => {
				if (producto.oferta) {
					// Si tiene una oferta
					productosConOferta.push(producto);
				}
			});
		}
	}

	if (productosConOferta.length > 0) {
		// Si hay productos con oferta, los mostramos
		productosConOferta.forEach((producto) => {
			const tarjeta = crearTarjetaProducto(producto);
			contenedorProductos.appendChild(tarjeta);
		});

		// Asegurarse de que los botones "Agregar al carrito" tengan sus listeners de eventos
		actualizarBotonesAgregar();
	} else {
		contenedorProductos.innerHTML = `<h2 class='titulo-categoria'>No hay productos en oferta actualmente.</h2>`;
	}
}

function activarBotonMenu(boton) {
	//Selecciono todos los list item del menu principal para luego acceder a los botones principales (Alimentos,Bebidas,
	// Hogar,etc)
	botonesMenuPrincipal.forEach((boton) => {
		boton.classList.remove("active");
	});

	boton.classList.add("active");
}

// Por cada boton de los subMenus escuchamos el evento y accedemos al atributo
// que nos retorna el valor que tiene el boton (la subCategoria)
botonesSubMenu.forEach((boton) => {
	boton.addEventListener("click", () => {
		const subCategoria = boton.getAttribute("data-Subcategoria");
		const botonCategoriaPrincipal =
			boton.parentElement.parentElement.previousElementSibling;
		// Pasamos por parametro la categoria principal y la subcategoria para recorrer el array y cargar los productos
		cargarProductos(
			botonCategoriaPrincipal.getAttribute("data-categoria"),
			subCategoria
		);
		activarBotonMenu(botonCategoriaPrincipal);
		actualizarBotonesAgregar();
	});
});

function actualizarBotonesAgregar() {
	const botonesAgregarCarrito =
		document.querySelectorAll(".producto-agregar");

	botonesAgregarCarrito.forEach((boton) => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let productosEnCarrito = [];
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
	productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
	productosEnCarrito = [];
}
// Llamar a actualizarNumerito después de cargar el carrito para actualizar el contador
actualizarNumerito();

// Función agregar al carrito
function agregarAlCarrito(e) {
	const idBoton = e.currentTarget.id;
	let productoSeleccionado = null;

	// Buscar en todas las categorías principales
	for (const categoria in productos) {
		for (const subCategoria in productos[categoria]) {
			const productosSubCategoria = productos[categoria][subCategoria];

			const producto = productosSubCategoria.find(
				(producto) => String(producto.id) === String(idBoton)
			);

			if (producto) {
				productoSeleccionado = producto;
				break;
			}
		}
		if (productoSeleccionado) break;
	}

	// Si se encontró el producto, agregarlo al carrito
	if (productoSeleccionado) {
		const productoEnCarrito = productosEnCarrito.find(
			(p) => p.id === productoSeleccionado.id
		);

		if (productoEnCarrito) {
			productoEnCarrito.cantidad += 1;
		} else {
			productosEnCarrito.push({ ...productoSeleccionado, cantidad: 1 });
		}

		localStorage.setItem(
			"productos-en-carrito",
			JSON.stringify(productosEnCarrito)
		);

		actualizarNumerito();
	}
}

// Funcion para actualizar el numero del carrito
function actualizarNumerito() {
	let nuevoNumerito = productosEnCarrito.reduce(
		(acc, producto) => acc + producto.cantidad,
		0
	);

	// Actualizamos el contador de productos en el carrito
	numeritoCarrito.innerHTML = nuevoNumerito;
}

// Funcion para formatear el numero y agregar decimales

// Escuchador de evento para cuando se haga click en el boton de inicio Cargar productos en ofertas
botonInicio.addEventListener("click", cargarOfertas);

// Al cargar la página por defecto cargar ofertas y marcar el boton de inicio
cargarOfertas();
botonInicio.addEventListener("click", () => activarBotonMenu(botonInicio));
