//All JS are by default in the window element (window.console.log)

const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const facebookBtn = document.querySelector('#facebook');
const newQuoteBtn = document.querySelector('#new-quote');



let apiQuotes = []; //Let because it is an empty array, but later it will change to a list of quotes

//Show new quote button
function newQuote(){
    //Pick one random quote from ApiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //check if author field is blank and replace it with "unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //When quote length is very long, I will adjust styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
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

newQuoteBtn.addEventListener('click', newQuote);



