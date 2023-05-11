var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

// repeat and execute as long as the enemy robot is alive
while (playerHealth > 0 && enemyHealth > 0) {


//ask player if he wants to fight or skip
var promptFight = window.prompt("would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose ");

// if player picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
  }
}



  //remove enemys health by subtacting the amount set in the playerattack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + 'attacked' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + 'health remaining.'
  );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    //award player money for winning
    playerMoney = playerMoney + 20;
    //leave while() loop since enemy is dead
    break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} // end of whille loop
}; //end of fight function



//fight each enemy robot by looping over them and fighting them one at a time
for (var i = 0; i <enemyNames.length; i++) {
//if player still alive keep fighting
if(playerHealth > 0) {
//let player know what round they are in, remember that arrays start at 0 so need to have 1 added to it
window.alert('welcome to robot gladiators! round ' + (i + 1));

//pick new enemy to fight based on the index of the enemyNames array
var pickedEnemyName = enemyNames[i];

//reset enemyHealth before starting new fight
enemyHealth = 50;

//use debugger to pause script from running and check whats going on at the moment in the code
//debugger;

//pass the pickedEnemyName variables value into the fight function. where it will assume the value of enemyName parameter
fight(pickedEnemyName);
}
 
//if player isnt alive stop the game
else {
  window.alert('you have lost your robot in battle, game over');
  break;
}
}
