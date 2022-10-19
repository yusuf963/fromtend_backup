const { default: resultStore } = require('./resultsService');

const store = resultStore();

function getResult(id) {
    return store.getResult(id);
}

function newResult(result) {
    store.newResult(result);
    return {};
}

function reset() {
    store.reset();
}

function scoreboard() {
// The scoreboard should show:
// The seats for each party
// The overall winner if there is one
//  Left blank for you to fill in
  const winningSeat = store.getAll()
  const result = winningSeat.map((seat, index) => { 
  const result1 =  Object.keys(seat.partyResults).map((party, index) => { 
      return seat.partyResults[party]
    })
    // return Math.max(seat.partyResults[index].votes)
    const winningSeat = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    console.log(winningSeat)
  })
  return result
  
}

module.exports = { getResult, newResult, reset, scoreboard };
//0.partyResults[0].votes
//0.partyResults[1].votes