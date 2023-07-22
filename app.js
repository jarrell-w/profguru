
const addCard = () => {
    const userInput = inputCardBox.value
    if(userInput !== '') {
    const newCard = document.createElement("div")
    const newCardText = document.createElement('p') 
    newCardText.innerText = userInput
    inputCardBox.value = ''
    newCard.appendChild(newCardText)
    newCard.classList.add('not-started')
    firstCardBox.appendChild(newCard)
    } else {
        alert('Card cannot be empty!')
        return
    }
    
}



const addNewCard = document.getElementById('add-new-card')
addNewCard.addEventListener('click', addCard)

const inputCardBox = document.getElementById('input-box')
const firstCardBox = document.getElementById('card1')
