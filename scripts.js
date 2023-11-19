//Få kontakt med tärning 1
let dice1 = document.getElementById("diceNumber1");
//Få kontakt med tärning 2
let dice2 = document.getElementById("diceNumber2");
//Få kontakt med tärning 3
let dice3 = document.getElementById("diceNumber3");
//Få kontakt med tärning 4
let dice4 = document.getElementById("diceNumber4");
//Få kontakt med tärning 5
let dice5 = document.getElementById("diceNumber5");

//Få kontakt med fältet ones
let ones = document.getElementById("ones");
//Få kontakt med fältet twos
let twos = document.getElementById("twos");
//Få kontakt med fältet threes
let threes = document.getElementById("threes");
//Få kontakt med fältet fours
let fours = document.getElementById("fours");
//Få kontakt med fältet fives
let fives = document.getElementById("fives");
//Få kontakt med fältet sixes
let sixes = document.getElementById("sixes");
//Få kontakt med fältet sumPartOne
let sumPartOne = document.getElementById("sumPartOne");
//Få kontakt med fältet bonus
let bonus = document.getElementById("bonus");
//Få kontakt med fältet onePair
let onePair = document.getElementById("onePair");
//Få kontakt med fältet twoPair
let twoPair = document.getElementById("twoPair");
//Få kontakt med fältet threeOfAkind
let threeOfAKind = document.getElementById("threeOfAKind");
//Få kontakt med fältet fourOfAkind
let fourOfAkind = document.getElementById("fourOfAkind");
//Få kontakt med fältet fullHouse
let fullHouse = document.getElementById("fullHouse");
//Få kontakt med fältet smallStraight
let smallStraight = document.getElementById("smallStraight");
//Få kontakt med fältet largeStraight
let largeStraight = document.getElementById("largeStraight");
//Få kontakt med fältet chance
let chance = document.getElementById("chance");
//Få kontakt med fältet yatsy
let yatsy = document.getElementById("yatsy");
//Få kontakt med fältet totalSum
let totalSum = document.getElementById("totalSum");

//Få kontakt med fältet ones för player 1
let ones1 = document.getElementById("ones1");
//Få kontakt med fältet ones för player 2
let ones2 = document.getElementById("ones2");
//Få kontakt med fältet twos för player 1
let twos1 = document.getElementById("twos1");
//Få kontakt med fältet twos för player 2
let twos2 = document.getElementById("twos2");
//Få kontakt med fältet threes för player 1
let threes1 = document.getElementById("threes1");
//Få kontakt med fältet threes för player 2
let threes2 = document.getElementById("threes2");
//Få kontakt med fältet fours för player 1
let fours1 = document.getElementById("fours1");
//Få kontakt med fältet fours för player 2
let fours2 = document.getElementById("fours2");
//Få kontakt med fältet fives för player 1
let fives1 = document.getElementById("fives1");
//Få kontakt med fältet fives för player 2
let fives2 = document.getElementById("fives2");
//Få kontakt med fältet sixes för player 1
let sixes1 = document.getElementById("sixes1");
//Få kontakt med fältet sixes för player 2
let sixes2 = document.getElementById("sixes2");
//Få kontakt med fältet sum för player 1
let sumPartOne1 = document.getElementById("sumPartOne1");
//Få kontakt med fältet sum för player 2
let sumPartOne2 = document.getElementById("sumPartOne2");
//Få kontakt med fältet bonus för player 1
let bonus1 = document.getElementById("bonus1");
//Få kontakt med fältet bonus för player 2
let bonus2 = document.getElementById("bonus2");
//Få kontakt med fältet one pair för player 1
let onePair1 = document.getElementById("onePair1");
//Få kontakt med fältet one pair för player 2
let onePair2 = document.getElementById("onePair2");
//Få kontakt med fältet two pair för player 1
let twoPair1 = document.getElementById("twoPair1");
//Få kontakt med fältet two pair för player 2
let twoPair2 = document.getElementById("twoPair2");
//Få kontakt med fältet three of a kind för player 1
let threeOfAKind1 = document.getElementById("threeOfAKind1");
//Få kontakt med fältet three of a kind för player 2
let threeOfAKind2 = document.getElementById("threeOfAKind2");
//Få kontakt med fältet four of a kind för player 1
let fourOfAkind1 = document.getElementById("fourOfAkind1");
//Få kontakt med fältet four of a kind för player 2
let fourOfAkind2 = document.getElementById("fourOfAkind2");
//Få kontakt med fältet full house för player 1
let fullHouse1 = document.getElementById("fullHouse1");
//Få kontakt med fältet full house för player 2
let fullHouse2 = document.getElementById("fullHouse2");
//Få kontakt med fältet small straight för player 1
let smallStraight1 = document.getElementById("smallStraight1");
//Få kontakt med fältet small straight för player 2
let smallStraight2 = document.getElementById("smallStraight2");
//Få kontakt med fältet large straight för player 1
let largeStraight1 = document.getElementById("largeStraight1");
//Få kontakt med fältet large straight för player 2
let largeStraight2 = document.getElementById("largeStraight2");
//Få kontakt med fältet chance för player 1
let chance1 = document.getElementById("chance1");
//Få kontakt med fältet chance för player 2
let chance2 = document.getElementById("chance2");
//Få kontakt med fältet yatzy för player 1
let yatsy1 = document.getElementById("yatsy1");
//Få kontakt med fältet yatzy för player 2
let yatsy2 = document.getElementById("yatsy2");
//Få kontakt med fältet TOTAL SCORE för player 1
let totalSum1 = document.getElementById("totalSum1");
//Få kontakt med fältet TOTAL SCORE för player 2
let totalSum2 = document.getElementById("totalSum2");
//Få kontakt med knappen roll dice
const rollDiceBtn = document.getElementById("rollDiceBtn");

