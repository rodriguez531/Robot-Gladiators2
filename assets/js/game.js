var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10; 

//you can also log multiple values at one like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "roberto";
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function () {
//alert players that they are starting the round
window.alert("welcome to robot galdiators")


//subtract the value of player attack from the value of enemy health and use that value to update the enemyhealth
enemyHealth = enemyHealth - playerAttack;

//log a resulting messsage to the console so we know that it worked
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "
);

//check enemys health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + "health left");
}

//subtract the value of enemy attack from the value of player health and use that results to update playerhealth
playerHealth = playerHealth - enemyAttack;
//log a resulting message to the console so we konw that it worked
console.log(
    enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + "health remaining."
);

//check players health
if (playerHealth <= 0) {
    window.alert(playerName + "has died");
}
else {
    window.alert(playerName + "still has " +playerHealth + "health left");
}
};


fight();