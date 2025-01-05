// This file contains the functions to calculate the average of all the nutrients per meal type, by using the data from retrievData.js
// Chart.js is being used to create a stacked bar chart

"use strict";

// The data is being imported
import { fetchData } from "./retrieveData.js";

// This function is being used to calculate the the average of all the nutrients per meal type
async function calculateAverageNutritionsPerMealType() {
    const data = await fetchData();
    if (!data) {
        console.error("No data found");
        return;
    }

    // An object to store the total amounts of nutrients per meal type
    const mealTypeNutritions = {
        ontbijt: { calorieën: 0, eiwitten: 0, koolhydraten: 0, vetten: 0, vezels: 0, ijzer: 0, zink: 0, calcium: 0, b12: 0, d3: 0, omega3: 0, count: 0 },
        lunch: { calorieën: 0, eiwitten: 0, koolhydraten: 0, vetten: 0, vezels: 0, ijzer: 0, zink: 0, calcium: 0, b12: 0, d3: 0, omega3: 0, count: 0 },
        avondeten: { calorieën: 0, eiwitten: 0, koolhydraten: 0, vetten: 0, vezels: 0, ijzer: 0, zink: 0, calcium: 0, b12: 0, d3: 0, omega3: 0, count: 0 },
        tussendoortje: { calorieën: 0, eiwitten: 0, koolhydraten: 0, vetten: 0, vezels: 0, ijzer: 0, zink: 0, calcium: 0, b12: 0, d3: 0, omega3: 0, count: 0 },
        drank: { calorieën: 0, eiwitten: 0, koolhydraten: 0, vetten: 0, vezels: 0, ijzer: 0, zink: 0, calcium: 0, b12: 0, d3: 0, omega3: 0, count: 0 },
    };

    // There is an iteration over each row
    data.forEach(function (row) {
        // The nutrient values from the current row are being added to the corresponding meal type
        const mealType = row.maaltijdtype;
        if (mealTypeNutritions[mealType]) {
            mealTypeNutritions[mealType].calorieën += row.calorieën;
            mealTypeNutritions[mealType].eiwitten += row.eiwitten;
            mealTypeNutritions[mealType].koolhydraten += row.koolhydraten;
            mealTypeNutritions[mealType].vetten += row.vetten;
            mealTypeNutritions[mealType].vezels += row.vezels;
            mealTypeNutritions[mealType].ijzer += row.ijzer;
            mealTypeNutritions[mealType].zink += row.zink;
            mealTypeNutritions[mealType].calcium += row.calcium;
            mealTypeNutritions[mealType].b12 += row.b12;
            mealTypeNutritions[mealType].d3 += row.d3;
            mealTypeNutritions[mealType].omega3 += row.omega3;
            mealTypeNutritions[mealType].count++;
        }
    });

    const averageNutritionsPerMealType = {};

    // There is an iteration over each meal type and the average for each nutrient is being calculated
    for (const mealType in mealTypeNutritions) {
        const nutrients = mealTypeNutritions[mealType];
        const count = nutrients.count;

        if (count > 0) {
            averageNutritionsPerMealType[mealType] = {
                calorieën: nutrients.calorieën / count,
                eiwitten: nutrients.eiwitten / count,
                koolhydraten: nutrients.koolhydraten / count,
                vetten: nutrients.vetten / count,
                vezels: nutrients.vezels / count,
                ijzer: nutrients.ijzer / count,
                zink: nutrients.zink / count,
                calcium: nutrients.calcium / count,
                b12: nutrients.b12 / count,
                d3: nutrients.d3 / count,
                omega3: nutrients.omega3 / count,
            };
        }
    }

    generateStackedBarChart(averageNutritionsPerMealType);
}

