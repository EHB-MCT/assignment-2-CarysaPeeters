// This file contains the functions to calculate the average of the daily nutrients I ate by using the data from retrievData.js
// The average of my daily nutrients are being compared to the recommended daily nutrients I should eat
// Chart.js is being used to create a line chart

"use strict";

// The data is being imported
import { fetchData } from "../retrieveData.js";

// This function is being used to calculate the average daily amounts of the nutrients
async function calculateAverageNutritions() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	// Object to store the total nutrients for each day
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

	// There is an iteration over each row and the calculations for the total of each nutrition for each day are being made
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

	// Object to store the average amounts of the nutrients
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

	// Calculating the average for all the nutrients for each day
	for (const date in dailyNutritions.calorieën) {
		const dailyData = dailyNutritions;

		// Making a total of all the days for each nutrient
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

	// Calculating the average for each nutrient
	for (const nutrient in averageNutritions) {
		averageNutritions[nutrient] /= totalDays;
	}

	generateLineChart(averageNutritions);
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
					backgroundColor: "rgba(54, 162, 235, 0.2)",
					borderColor: "rgba(54, 162, 235, 1)",
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
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
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

calculateAverageNutritions();
