/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

let userThing = prompt("Give me a noun");
let userName = prompt("Give me a name");
let userADJ = prompt("Give me an adjective");
let userHouse = prompt("Give me a name of a household item ")
let userPower = prompt("Give me an interesting power to have ")
let userPow = prompt("Give me a useless power that nobody would want")
let userAd = prompt("Give me an adjective ")
let userNoun = prompt("Give me a person or thing")
let userNo = prompt("Give me a noun")
let userwep = prompt("Give me an interesting tool ")
let userwepon = prompt("Give me an interesting ")






/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

let story = `A long time ago in a ${userThing}  far far away there once was man named ${userName}. He was an interesting person that looked and smelt like ${userADJ} he lived in a ${userHouse}. He wasnt just a normal man he had unique powers and these powers were ${userPower} and ${userPow} he uses this to fight a ${userAd} ${userNoun} which is his arch nemasis  they always fight back and for in the city of ${userNo}  they both had there signature weapons ${userNoun} use a ${userwep} and ${userName} uses a ${userwepon} these barley work but they get the job done now after they fight on and on hours after hours ${userName} finally won the battle and they live happily ever after`;


/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

 document.getElementById("madlib-output").innerHTML = story ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/