// array.forEach((element) => {});
// array[(1, 2, 3, 4, 5, 6)];

let rollNumber = 0;

function checkRollNumber() {}

// Function to roll a single die
function randomizeNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

//Funktion för att kasta tärning genom att trycka på roll dice knappen
rollDiceBtn.addEventListener("click", function () {
  //function som räknar alla poäng
  function countPoints() {
    //Variabler som håller varje kastad tärnings resultat
    let diceResult1 = randomizeNumber();
  }

  updateUI();
});

//Funktion som slänger in tärningsresultatet i domen
function updateUI() {
  // Get the results of each die roll
  let result1 = randomizeNumber();

  //Adding the result from dice 1 to the different input divs
  ones.textContent = result1;
  twos.textContent = result1;
  threes.textContent = result1;
  fours.textContent = result1;
  fives.textContent = result1;
  sixes.textContent = result1;
  sumPartOne.textContent = result1;
  bonus.textContent = result1;
  onePair.textContent = result1;
  twoPair.textContent = result1;
  threeOfAKind.textContent = result1;
  fourOfAkind.textContent = result1;
  fullHouse.textContent = result1;
  smallStraight.textContent = result1;
  largeStraight.textContent = result1;
  chance.textContent = result1;
  yatsy.textContent = result1;
  totalSum.textContent = result1;

  // Update the HTML elements for player 1
  dice1.textContent = result1;
  dice2.textContent = result2;
  dice3.textContent = result3;
  dice4.textContent = result4;
  dice5.textContent = result5;
}

//function for adding all ones to the field One
function addAllOnes() {
  if ((rollDice1 = 1)) {
    ones.textContent = result1 + result2 + result3;
  } else {
    ones.textContent = "funkar";
  }
}

//function for adding all threes to the field One
function addAllThrees() {}

//function for adding all fours to the field One
function addAllFours() {}

//function for adding all fivesto the field One
function addAllfives() {}

//function for adding all sixes to the field One
function addAllSixes() {}

// A function that sums upp allt he points inside the one to six fields
function sumUpPartOne() {}

// A function that determines if the player should get a bonus
function bonusSumUp() {}

//skapa funktion som sparar tärningarna i dice area

//function för att kasta de tärningar som inte ligger i dice area

//summera ones, twos, threes, fours, fives och sixes,
//Om summan av summeringen är 63 eller lika addera/lägg till 35 poäng i bonus rutan

//function för att spara tärning 1 i dice area
//function för att spara tärning 2 i dice area
//function för att spara tärning 3 i dice area
//function för att spara tärning 4 i dice area
//function för att spara tärning 5 i dice area
//function för att spara tärning 6 i dice area
//function för att kasta alla tärningar samtidigt vi första försöket

//variabel för som lagrar varje tärnings siffra som ligger i boet

//funktion som räknar ut de poäng på tärningar i dice area

//Kasta tillbaka alla möjliga resultat i score area
