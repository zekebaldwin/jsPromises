// url = "http://numbersapi.com"
// favNumber = 1
// const div = document.getElementById('ul')
// axios
// .get(`${url}/${favNumber}/trivia?json`)
// .then(number => {
//     console.log(`${number.data.text}`)
// })

// axios
// .get(`${url}/1..4/trivia`)
// .then(numbers => {
//     console.log(`${numbers.data['3']}`)
// })
// let masterPromise = []
// for (let i = 0; i < 4; i++ ) {
//     masterPromise.push(
//         axios.get(`${url}/${favNumber}`)
//     )
// }
// Promise.all(masterPromise)
// .then(promises => {
//     promises.forEach(data => {
//         const li = document.createElement('li')
//         li.innerHTML += data.data
//         div.append(li)
//     })
    
// })
// const baseUrl = "http://deckofcardsapi.com/api/deck/new/"
// const pickACard = "http://deckofcardsapi.com/api/deck/new/draw/?count=1"
// axios
// .get(pickACard)
// .then(card => {
//     console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
// })

// const pickACard = "http://deckofcardsapi.com/api/deck/new/draw/?count=2"
// axios
// .get(pickACard)
// .then(card => {
//     console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}, ${card.data.cards[1].value} of ${card.data.cards[1].suit}`)
// })

const button = document.getElementById('button')
const ol = document.getElementById('cardList')
let deckId = null
axios
    .get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(id => {
    deckId = id.data.deck_id
    })




function callfunc () {
    axios
        .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => {
        if (res.data.cards[0].value){
            const li = document.createElement('li')
            li.innerHTML = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
            ol.append(li)
        } else {
            button.removeEventListener('click', callfunc)
        }
        
}
    )

}
button.addEventListener('click', callfunc)









