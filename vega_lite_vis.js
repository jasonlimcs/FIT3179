var vg_1 = "aus_retention_rates.vl.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "dumbbell.vl.json";
vegaEmbed("#equity", vg_2).then(function(result) {
	// Embedded dumbbell chart
}).catch(console.error);

var vg_3 = "dotplot.vl.json";
vegaEmbed("#dotplot", vg_3).then(function(result) {
    // Embedded dot plot
}).catch(console.error);