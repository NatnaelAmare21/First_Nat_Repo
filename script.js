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
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading (){
    loader.hidden = false;
    qouteContainer.hidden = true;
}
function complete (){
    loader.hidden = true;
    qouteContainer.hidden = false;
}

function newQoute () {
    loading();
 const qoute = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 if(!qoute.author){
    authorText.textContent = 'Unknown';
 }else{
    authorText.textContent = qoute.author;
 }

 if(qoute.text.length > 50){
    qouteText.classList.add('long-qoute');
 }else{
    qouteText.classList.remove('long-qoute');
 }
 qouteText.textContent = qoute.text;
 complete();

 authorText.textContent = qoute.author;
 qouteText.textContent = qoute.text;
}
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQoute();
    } catch (error) {
        console.log(error);
    }
}
function tweetQoute(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQouteBtn.addEventListener('click', newQoute);
twitterBtn.addEventListener('click', tweetQoute)
getQuotes();


