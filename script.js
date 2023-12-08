// -------------fetch from local javascript
// function newQoute () {
//     const qoute = localQoute[Math.floor(Math.random() * localQoute.length)];
//     console.log(qoute);
//    }
//    newQoute();


// -------------fetch from api
const qouteContainer = document.getElementById('qoute-container');
const qouteText = document.getElementById('qoute');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQouteBtn = document.getElementById('new-qoute');
let apiQuotes = [];
function newQoute () {
 const qoute = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 authorText.textContent = qoute.author;
 qouteText.textContent = qoute.text;
}
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQoute();
    } catch (error) {
        console.log(error);
    }
}
getQuotes();


