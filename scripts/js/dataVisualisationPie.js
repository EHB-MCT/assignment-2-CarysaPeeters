// This file contains the functions to visualise the data from retrievData.js using Chart.js
// There are calculations being made so the data can be visualised in a clear way

"use strict";

// The data is being imported
import { fetchData } from "./retrieveData.js";

// This function is being used to calculate the totals from the nutritional values
async function totalNutritions() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	// These are variables to store the total amounts of the nutrients
	let totaalEiwitten = 0;
	let totaalKoolhydraten = 0;
	let totaalVetten = 0;
	let totaalVezels = 0;
	let totaalIjzer = 0;
	let totaalZink = 0;
	let totaalCalcium = 0;
	let totaalB12 = 0;
	let totaalD3 = 0;
	let totaalOmega3 = 0;

	// There is an iteration over each row and the calculations for the total of each nutrient are being made
	data.forEach(function (row) {
		totaalEiwitten += row.proteïne;
		totaalKoolhydraten += row.koolhydraten;
		totaalVetten += row.vetten;
		totaalVezels += row.vezels;
		totaalIjzer += row.ijzer;
		totaalZink += row.zink;
		totaalCalcium += row.calcium;
		totaalB12 += row.b12;
		totaalD3 += row.d3;
		totaalOmega3 += row.omega3;
	});

	const nutrientLabels = ["Eiwitten (g)", "Koolhydraten (g)", "Vetten (g)", "Vezels (g)", "Ijzer (mg)", "Zink (mg)", "Calcium (mg)", "B12 (µg)", "D3 (µg)", "Omega-3 (g)"];

	const nutrientData = [totaalEiwitten, totaalKoolhydraten, totaalVetten, totaalVezels, totaalIjzer, totaalZink, totaalCalcium, totaalB12, totaalD3, totaalOmega3];

	generatePieChart(nutrientLabels, nutrientData);
}

// This function is being used to make the 'Total nutritional values' pie chart
function generatePieChart(labels, data) {
	const ctx = document.getElementById("myPieChart");

	new Chart(ctx, {
		type: "pie",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Totaal Voedingsstoffen",
					data: data,
					borderWidth: 1,
				},
			],
		},
		options: {},
	});
}

totalNutritions();