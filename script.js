const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let flashcardnew = document.createElement('div')
    document.getElementById('card-content').innerHTML = ''
    if(showingTerm){
        flashcardnew.innerHTML = `
            <h3>${flashcards[currentIndex].term}</h3>
        `
    }else{
        flashcardnew.innerHTML = `
            <h3>${flashcards[currentIndex].definition}</h3>
        `
    }
    document.getElementById('card-content').appendChild(flashcardnew)
}

// The rest of the code you will write is apart of event listeners
document.getElementById('next-btn').addEventListener('click', function(){
    if(flashcards.length - 1 === currentIndex){
        currentIndex = 0
    }else{
        currentIndex+=1
    }
    showingTerm = true
    displayCard();
})

document.getElementById('prev-btn').addEventListener('click', function(){
    if(currentIndex === 0){
        currentIndex = flashcards.length - 1
    }else{
        currentIndex-=1
    }
    showingTerm = true;
    displayCard();
})

document.getElementById('flashcard').addEventListener('click', function(){
   if(showingTerm){
        showingTerm = false
   }else{
        showingTerm = true
   }
   displayCard();
})

document.getElementById('add-card-btn').addEventListener('click', function(){
    let newTerm = document.getElementById('new-term').value;
    let newDef = document.getElementById('new-definition').value;
    flashcards.push({
        term: newTerm,
        definition: newDef
    })
    clearInput()
})

function clearInput() {
    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
}
// This line will display the card when the page is refreshed
window.onload = displayCard;