# Changelog

## [1.0.0] - 2025-01-05
### Added
- Initial release with basic functionality to track daily calorie intake and nutritional values
- HTML form to collect input data
- Connection between the database and frontend for storing and fetching data
- Added CSS styling to the form (index.css, media.css, reset.css, master.css)
- README file with data flow, sources, and files breakdown

## [1.1.0] - 2025-01-01
### Added
- Data visualization page (`dataVisualisation.html`)
- JavaScript functionality to fetch data from the database (`retrieveData.js`)
- Comments and documentation added to clarify code flow
- Chart.js integration for displaying daily calorie intake as a bar chart
- Pie chart for displaying total nutritional values (`generatePieChart`)
- Line chart comparing recommended daily nutrients to average daily intake (`calculateAverageNutritions`)
  
## [1.2.0] - 2025-01-04
### Added
- Top 5 consumed meals and drinks display via a donut chart (`generateDonutChart`)
- Stacked bar chart to display average nutrients per meal type (`generateStackedBarChart`)
- CSS updates for better styling and uniform chart colors
- Buttons for navigation between pages (from index.html to dataVisualisation.html)
- Updated conclusions for each chart to provide clearer insights
- `CREDITS.md`, `CONTRIBUTING.md`, `PROGRESS.md`, `STARTUP.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md` files added to the docs folder
  
### Fixed
- CSS and JavaScript files updated for consistency and clarity
- Resolved issues with chart rendering and button functionality
  
## [1.3.0] - 2025-01-05
### Added
- Split `dataVisualisation.js` into smaller, more manageable files: `dataVisualisationBar.js`, `dataVisualisationPie.js`, and `dataVisualisationLine.js`
- Added additional documentation to explain the purpose of each script and file
- Updated the README to include all new documentation files and their purposes
  
### Fixed
- Improved the mobile responsiveness of the data visualization charts and buttons
