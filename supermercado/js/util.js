export function formatearPrecio(precio) {
	// Convertimos el precio a número y luego lo formateamos
	return parseFloat(precio).toLocaleString("es-AR", {
		style: "decimal",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}
