# Nutritional food

## Intro

I am a vegetarian and with this it is common to have some nutritional deficiencies. Therefore I thought it would be interesting to make a simple html form where, every time I eat or drink something, I have to answer some questions. This will allow me to see at the end if I am eating enough nutritious food or if I have some deficiencies.

## What info?

For each meal I eat, I fill in the following information:

- Meal type: breakfast, lunch, dinner, snack or drink
- Date and time of consumption
- Meal (ex. vol au vent)
- Ingredients (ex. milk, eggs, ...)
- Amount of calories
- Amount of protein
- Amount of carbs
- Amount of fat
- Amount of fiber
- Amount of iron
- Amount of zinc
- Amount of calcium
- Amount of B12 vitamines
- Amount of D12 vitamines
- Amount of omega-3 vitamines

## Conventions

- Naming
  Images: lowercase, seperated with underscores
  File names: camelCase
  Classes: nouns, starting with a capital
  Functions: camelCase
  Variables: camelCase
  Branches: camelCase
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

- Placing
  Constants: top of the file (except when there is an import, the the import needs to be first)
  Source: (https://www.w3schools.com/js/js_conventions.asp)

- Formatting
  Before and after a + , - , = , => , < , > a space

  Functions, foreach, and other things that use curly brackets are formatted like this:

  ```
  fun() {

  }
  ```

  line length < 80
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

  Use 'prettier' to keep the style consistent. Use it for correct indentation, whitespace, and line lengths
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

  Use single quotes for strings except to avoid escaping (if 'prettier' changes this automatticaly to double quotes, leave it)

  ```
  console.log('helloWorld');
  ```

  ```
  $("<div class='box'>")
  console.log(`hello ${name}`)
  ```

  Source: (https://standardjs.com/rules.html)

- Arrays

  ```
  const filteredPaintings = [];
  ```

  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Comments
  Only use comments if the logic of the code isn't obvious
  Don't use shorthand
  Use single line comments
  Leave a space between the slashes and the comment
  Start with a capital letter, like a sentence, but don't end the comment with a period
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Commits
  formatted in the conventional method
  Source: (https://www.conventionalcommits.org/en/v1.0.0/), (https://medium.com/@noriller/docs-conventional-commits-feat-fix-refactor-which-is-which-531614fcb65a)

- Gitflow workflow
  feature branch (ex. feature/dataVisualisation) -> develop -> release -> main + develop
  Source: (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Files breakdown

- Assets
  Make sure you put your file in the right location, for example: don't put a mp4 in the 'images' folder
  If a folder starts containing more than 20 items, create subfolders based on the page you are using it for
  Source: (https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

- Scripts
  supabaseClient.js: handles the initialization and configuration of the connection to Supabase
  formValidation.js: manages form submission and data validation, it processes user input, converts it into a structured format and interacts with Supabase to store the data
  retrieveData.js: fetches nutritional data from the Supabase database (from the "Voedingswaarden" table)
  dataVisualisationBar.js: visualises the calories per day, it fetches the data from retrieveData.js and generates a bar chart using [Chart.js](https://www.chartjs.org/docs/latest/getting-started/)
  dataVisualisationPie.js: visualises the total amount of nutrients I ate in the whole period I collected the data, it fetches the data from retrieveData.js and generates a pie chart using [Chart.js](https://www.chartjs.org/docs/latest/charts/doughnut.html)
  dataVisualisationLine.js: compares the recommended daily nutritional intake and my daily average nutritional intake, it fetches the data from retrieveData.js and generates a line chart using [Chart.js](https://www.chartjs.org/docs/latest/charts/line.html)
  dataVisualisationStackedBar.js: calculates the average of the nutrients per meal type, it fetches the data from retrieveData.js and generates a stacked bar chart using [Chart.js](https://www.chartjs.org/docs/latest/getting-started/)
  dataVisualisationDonut.js: visualises the top 5 of my most consumed meals and drinks, it fetches the data from retrieveData.js and generates a donut chart using [Chart.js](https://www.chartjs.org/docs/latest/charts/doughnut.html)

- Pages
  dataVisualisation.html: this page is used for visualizing the nutritional data fetched from Supabase, the data is retrieved using retrieveData.js

- index.html
  this page contains the form where users fill in the information about a meal

- docs
  [CODE_OF_CONDUCT.md](https://www.contributor-covenant.org/version/1/4/code-of-conduct/): rules you should follow when working with this project
  LICENSE: the license of this project
  README.md: information, conventions, files breakdown, data flow, data attribution and sources
  CONTRIBUTING.md: guidelines for when someone wants to contribute
  CREDITS.md: the authors that contributed and the tools that were used in this project
  PROGRESS.md: a day by day documentation of what I have worked on
  CHANGELOG.md: documentation of the changes and updates
  STARTUP.md: steps on how to use the application

## Data flow

- Data entry
  Users fill out the form in index.html with information about a meal
  After clicking the submit button, the data of the form is being collected and procesed by formValidation.js
- Data validation and preparation
  In formValidation.js the data is being extracted by using the FormData API, then the data is structured into a 'voedingsData' object
- Data storage
  The structured 'voedingsData' object is inserted into the 'Voedingswaarden' table in the Supabase database
  The Supabase client in supabaseClient.js is being used to handle the insertion
- Data retrieval
  The retrieveData.js script fetches the data from the 'Voedingswaarden' table in the Supabase database, the data is logged to the console
- Data visualisation
  The data that's been fetched in retrieveData.js is being used to create clear charts with [Chart.js](https://www.chartjs.org/docs/latest/getting-started/) in the dataVisualisation.js files, these charts are being rendered in dataVisualisation.html

## Data collection

I gave [Chatgpt](https://chatgpt.com/share/677afc64-2d20-8010-943a-69394d8e004a) the meals I was eating and when I could I gave him additional information about the ingredients (ex. brand)
I then asked him to give me the nutrients that I needed from that meal
When he gave me numbers with a comma, I made them into integers (ex. 1,5 or higher -> 2, lower than 1,5 -> 1)

## Data attribution

This project uses [Supabase](https://supabase.com/) to store and manage nutritional data entered through the application. Supabase provides a backend-as-a-service platform built on PostgreSQL, enabling fast and secure data management for web applications.
All data stored in the application is user-generated and managed through Supabase's database services. For more information on Supabase's features, terms of use and licensing, please visit their [website](https://supabase.com/terms).
Source: (https://chatgpt.com/share/6744dcc4-4c44-8010-84f6-85e65cafef60)

## Sources

- [Conventions](https://www.w3schools.com/js/js_conventions.asp)
- [Conventions](https://google.github.io/styleguide/jsguide.html)
- [Conventions](https://www.conventionalcommits.org/en/v1.0.0/)
- [Conventions](https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)
- [Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Conventions](https://standardjs.com/rules.html)
- [Conventions](https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)
- [Conventions](https://medium.com/@noriller/docs-conventional-commits-feat-fix-refactor-which-is-which-531614fcb65a)
- [Conventions](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [HTML](https://www.w3schools.com/tags/tag_select.asp)
- [HTML](https://www.w3schools.com/tags/att_input_type_datetime-local.asp)
- [HTML](https://www.w3schools.com/tags/tag_input.asp)
- [HTML](https://www.w3schools.com/tags/att_input_type_number.asp)
- [HTML](https://codepen.io/chamsi/pen/LavooJ)
- [HTML](https://www.nutribites.nl/artikel/vitamine-voor-vegetariers/#:~:text=Vegetarisch%20eten%20kan%20lekker%20en,geen%20vlees%20eet%20%5B1%5D.)
- [Chart.js](https://www.chartjs.org/docs/latest/getting-started/) used for making the charts
- [Chart.js](https://www.chartjs.org/docs/latest/charts/doughnut.html) used for making the pie chart
- [Chart.js](https://www.chartjs.org/docs/latest/charts/line.html) used for making the line chart
- [CODE_OF_CONDUCT](https://www.contributor-covenant.org/version/1/4/code-of-conduct/)
- [Chatgpt.com](https://chatgpt.com/share/6741a7fa-1f38-8010-a0ba-f386f460149f) used for the file structure and information about nutritional food
- [Chatgpt.com](https://chatgpt.com/share/6743175e-713c-8010-8a5b-bdff87f0bfce) used for making the connection between the frontend and the database
- [Chatgpt.com](https://chatgpt.com/share/6744c548-3ee0-8010-9704-3938b6790304) used for the css of the form
- [Chatgpt.com](https://chatgpt.com/share/677ac16a-3ba8-8010-9af1-2c7086557e49) used for the css of the charts
- [Chatgpt.com](https://chatgpt.com/share/6744dcc4-4c44-8010-84f6-85e65cafef60) used for the Data Attribution in the README
- [Chatgpt.com](https://chatgpt.com/share/6773d756-89dc-8010-bd9f-96c05c52380d) used for the data retrieval in retrieveData.js
- [Chatgpt.com](https://chatgpt.com/share/67794a38-ad10-8010-9356-d5f467ac5e41) used for making the total of calories/day in dataVisualisationBar.js
- [Chatgpt.com](https://chatgpt.com/share/67795480-9040-8010-9ac0-abf4420e0f85) used for making the 'Totaal voedingsstoffen' pie chart
- [Chatgpt.com](https://chatgpt.com/share/67797d6c-f1d4-8010-8aac-91d2eb430d17) used for the recommended daily nutrition intake for the line chart
- [Chatgpt.com](https://chatgpt.com/share/67799d6a-bb18-8010-997a-02d48fbaf769) used for the 'calculateAverageNutritions' function in dataVisualisationLine.js
- [Chatgpt.com](https://chatgpt.com/share/677a9bfa-b59c-8010-a668-1ad5353dcb49) used for the average nutrients per mealtype for the stacked bar chart
- [Chatgpt.com](https://chatgpt.com/share/677aaa23-8d3c-8010-9e82-1ac7632cb223) used for making the top 5 of my most consumed meals and drinks in dataVisualisationDonut.js
- [Chatgpt.com](https://chatgpt.com/share/677afc64-2d20-8010-943a-69394d8e004a) for calculating the nutrients of the meals I ate
