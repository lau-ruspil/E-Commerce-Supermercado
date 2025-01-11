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
				precioActual: "11500",
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

		almacén: [
			{
				id: 41,
				img: "./img/alimentos/almacen/tallarines_lucchetti.jpeg",
				titulo: "Fideos Tallarín Lucchetti 500 Grs.",
				precioActual: "1195",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 42,
				img: "./img/alimentos/almacen/tirabuzon_lucchetti.jpeg",
				titulo: "Fideos Tirabuzón Lucchetti 500 Grs.",
				precioActual: "1189",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 43,
				img: "./img/alimentos/almacen/aceite_cocinero.jpeg",
				titulo: "Aceite de Girasol Cocinero 900cc.",
				precioActual: "2175",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 44,
				img: "./img/alimentos/almacen/arroz_gallo.jpeg",
				titulo: "Arroz Gallo Oro en Bolsa 1 Kg.",
				precioActual: "2500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 45,
				img: "./img/alimentos/almacen/Sal_celusal.jpeg",
				titulo: "Sal Fina Celusal Paquete 500 Grs.",
				precioActual: "1259",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 46,
				img: "./img/alimentos/almacen/mayonesa.jpeg",
				titulo: "Mayonesa Hellmanns Liviana 475 Grs.",
				precioActual: "2005",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 47,
				img: "./img/alimentos/almacen/pizza_harina.jpeg",
				titulo: "Harina Pureza Especial para Pizzas 1 Kg.",
				precioActual: "1460",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 48,
				img: "./img/alimentos/almacen/pure_de_tomate.jpeg",
				titulo: "Puré de Tomate Arcor Brik 520 Grs.",
				precioActual: "945",
				precioViejo: "",
				oferta: false,
			},
		],

		lácteos_y_Frescos: [
			{
				id: 49,
				img: "./img/alimentos/lacteos/leche_la_serenisima_sachet.jpeg",
				titulo: "Leche La Serenísima Liviana 1L",
				precioActual: "1386",
				precioViejo: "2079",
				oferta: true,
			},
			{
				id: 50,
				img: "./img/alimentos/lacteos/dulce_de_leche_la_serenisima.jpeg",
				titulo: "Dulce de Leche Clásico La Serenísima 400 Grs.",
				precioActual: "2118",
				precioViejo: "2824",
				oferta: true,
			},
			{
				id: 51,
				img: "./img/alimentos/lacteos/manteca_la_serenisima.jpeg",
				titulo: "Manteca La Serenísima 200 Grs.",
				precioActual: "3405",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 52,
				img: "./img/alimentos/lacteos/queso_crema_la_paulina_tradicional.jpeg",
				titulo: "Queso Crema La Paulina Tradicional 290 Grs.",
				precioActual: "2475",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 53,
				img: "./img/alimentos/lacteos/queso_finlandia.jpeg",
				titulo: "Queso Untable Finlandia Light 290 Grs.",
				precioActual: "3011",
				precioViejo: "4015",
				oferta: true,
			},
			{
				id: 54,
				img: "./img/alimentos/lacteos/yogur_frutilla_bebible.jpeg",
				titulo: "Yogur Bebible Frutilla La Serenísima Clásico 900 Grs.",
				precioActual: "2200",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 55,
				img: "./img/alimentos/lacteos/huevos_blancos.jpeg",
				titulo: "Huevos Blancos El Mercado X 6 Ud.",
				precioActual: "1390",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 56,
				img: "./img/alimentos/lacteos/queso_blanco_la_serenisima.jpeg",
				titulo: "Queso Blanco Original La Serenísima Clásico 290 Grs.",
				precioActual: "2925",
				precioViejo: "",
				oferta: false,
			},
		],

		congelados: [
			{
				id: 57,
				img: "./img/alimentos/lacteos/leche_la_serenisima_sachet.jpeg",
				titulo: "Leche La Serenísima Liviana 1L",
				precioActual: "1386",
				precioViejo: "2079",
				oferta: true,
			},
			{
				id: 58,
				img: "./img/alimentos/lacteos/dulce_de_leche_la_serenisima.jpeg",
				titulo: "Dulce de Leche Clásico La Serenísima 400 Grs.",
				precioActual: "2118",
				precioViejo: "2824",
				oferta: true,
			},
			{
				id: 59,
				img: "./img/alimentos/lacteos/manteca_la_serenisima.jpeg",
				titulo: "Manteca La Serenísima 200 Grs.",
				precioActual: "3405",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 60,
				img: "./img/alimentos/lacteos/queso_crema_la_paulina_tradicional.jpeg",
				titulo: "Queso Crema La Paulina Tradicional 290 Grs.",
				precioActual: "2475",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 61,
				img: "./img/alimentos/lacteos/queso_finlandia.jpeg",
				titulo: "Queso Untable Finlandia Light 290 Grs.",
				precioActual: "3011.25",
				precioViejo: "4015",
				oferta: false,
			},
			{
				id: 62,
				img: "./img/alimentos/lacteos/yogur_frutilla_bebible.jpeg",
				titulo: "Yogur Bebible Frutilla La Serenísima Clásico 900 Grs.",
				precioActual: "2200",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 63,
				img: "./img/alimentos/lacteos/huevos_blancos.jpeg",
				titulo: "Huevos Blancos El Mercado X 6 Ud.",
				precioActual: "1390",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 64,
				img: "./img/alimentos/lacteos/queso_blanco_la_serenisima.jpeg",
				titulo: "Queso Blanco Original La Serenísima Clásico 290 Grs.",
				precioActual: "2925",
				precioViejo: "",
				oferta: false,
			},
		],
	},
	bebidas: {
		cervezas: [
			{
				id: 65,
				img: "./img/bebidas/Cervezas/cerveza_stella.jpeg",
				titulo: "Cerveza Stella Artois Botella Retornable 975cc.",
				precioActual: "3975",
				precioViejo: "4500",
				oferta: true,
			},
			{
				id: 66,
				img: "./img/bebidas/Cervezas/amber_lager_patagonia.jpeg",
				titulo: "Cerveza Roja Patagonia Amber Lager 730cc.",
				precioActual: "3948.75",
				precioViejo: "4400",
				oferta: true,
			},
			{
				id: 67,
				img: "./img/bebidas/Cervezas/cerveza_brahma.jpeg",
				titulo: "Cerveza Rubia Brahma 1L.",
				precioActual: "1920",
				precioViejo: "2400",
				oferta: true,
			},
			{
				id: 68,
				img: "./img/bebidas/Cervezas/cerveza_corona.jpeg",
				titulo: "Cerveza Rubia Corona 1L.",
				precioActual: "4500",
				precioViejo: "5500",
				oferta: true,
			},
			{
				id: 69,
				img: "./img/bebidas/Cervezas/cerveza_stella_noire.jpeg",
				titulo: "Cerveza Negra Stella Artois Noire 1L.",
				precioActual: "5000",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 70,
				img: "./img/bebidas/Cervezas/cerveza_andes_negra.jpeg",
				titulo: "Cerveza Andes Negra 1L.",
				precioActual: "4200",
				precioViejo: "4800",
				oferta: true,
			},
			{
				id: 71,
				img: "./img/bebidas/Cervezas/cerveza_budweiser.jpeg",
				titulo: "Cerveza Rubia Budweiser 1L.",
				precioActual: "2540",
				precioViejo: "3175",
				oferta: true,
			},
			{
				id: 72,
				img: "./img/bebidas/Cervezas/cerveza_imperial.jpeg",
				titulo: "Cerveza Rubia Imperial Botella Retornable 1L.",
				precioActual: "4000",
				precioViejo: "",
				oferta: false,
			},
		],

		vinos: [
			{
				id: 73,
				img: "./img/bebidas/vinos/vino_tinto_alma_mora.jpeg",
				titulo: "Vino Tinto Malbec Alma Mora 750ml.",
				precioActual: "6585",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 74,
				img: "./img/bebidas/vinos/vino_tinto_elementos.jpeg",
				titulo: "Vino Tinto Malbec Elementos 750ml.",
				precioActual: "5750",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 75,
				img: "./img/bebidas/vinos/vino_tinto_los_arboles.jpeg",
				titulo: "Vino Tinto Malbec Los Arboles 750ml.",
				precioActual: "5469",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 76,
				img: "./img/bebidas/vinos/vino_tinto_emilia.jpeg",
				titulo: "Vino Tinto Malbec Emilia 750ml.",
				precioActual: "7150",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 77,
				img: "./img/bebidas/vinos/vino_blanco_cosecha_tardia.jpeg",
				titulo: "Vino Blanco Cosecha Tardía 750ml.",
				precioActual: "4989",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 78,
				img: "./img/bebidas/vinos/vino_blanco_cosecha_alaris.jpeg",
				titulo: "Vino Blanco Cosecha Alaris 750ml.",
				precioActual: "4729",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 79,
				img: "./img/bebidas/vinos/vino_blanco_torrontes_elementos.jpeg",
				titulo: "Vino Blanco Torrontés Elementos 750ml.",
				precioActual: "5750",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 80,
				img: "./img/bebidas/vinos/vino_blanco_dilema.jpeg",
				titulo: "Vino Blanco Dulce Natural Dilema 750ml.",
				precioActual: "4540",
				precioViejo: "",
				oferta: false,
			},
		],

		aperitivos: [
			{
				id: 81,
				img: "./img/bebidas/aperitivos/fernet_branca.jpeg",
				titulo: "Fernet Branca 750cc.",
				precioActual: "12400",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 82,
				img: "./img/bebidas/aperitivos/gancia.jpeg",
				titulo: "Gancia Americano 950cc.",
				precioActual: "5579",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 83,
				img: "./img/bebidas/aperitivos/cinzano_vermouth.jpeg",
				titulo: "Cinzano Vermouth Rosso 1L.",
				precioActual: "6590",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 84,
				img: "./img/bebidas/aperitivos/aperol.jpeg",
				titulo: "Aperol 750cc.",
				precioActual: "9690",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 85,
				img: "./img/bebidas/aperitivos/campari.jpeg",
				titulo: "Campari Bitter 750cc.",
				precioActual: "10290",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 86,
				img: "./img/bebidas/aperitivos/fernet_buhero.jpeg",
				titulo: "Fernet Buhero Negro 700cc.",
				precioActual: "6405",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 87,
				img: "./img/bebidas/aperitivos/dr_lemon.jpeg",
				titulo: "Dr. Lemon Vodka 1L.",
				precioActual: "2430",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 88,
				img: "./img/bebidas/aperitivos/fernet_branca_menta.jpeg",
				titulo: "Fernet Branca Menta 750cc.",
				precioActual: "12400",
				precioViejo: "",
				oferta: false,
			},
		],

		bebidas_Blancas: [
			{
				id: 89,
				img: "./img/bebidas/bebidasBlancas/smirnoff_comun.jpeg",
				titulo: "Vodka Smirnoff 700cc.",
				precioActual: "7999",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 90,
				img: "./img/bebidas/bebidasBlancas/gin_gordon.jpeg",
				titulo: "Gin Gordon´s 700cc .",
				precioActual: "14625",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 91,
				img: "./img/bebidas/bebidasBlancas/smirnoff_frutas_tropicales.jpeg",
				titulo: "Vodka Smirnoff Tropical Fruits 700cc.",
				precioActual: "9349",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 92,
				img: "./img/bebidas/bebidasBlancas/red_label.jpeg",
				titulo: "Whisky Johnnie Walker Red Label 750ml.",
				precioActual: "40955",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 93,
				img: "./img/bebidas/bebidasBlancas/amarula.jpeg",
				titulo: "Licor Amarula 750cc.",
				precioActual: "30559",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 94,
				img: "./img/bebidas/bebidasBlancas/black_label.jpeg",
				titulo: "Whisky Johnnie Walker Black Label 750ml.",
				precioActual: "65569",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 95,
				img: "./img/bebidas/bebidasBlancas/sernova.jpeg",
				titulo: "Vodka Sernova 700cc.",
				precioActual: "7600",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 96,
				img: "./img/bebidas/bebidasBlancas/beefeater_pink.jpeg",
				titulo: "Gin Beefeater London Pink 700cc",
				precioActual: "31735",
				precioViejo: "",
				oferta: false,
			},
		],

		gaseosas: [
			{
				id: 97,
				img: "./img/bebidas/gaseosas/coca_zero.jpeg",
				titulo: "Gaseosa Coca Cola Zero 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 98,
				img: "./img/bebidas/gaseosas/coca_original.jpeg",
				titulo: "Gaseosa Coca Cola Sabor Original 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 99,
				img: "./img/bebidas/gaseosas/sprite.jpeg",
				titulo: "Gaseosa Lima Limón Sprite 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 100,
				img: "./img/bebidas/gaseosas/sevenUp.jpeg",
				titulo: "Gaseosa Lima Limón 7 Up 2.25Lts.",
				precioActual: "2262",
				precioViejo: "3480",
				oferta: true,
			},
			{
				id: 101,
				img: "./img/bebidas/gaseosas/pepsi.jpeg",
				titulo: "Gaseosa Cola Pepsi 2.25Lts.",
				precioActual: "1640",
				precioViejo: "2523.08",
				oferta: true,
			},
			{
				id: 102,
				img: "./img/bebidas/gaseosas/pepsi_black.jpeg",
				titulo: "Gaseosa Cola Pepsi Black 2.25Lts.",
				precioActual: "1273.35",
				precioViejo: "1959",
				oferta: true,
			},
			{
				id: 103,
				img: "./img/bebidas/gaseosas/scheweppes.jpeg",
				titulo: "Gaseosa Pomelo Schweppes Zero 2.25Lts.",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
			{
				id: 104,
				img: "./img/bebidas/gaseosas/fanta.jpeg",
				titulo: "Gaseosa Naranja Fanta 2.25Lts",
				precioActual: "2850",
				precioViejo: "3800",
				oferta: true,
			},
		],

		aguas: [
			{
				id: 105,
				img: "./img/bebidas/aguas/agua_bidon_villa_del_sur.jpeg",
				titulo: "Agua de Mesa Sin Gas Villa del Sur Bidón 6.2Lts.",
				precioActual: "3525",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 106,
				img: "./img/bebidas/aguas/aquarius_pera.jpeg",
				titulo: "Agua Saborizada de Pera Aquarius 2.25Lts.",
				precioActual: "1612",
				precioViejo: "2150",
				oferta: true,
			},
			{
				id: 107,
				img: "./img/bebidas/aguas/agua_villa_vicencio.jpeg",
				titulo: "Agua Mineral Sin Gas Villavicencio 2.25Lts.",
				precioActual: "1326",
				precioViejo: "1989",
				oferta: true,
			},
			{
				id: 108,
				img: "./img/bebidas/aguas/agua_villa_del_sur.jpeg",
				titulo: "Agua Mineral Sin Gas Villa del Sur 2.25Lts.",
				precioActual: "1650",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 109,
				img: "./img/bebidas/aguas/aquarius_manzana.jpeg",
				titulo: "Agua Saborizada de Manzana Aquarius 2.25Lts.",
				precioActual: "1612.50",
				precioViejo: "2150",
				oferta: true,
			},
			{
				id: 110,
				img: "./img/bebidas/aguas/levite_pomelo.jpeg",
				titulo: "Agua Saborizada de Pomelo Levité 2.25Lts.",
				precioActual: "2260",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 111,
				img: "./img/bebidas/aguas/agua_glaciar.jpeg",
				titulo: "Agua Mineral Sin Gas Glaciar 2.25Lts.",
				precioActual: "1394.25",
				precioViejo: "2145",
				oferta: true,
			},
			{
				id: 112,
				img: "./img/bebidas/aguas/levite_manzana.jpeg",
				titulo: "Agua Saborizada de Manzana Levité 2.25Lts",
				precioActual: "2259",
				precioViejo: "",
				oferta: false,
			},
		],

		jugos: [
			{
				id: 113,
				img: "./img/bebidas/jugos/clight_naranja_dulce.jpeg",
				titulo: "Jugo en Polvo Clight Naranja Dulce 7.5 Grs.",
				precioActual: "250.67",
				precioViejo: "376",
				oferta: true,
			},
			{
				id: 114,
				img: "./img/bebidas/jugos/clight_pomelo_rosado.jpeg",
				titulo: "Jugo en Polvo Clight Pomelo Rosado 8 Grs.",
				precioActual: "250.67",
				precioViejo: "376",
				oferta: true,
			},
			{
				id: 115,
				img: "./img/bebidas/jugos/clight_limonada.jpeg",
				titulo: "Jugo en Polvo Clight Limonada 8 Grs.",
				precioActual: "250.67",
				precioViejo: "376",
				oferta: true,
			},
			{
				id: 116,
				img: "./img/bebidas/jugos/clight_anana.jpeg",
				titulo: "Jugo en Polvo Clight Ananá 8 Grs.",
				precioActual: "250.67",
				precioViejo: "376",
				oferta: true,
			},
			{
				id: 117,
				img: "./img/bebidas/jugos/clight_naranja_durazno.jpeg",
				titulo: "Jugo en Polvo Clight Naranja Durazno 7.5 Grs.",
				precioActual: "250.67",
				precioViejo: "376",
				oferta: true,
			},
			{
				id: 118,
				img: "./img/bebidas/jugos/tang_naranja_dulce.jpeg",
				titulo: "Jugo en Polvo Tang Naranja Dulce 15 Grs.",
				precioActual: "256",
				precioViejo: "384",
				oferta: true,
			},
			{
				id: 119,
				img: "./img/bebidas/jugos/tang_naranja_mango.jpeg",
				titulo: "Jugo en Polvo Tang Naranja Mango 15 Grs.",
				precioActual: "256",
				precioViejo: "384",
				oferta: true,
			},
			{
				id: 120,
				img: "./img/bebidas/jugos/tang_limonada_dulce.jpeg",
				titulo: "Jugo en Polvo Tang Limonada Dulce 15 Grs.",
				precioActual: "256",
				precioViejo: "384",
				oferta: true,
			},
		],

		bebidas_Isotónicas: [
			{
				id: 121,
				img: "./img/bebidas/bebidasIsotonicas/gatorade_manzana.jpeg",
				titulo: "Bebida Isotónica Gatorade Manzana 1.25Lts.",
				precioActual: "1639.20",
				precioViejo: "2040",
				oferta: true,
			},
			{
				id: 122,
				img: "./img/bebidas/bebidasIsotonicas/gatorade_frutas_tropicales.jpeg",
				titulo: "Bebida Isotónica Gatorade Frutas Tropicales 1.25Lts.",
				precioActual: "1639.20",
				precioViejo: "2040",
				oferta: true,
			},
			{
				id: 123,
				img: "./img/bebidas/bebidasIsotonicas/gatorade_cool_blue.jpeg",
				titulo: "Bebida Isotónica Gatorade Cool Blue 1.25Lts.",
				precioActual: "1639.20",
				precioViejo: "2040",
				oferta: true,
			},
			{
				id: 124,
				img: "./img/bebidas/bebidasIsotonicas/gatorade_naranja.jpeg",
				titulo: "Bebida Isotónica Gatorade Naranja 1.25Lts.",
				precioActual: "1639.20",
				precioViejo: "2040",
				oferta: true,
			},
			{
				id: 125,
				img: "./img/bebidas/bebidasIsotonicas/gatorade_uva.jpeg",
				titulo: "Bebida Isotónica Gatorade Uva 1.25Lts.",
				precioActual: "1639.20",
				precioViejo: "2040",
				oferta: true,
			},
			{
				id: 126,
				img: "./img/bebidas/bebidasIsotonicas/powerade_manzana.jpeg",
				titulo: "Bebida Isotónica Powerade Manzana 995cc.",
				precioActual: "1237.50",
				precioViejo: "1650",
				oferta: true,
			},
			{
				id: 127,
				img: "./img/bebidas/bebidasIsotonicas/powerade_frutas_tropicales.jpeg",
				titulo: "Bebida Isotónica Powerade Frutas Tropicales 995cc.",
				precioActual: "1237.50",
				precioViejo: "1650",
				oferta: true,
			},
			{
				id: 128,
				img: "./img/bebidas/bebidasIsotonicas/powerade_mountain_blast.jpeg",
				titulo: "Bebida Isotónica Powerade Mountain Blast 995cc.",
				precioActual: "1237.50",
				precioViejo: "1650",
				oferta: true,
			},
		],

		bebidas_Energizantes: [
			{
				id: 129,
				img: "./img/bebidas/bebidasEnergizantes/speed_473.jpeg",
				titulo: "Bebida Energizante Speed Lata 473cc.",
				precioActual: "2125",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 130,
				img: "./img/bebidas/bebidasEnergizantes/rockstar.jpeg",
				titulo: "Bebida Energizante Rockstar 500cc.",
				precioActual: "982.50",
				precioViejo: "1310",
				oferta: true,
			},
			{
				id: 131,
				img: "./img/bebidas/bebidasEnergizantes/speed_269.jpeg",
				titulo: "Bebida Energizante Speed Lata 269cc.",
				precioActual: "1390",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 132,
				img: "./img/bebidas/bebidasEnergizantes/monster_original.jpeg",
				titulo: "Bebida Energizante Monster Lata 473cc.",
				precioActual: "2300",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 133,
				img: "./img/bebidas/bebidasEnergizantes/monster_mango_loco.jpeg",
				titulo: "Bebida Energizante Monster Lata Sabor Mango Loco 473cc.",
				precioActual: "2299",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 134,
				img: "./img/bebidas/bebidasEnergizantes/red_bull.jpeg",
				titulo: "Bebida Energizante Red Bull Lata 355cc.",
				precioActual: "3490",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 135,
				img: "./img/bebidas/bebidasEnergizantes/monster_ultra_paradise.jpeg",
				titulo: "Bebida Energizante Monster Ultra Paradise Lata 473cc.",
				precioActual: "2300",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 136,
				img: "./img/bebidas/bebidasEnergizantes/monster_vr.jpeg",
				titulo: "Bebida Energizante Monster Vr Lata 473cc.",
				precioActual: "2300",
				precioViejo: "",
				oferta: false,
			},
		],

		espumantes_y_Sidras: [
			{
				id: 137,
				img: "./img/bebidas/espumantesSidras/sidra_1888.jpeg",
				titulo: "Sidra 1888 750cc.",
				precioActual: "7935",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 138,
				img: "./img/bebidas/espumantesSidras/clerico_fizz.jpeg",
				titulo: "Clericó Fizz Del Valle 720cc.",
				precioActual: "4400",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 139,
				img: "./img/bebidas/espumantesSidras/espumante_federico_de_alvear_extra_dulce.jpeg",
				titulo: "Espumante Federico de Alvear Extra Dulce 750cc.",
				precioActual: "5800",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 140,
				img: "./img/bebidas/espumantesSidras/espumante_fresita.jpeg",
				titulo: "Espumante Fresita 750cc.",
				precioActual: "9500",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 141,
				img: "./img/bebidas/espumantesSidras/espumante_salentein_rose.jpeg",
				titulo: "Espumante Salentein Brut Nature Rose 750cc.",
				precioActual: "12900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 142,
				img: "./img/bebidas/espumantesSidras/espumante_salentein.jpeg",
				titulo: "Espumante Salentein Brut Nature 750cc.",
				precioActual: "12900",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 143,
				img: "./img/bebidas/espumantesSidras/espumante_federico_de_alvear_extra_brut.jpeg",
				titulo: "Espumante Federico de Alvear Extra Brut 750cc.",
				precioActual: "5800",
				precioViejo: "",
				oferta: false,
			},
			{
				id: 144,
				img: "./img/bebidas/espumantesSidras/frizze.jpeg",
				titulo: "Frizze Blue Evolution 1L.",
				precioActual: "3099",
				precioViejo: "",
				oferta: false,
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
