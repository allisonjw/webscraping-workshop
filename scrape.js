var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

//go to www.seahawks.com
//click on anchor for the link to information about the team
//find player names by class querySelectAll
//map over the player names and put into an array

nightmare
  .goto('https://www.seahawks.com/')
  .click('a[href="https://www.seahawks.com/team/players-roster/"]')
  .wait(250)
  .evaluate(() => {
    var playerNames = document.querySelectorAll('.nfl-o-roster__player-name');
    var name = [].slice.call(playerNames);
    return name.map((node) => {
      return node.innerText
    });
  })
  .end()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });
