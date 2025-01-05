// The Supabase client is being imported
// The function 'fetchData' fetches all records from the 'Voedingswaarden' table, the 'fetchData' function is called to retrieve the data
// An error is being shown when something goes wrong with the fetch, the data is being shown in the console when everything goes fine

"use strict";

import { supabase } from "./supabaseClient.js";

export async function fetchData() {
	const { data, error } = await supabase.from("Voedingswaarden").select("*");

	if (error) {
		console.error("Error fetching data:", error);
		return;
	}

	console.log("Fetched data:", data);
	return data;
}
