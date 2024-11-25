# Nutritional food

I am a vegetarian and with this it is common to have some nutritional deficiencies. Therefore I thought it would be interesting to make a simple html form where, every time I eat or drink something, I have to answer some questions. This will allow me to see at the end if I am eating enough nutritious food or if I have some deficiencies.

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
  Constants: top of the file
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

  Use single quotes for strings except to avoid escaping
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

## Files breakdown

- Assets
  Make sure you put your file in the right location, for example: don't put a jpeg in the 'videos' folder
  If a folder starts containing more than 20 items, create subfolders based on the page you are using it for
  Source: (https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

- Scripts
  classes:
  js:
    supabaseClient.js: provides the connection to Supabase and is the basis of your data interactions
    formValidation.js: a script to pre-validate the form before saving data
    index.js: the main script to implement the form functionality and send data to Supabase

## Data flow

## Data Attribution

## Sources

- [Conventions](https://www.w3schools.com/js/js_conventions.asp)
- [Conventions](https://google.github.io/styleguide/jsguide.html) 
- [Conventions](https://www.conventionalcommits.org/en/v1.0.0/) 
- [Conventions](https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)
- [Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Conventions](https://standardjs.com/rules.html)
- [Conventions](https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)
- [Conventions](https://medium.com/@noriller/docs-conventional-commits-feat-fix-refactor-which-is-which-531614fcb65a)
- [HTML](https://www.w3schools.com/tags/tag_select.asp)
- [HTML](https://www.w3schools.com/tags/att_input_type_datetime-local.asp)
- [HTML](https://www.w3schools.com/tags/tag_input.asp)
- [HTML](https://www.w3schools.com/tags/att_input_type_number.asp)
- [HTML](https://codepen.io/chamsi/pen/LavooJ)
- [HTML](https://www.nutribites.nl/artikel/vitamine-voor-vegetariers/#:~:text=Vegetarisch%20eten%20kan%20lekker%20en,geen%20vlees%20eet%20%5B1%5D.)
- [Chatgpt.com](https://chatgpt.com/share/6741a7fa-1f38-8010-a0ba-f386f460149f) used for the file structure and information about nutritional food
- [Chatgpt.com](https://chatgpt.com/share/6743175e-713c-8010-8a5b-bdff87f0bfce) used for making the connection between the frontend and the database