"use strict";

import { fetchData } from "./retrieveData.js";

const labels = [];
const dishData = [];
const mealTypes = [];  

async function top5Dishes() {
    const data = await fetchData();
    if (!data) {
        console.error("No data found");
        return;
    }

    const dishCount = {};

    data.forEach(function (row) {
        const dish = row.gerecht;  
        const mealType = row.maaltijdtype;  

        if (!dishCount[dish]) {
            dishCount[dish] = { count: 0, mealTypes: new Set() };
        }

        dishCount[dish].count += 1;
        dishCount[dish].mealTypes.add(mealType);
    });

    const sortedDishes = Object.entries(dishCount).sort((a, b) => b[1].count - a[1].count);

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