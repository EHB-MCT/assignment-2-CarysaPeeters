// This file contains the functions to calculate the top 5 most consumed meals and drinks by using the data from retrievData.js
// Chart.js is being used to create a donut chart

"use strict";

// The data is being imported
import { fetchData } from "./retrieveData.js";

const labels = [];
const dishData = [];
const mealTypes = [];

// This function is used to calculate the top 5 most consumed meals and drinks
async function top5Dishes() {
	const data = await fetchData();
	if (!data) {
		console.error("No data found");
		return;
	}

	// Object to store the count of each dish and the meal types
	const dishCount = {};

	// There is an iteration over each row and the amount of dishes is being calculated
	data.forEach(function (row) {
		const dish = row.gerecht;
		const mealType = row.maaltijdtype;

		if (!dishCount[dish]) {
			dishCount[dish] = { count: 0, mealTypes: new Set() };
		}

		dishCount[dish].count += 1;
		dishCount[dish].mealTypes.add(mealType);
	});

    // The count of each dish is being sorted in descending order
	const sortedDishes = Object.entries(dishCount).sort((a, b) => b[1].count - a[1].count);

    // The top 5 dishes are being selected
	const top5 = sortedDishes.slice(0, 5);

	top5.forEach(function (dish) {
		labels.push(dish[0]);
		dishData.push(dish[1].count);
		mealTypes.push(Array.from(dish[1].mealTypes).join(" en "));
	});

	generateDonutChart(labels, dishData, mealTypes);
}

function generateDonutChart(labels, dishData, mealTypes) {
	const ctx = document.getElementById("myDonutChart");

	new Chart(ctx, {
		type: "doughnut",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Top 5 consumptie",
					data: dishData,
					borderWidth: 1,
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const count = tooltipItem.raw;
							const mealType = mealTypes[tooltipItem.dataIndex];
							return `${count} keer, Maaltijdtype: ${mealType}`;
						},
					},
				},
			},
		},
	});
}

top5Dishes();
