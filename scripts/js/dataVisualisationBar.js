// This file contains the functions to calculate the calories per day by using the data from retrievData.js
// Chart.js is being used to create a bar chart

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

// This function is being used to make the 'Calories per day' bar chart
function generateCaloriesChart(labels, calorieData) {
	const ctx = document.getElementById("myChart");

	new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Aantal calorieën (kcal) per dag",
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