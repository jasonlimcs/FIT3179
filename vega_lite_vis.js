// Shared embed options: apply Fraunces to all chart titles
const embedOptions = {
    actions: false,
    config: {
        title: { font: 'Fraunces' }
    }
};

var vg_1 = "aus_retention_rates.vl.json";
vegaEmbed("#map", vg_1, embedOptions).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "dumbbell.vl.json";
vegaEmbed("#equity", vg_2, embedOptions).then(function(result) {
	// Embedded dumbbell chart
}).catch(console.error);

var vg_3 = "dotplot.vl.json";
vegaEmbed("#dotplot", vg_3, embedOptions).then(function(result) {
    // Embedded dot plot
}).catch(console.error);

var vg_4 = "stackedbarchart.vl.json";
vegaEmbed("#stacked-bar-chart", vg_4, embedOptions).then(function(result) {
    // Embedded stacked bar chart
}).catch(console.error);

var vg_5 = "remoteness.vl.json";
vegaEmbed("#remoteness", vg_5, embedOptions).then(function(result) {
    // Embedded remoteness chart
}).catch(console.error);