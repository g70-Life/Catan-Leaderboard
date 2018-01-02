var myFirebaseRef = new Firebase("https://g70-catan-leaderboard.firebaseio.com/")
var playersRef = new Firebase("https://g70-catan-leaderboard.firebaseio.com/players")

var players = []
myFirebaseRef.on("value", function(snapshot) {
  snapshot.val().players.forEach(function(e){
    players.push(e)
  })
})

function rankEm(players){
  var wins = players.sort(function(a,b){
    return a.id - b.id
  })
  return wins.sort(function(a,b){
    return a.wins - b.wins
  })
}


const board = document.querySelector('#board')
function appendPlayers(playerArray){
  console.log("Hard Refresh if nothing shows up.");
  for (var i = 0; i < playerArray.length; i++){
    var entry = document.createElement('tr')
    var name = document.createElement('td')
    name.textContent = playerArray[i].name
    name.className = "player-name"
    var wins = document.createElement('td')
    wins.textContent = playerArray[i].wins
    wins.className = "win-count"
    var quote = document.createElement('td')
    quote.textContent = `"${playerArray[i].quote}"`
    quote.className = "quotation"
    entry.appendChild(wins)
    entry.appendChild(name)
    entry.appendChild(quote)
    board.appendChild(entry)
  }
}

setTimeout(function(){
  rankEm(players).reverse()
  appendPlayers(players)
}, 1000)


// const form = document.querySelector('form')
// form.addEventListener('submit', function(e){
//   e.preventDefault()
//   var formObj = new FormData(e.target)
//   let winner = formObj.get("playerName")
//   // addWin(winner)
// })

// function addWin(string){
//   if (string === )
// }
// playersRef.child(4).child("name").set("OG Settler")
// playersRef.update({id: 7, name: "Ignacio", wins: 2, quote: "You kill my father, prepare to die"})

// myFirebaseRef.set({players: {"4" : {name: "adam da OG"}}});


// function newWinner(player, string) {
//   playersRef.push({id: "new", name: player, wins: 1, quote: string})
// }
