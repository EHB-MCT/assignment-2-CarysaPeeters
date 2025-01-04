"use strict";

import { fetchData } from "./retrieveData.js";

const labels = [];
const calorieData = [];

async function caloriesPerDay() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	const dailyCalories = {};

	data.forEach(function (row) {
		const date = new Date(row.datumTijd);
		const formattedDate = date.toLocaleDateString();

		if (!dailyCalories[formattedDate]) {
			dailyCalories[formattedDate] = 0;
		}

		dailyCalories[formattedDate] += row.calorieën;
	});

	for (const date in dailyCalories) {
		labels.push(date);
		calorieData.push(dailyCalories[date]);
	}

	generateCaloriesChart(labels, calorieData);
}

async function totalNutritions() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

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

function generateCaloriesChart(labels, calorieData) {
	const ctx = document.getElementById("myChart");

	new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Aantal calorieën per dag",
					data: calorieData,
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}

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

caloriesPerDay();
totalNutritions();
