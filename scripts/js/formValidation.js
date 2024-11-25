// The Supabase client is being imported, the form element is being retrieved from the DOM
// The form data is being collected and stored in an object 'voedingsData', then the data is being inserted into the Supabase database
// An error is being shown when the insertion fails

"use strict";

import { supabase } from "./supabaseClient.js";

const form = document.getElementById("voedingswaardenForm");

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	const voedingsData = {
		maaltijdtype: formData.get("maaltijdtype"),
		datumTijd: formData.get("datumTijd"),
		gerecht: formData.get("gerecht"),
		ingrediënten: formData.get("ingrediënten"),
		calorieën: parseInt(formData.get("hoeveelheidCalorieën")),
		eiwitten: parseInt(formData.get("hoeveelheidEiwitten")),
		koolhydraten: parseInt(formData.get("hoeveelheidKoolhydraten")),
		vetten: parseInt(formData.get("hoeveelheidVetten")),
		vezels: parseInt(formData.get("hoeveelheidVezels")),
		ijzer: parseInt(formData.get("hoeveelheidIjzer")),
		zink: parseInt(formData.get("hoeveelheidZink")),
		calcium: parseInt(formData.get("hoeveelheidCalcium")),
		b12: parseInt(formData.get("hoeveelheidB12")),
		d3: parseInt(formData.get("hoeveelheidD3")),
		omega3: parseInt(formData.get("hoeveelheidOmega3")),
	};

	const { data, error } = await supabase.from("Voedingswaarden").insert([voedingsData]);

	if (error) {
		console.error("Fout bij het opslaan:", error.message);
		alert("Er ging iets mis bij het opslaan.");
	} else {
		console.log("Data succesvol opgeslagen:", data);
		alert("Voedingsgegevens opgeslagen!");
		form.reset();
	}
});
