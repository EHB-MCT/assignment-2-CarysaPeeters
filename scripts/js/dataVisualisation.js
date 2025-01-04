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

function generateCaloriesChart(labels, calorieData) {
	const ctx = document.getElementById("myChart");

	new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Aantal Calorieën per Dag",
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

caloriesPerDay();
