var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoneny = 10;

//you can also log multiple values at one like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
//alert players that they are starting the round
window.alert("welcome to robot galdiators")

//ask player if he wants to fight or skip
var promptFight = window.prompt("would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose ");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("are you sure you'd like to quit ");

    //if yes leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye");
        //subtract money from playerMoney for skipping
        playerMoneny = playerMoneny - 2;
    }
    //if no ask question again by running fight () again
    else {
        fight();
    }
}
}

fight();