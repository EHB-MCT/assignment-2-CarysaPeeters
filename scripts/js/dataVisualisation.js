// This file contains the functions to visualise the data from retrievData.js using Chart.js
// There are calculations being made so the data can be visualised in a clear way

"use strict";

// The data is being imported
import { fetchData } from "./retrieveData.js";

const labels = [];
const calorieData = [];

// This function is being used to calculate the total amount of calories per day
async function caloriesPerDay() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	const dailyCalories = {};

	// There is an iteration over each row
	data.forEach(function (row) {
		// The datumTijd property is being converted into a Date object
		const date = new Date(row.datumTijd);
		const formattedDate = date.toLocaleDateString();

		if (!dailyCalories[formattedDate]) {
			dailyCalories[formattedDate] = 0;
		}

		// The total amount of calories is being calculated for each day
		dailyCalories[formattedDate] += row.calorieën;
	});

	for (const date in dailyCalories) {
		labels.push(date);
		calorieData.push(dailyCalories[date]);
	}

	generateCaloriesChart(labels, calorieData);
}

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

async function calculateAverageNutritions() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	const dailyNutritions = {
		calorieën: [],
		eiwitten: [],
		koolhydraten: [],
		vetten: [],
		vezels: [],
		ijzer: [],
		zink: [],
		calcium: [],
		b12: [],
		d3: [],
		omega3: [],
	};

	data.forEach(function (row) {
		const date = new Date(row.datumTijd);
		const formattedDate = date.toLocaleDateString(); 

		if (!dailyNutritions.calorieën[formattedDate]) {
			dailyNutritions.calorieën[formattedDate] = 0;
			dailyNutritions.eiwitten[formattedDate] = 0;
			dailyNutritions.koolhydraten[formattedDate] = 0;
			dailyNutritions.vetten[formattedDate] = 0;
			dailyNutritions.vezels[formattedDate] = 0;
			dailyNutritions.ijzer[formattedDate] = 0;
			dailyNutritions.zink[formattedDate] = 0;
			dailyNutritions.calcium[formattedDate] = 0;
			dailyNutritions.b12[formattedDate] = 0;
			dailyNutritions.d3[formattedDate] = 0;
			dailyNutritions.omega3[formattedDate] = 0;
		}

		dailyNutritions.calorieën[formattedDate] += row.calorieën;
		dailyNutritions.eiwitten[formattedDate] += row.eiwitten;
		dailyNutritions.koolhydraten[formattedDate] += row.koolhydraten;
		dailyNutritions.vetten[formattedDate] += row.vetten;
		dailyNutritions.vezels[formattedDate] += row.vezels;
		dailyNutritions.ijzer[formattedDate] += row.ijzer;
		dailyNutritions.zink[formattedDate] += row.zink;
		dailyNutritions.calcium[formattedDate] += row.calcium;
		dailyNutritions.b12[formattedDate] += row.b12;
		dailyNutritions.d3[formattedDate] += row.d3;
		dailyNutritions.omega3[formattedDate] += row.omega3;
	});

	const averageNutritions = {
		calorieën: 0,
		eiwitten: 0,
		koolhydraten: 0,
		vetten: 0,
		vezels: 0,
		ijzer: 0,
		zink: 0,
		calcium: 0,
		b12: 0,
		d3: 0,
		omega3: 0,
	};

	let totalDays = 0;

	for (const date in dailyNutritions.calorieën) {
		const dailyData = dailyNutritions;

		averageNutritions.calorieën += dailyData.calorieën[date];
		averageNutritions.eiwitten += dailyData.eiwitten[date];
		averageNutritions.koolhydraten += dailyData.koolhydraten[date];
		averageNutritions.vetten += dailyData.vetten[date];
		averageNutritions.vezels += dailyData.vezels[date];
		averageNutritions.ijzer += dailyData.ijzer[date];
		averageNutritions.zink += dailyData.zink[date];
		averageNutritions.calcium += dailyData.calcium[date];
		averageNutritions.b12 += dailyData.b12[date];
		averageNutritions.d3 += dailyData.d3[date];
		averageNutritions.omega3 += dailyData.omega3[date];

		totalDays++;
	}

	for (const nutrient in averageNutritions) {
		averageNutritions[nutrient] /= totalDays;
	}

	generateLineChart(averageNutritions);
}

// This function is being used to make the 'Calories per day' bar chart
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

function generateLineChart(averageNutritions) {
	const ctx = document.getElementById("myLineChart");

	new Chart(ctx, {
		type: "line",
		data: {
			labels: ["Calorieën (kcal)", "Eiwitten (g)", "Koolhydraten (g)", "Vetten (g)", "Vezels (g)", "IJzer (mg)", "Zink (mg)", "Calcium (mg)", "Vitamine B12 (µg)", "Vitamine D3 (µg)", "Omega-3 (g)"],
			datasets: [
				{
					label: "Aanbevolen dagelijkse inname",
					data: [2076, 103, 286, 58, 30, 15, 7, 1000, 2, 15, 1],
					borderWidth: 1,
				},
				{
					label: "Gemiddelde dagelijkse inname",
					data: [
						averageNutritions.calorieën,
						averageNutritions.eiwitten,
						averageNutritions.koolhydraten,
						averageNutritions.vetten,
						averageNutritions.vezels,
						averageNutritions.ijzer,
						averageNutritions.zink,
						averageNutritions.calcium,
						averageNutritions.b12,
						averageNutritions.d3,
						averageNutritions.omega3,
					],
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
			plugins: {
				tooltip: {
					mode: "index",
					intersect: false,
				},
			},
		},
	});
}

caloriesPerDay();
totalNutritions();
calculateAverageNutritions();
