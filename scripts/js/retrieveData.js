"use strict";

import { supabase } from "./supabaseClient.js";

async function fetchData() {
	const { data, error } = await supabase.from("Voedingswaarden").select("*");

	if (error) {
		console.error("Error fetching data:", error);
		return;
	}

	console.log("Fetched data:", data);
}

fetchData();
