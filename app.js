var players = []

var myFirebaseRef = new Firebase("https://g70-catan-leaderboard.firebaseio.com/")
var playersRef = new Firebase("https://g70-catan-leaderboard.firebaseio.com/players")
myFirebaseRef.on("value", function(snapshot) {
  snapshot.val().players.forEach(function(e){
    players.push(e)
  })
})


var ranked = rankEm(players)

// playersRef.child(4).child("name").set("OG Settler")
// playersRef.update({id: 7, name: "Ignacio", wins: 2, quote: "You kill my father, prepare to die"})

// myFirebaseRef.set({players: {"4" : {name: "adam da OG"}}});


// function newWinner(player, string) {
//   playersRef.push({id: "new", name: player, wins: 1, quote: string})
// }

function rankEm(players){
  return players.sort(function(a,b){
  	return a.wins - b.wins
  })
}



const board = document.querySelector('#board')

function appendPlayers(playerArray){
  for (var i = 0; i < playerArray.length; i++){
    var entry = document.createElement('tr')
    var name = document.createElement('td')
    name.textContent = playerArray[i].name
    var wins = document.createElement('td')
    wins.textContent = playerArray[i].wins
    var quote = document.createElement('td')
    quote.textContent = playerArray[i].quote
    entry.appendChild(wins)
    entry.appendChild(name)
    entry.appendChild(quote)
    board.appendChild(entry)
  }
}

setTimeout(function(){
  rankEm(players).reverse()
  appendPlayers(players)
}, 2000)
