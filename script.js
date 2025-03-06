//All JS are by default in the window element (window.console.log)

let apiQuotes = []; //Let because it is an empty array, but later it will change to a list of quotes

//Show new quote button
function newQuote(){
    //Pick one random quote from ApiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}


// // Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //errorhandling
  }
}

//Load
getQuotes();