function generateStackedBarChart(averageNutritionsPerMealType) {
    const ctx = document.getElementById('myStackedBar');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ontbijt', 'Lunch', 'Avondeten', 'Tussendoortje', 'Drank'],
            datasets: [
                {
                    label: 'Calorieën (kcal)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.calorieën || 0,
                        averageNutritionsPerMealType.lunch?.calorieën || 0,
                        averageNutritionsPerMealType.avondeten?.calorieën || 0,
                        averageNutritionsPerMealType.tussendoortje?.calorieën || 0,
                        averageNutritionsPerMealType.drank?.calorieën || 0
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Eiwitten (g)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.eiwitten || 0,
                        averageNutritionsPerMealType.lunch?.eiwitten || 0,
                        averageNutritionsPerMealType.avondeten?.eiwitten || 0,
                        averageNutritionsPerMealType.tussendoortje?.eiwitten || 0,
                        averageNutritionsPerMealType.drank?.eiwitten || 0
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                },
                {
                    label: 'Koolhydraten (g)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.koolhydraten || 0,
                        averageNutritionsPerMealType.lunch?.koolhydraten || 0,
                        averageNutritionsPerMealType.avondeten?.koolhydraten || 0,
                        averageNutritionsPerMealType.tussendoortje?.koolhydraten || 0,
                        averageNutritionsPerMealType.drank?.koolhydraten || 0
                    ],
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                },
                {
                    label: 'Vetten (g)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.vetten || 0,
                        averageNutritionsPerMealType.lunch?.vetten || 0,
                        averageNutritionsPerMealType.avondeten?.vetten || 0,
                        averageNutritionsPerMealType.tussendoortje?.vetten || 0,
                        averageNutritionsPerMealType.drank?.vetten || 0
                    ],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                },
                {
                    label: 'Vezels (g)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.vezels || 0,
                        averageNutritionsPerMealType.lunch?.vezels || 0,
                        averageNutritionsPerMealType.avondeten?.vezels || 0,
                        averageNutritionsPerMealType.tussendoortje?.vezels || 0,
                        averageNutritionsPerMealType.drank?.vezels || 0
                    ],
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                },
                {
                    label: 'Ijzer (mg)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.ijzer || 0,
                        averageNutritionsPerMealType.lunch?.ijzer || 0,
                        averageNutritionsPerMealType.avondeten?.ijzer || 0,
                        averageNutritionsPerMealType.tussendoortje?.ijzer || 0,
                        averageNutritionsPerMealType.drank?.ijzer || 0
                    ],
                    backgroundColor: 'rgba(255, 159, 64, 0.5)',
                },
                {
                    label: 'Zink (mg)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.zink || 0,
                        averageNutritionsPerMealType.lunch?.zink || 0,
                        averageNutritionsPerMealType.avondeten?.zink || 0,
                        averageNutritionsPerMealType.tussendoortje?.zink || 0,
                        averageNutritionsPerMealType.drank?.zink || 0
                    ],
                    backgroundColor: 'rgba(153, 255, 51, 0.5)',
                },
                {
                    label: 'Calcium (mg)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.calcium || 0,
                        averageNutritionsPerMealType.lunch?.calcium || 0,
                        averageNutritionsPerMealType.avondeten?.calcium || 0,
                        averageNutritionsPerMealType.tussendoortje?.calcium || 0,
                        averageNutritionsPerMealType.drank?.calcium || 0
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.3)',
                },
                {
                    label: 'B12 (µg)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.b12 || 0,
                        averageNutritionsPerMealType.lunch?.b12 || 0,
                        averageNutritionsPerMealType.avondeten?.b12 || 0,
                        averageNutritionsPerMealType.tussendoortje?.b12 || 0,
                        averageNutritionsPerMealType.drank?.b12 || 0
                    ],
                    backgroundColor: 'rgba(0, 255, 255, 0.5)',
                },
                {
                    label: 'D3 (µg)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.d3 || 0,
                        averageNutritionsPerMealType.lunch?.d3 || 0,
                        averageNutritionsPerMealType.avondeten?.d3 || 0,
                        averageNutritionsPerMealType.tussendoortje?.d3 || 0,
                        averageNutritionsPerMealType.drank?.d3 || 0
                    ],
                    backgroundColor: 'rgba(255, 204, 0, 0.5)',
                },
                {
                    label: 'Omega-3 (g)',
                    data: [
                        averageNutritionsPerMealType.ontbijt?.omega3 || 0,
                        averageNutritionsPerMealType.lunch?.omega3 || 0,
                        averageNutritionsPerMealType.avondeten?.omega3 || 0,
                        averageNutritionsPerMealType.tussendoortje?.omega3 || 0,
                        averageNutritionsPerMealType.drank?.omega3 || 0
                    ],
                    backgroundColor: 'rgba(102, 204, 255, 0.5)',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}

calculateAverageNutritionsPerMealType();