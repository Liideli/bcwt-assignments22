"use strict";

const kohde = document.getElementById("kohde");
const number = prompt("Enter a number of candidates");
parseInt(number);
let votes = 0;
const candidates = [];
parseInt(votes);

for (let y = 0; y < number; y++) {
  const name = prompt(`Name for candidate ${y + 1}`);
  candidates.push(`${name}`, votes);
}

for (let x = 0; x < prompt("Enter the number of voters");
 x++) {
  const votefor = prompt(`Who are you voting for?`);
  let winner;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates.includes(`${votefor}`)) {
      grow(votes);
    }
  }
}

function grow() {
    for (let i = 0; i < candidates.length; i++) {
      votes++;
      candidates.votes = votes;
      console.log(candidates.votes);
      console.log('number of votes: ', votes);
    }
    return votes;
  }

  console.log('The winner is ' + Math.max(candidates.votes) + ' with ' + Math.max(candidates.votes) + ' votes.');
