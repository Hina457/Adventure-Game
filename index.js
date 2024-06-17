#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("*".repeat(45)));
console.log(chalk.yellow("*".repeat(45)));
console.log("WELCOME TO HINA ALVI ADVENTURE GAME PROJECT!");
console.log(chalk.yellow("*".repeat(45)));
console.log(chalk.red("*".repeat(45)));
//********************* Games variables *****************/
let enemies = ["Skeleton", "zombie", "warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamangeToHero = 25;
//********************* player variables *****************/
let HeroHealth = 100;
let attackdamagetoenemy = 50;
let numhealthpotion = 3;
let healthpotionHealAmount = 30;
let healthpotionDropChance = 50;
//********************* While loop condition *****************/
let gameRunning = true;
console.log("Welcome to Deadzone!");
game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyINdex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyINdex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health :${HeroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1.Attack", "2.Take Health potion", "3.Run"]
        });
        if (options.ans === "1.Attack") {
            let attackdamagetoenemy = 50;
            let damageToenemy = Math.floor(Math.random() * attackdamagetoenemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamangeToHero + 1);
            enemyHealth -= damageToenemy;
            HeroHealth -= damageToHero;
            console.log(`Youy strike the ${enemy} for ${damageToenemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (HeroHealth < 1) {
                console.log("you have taken to much damage. you are too weak to continue.");
                break;
            }
        }
        else if (options.ans === "2.Take Health potion") {
            if (numhealthpotion > 0) {
                HeroHealth += healthpotionHealAmount;
                numhealthpotion--;
                console.log(`you use health potion for ${healthpotionHealAmount}`);
                console.log(`you now have ${HeroHealth} health.`);
                console.log(`you have ${numhealthpotion} health potions left.`);
            }
            else {
                console.log(`you have no health potions left. defeat enemy for a chance get health potion`);
            }
        }
        else if (options.ans === "3.Run") {
            console.log(`you run way from ${enemy}`);
            continue game;
        }
    }
    if (HeroHealth < 1) {
        console.log(`you are out from battle. you are too weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${HeroHealth} health.`);
    let random = Math.floor(Math.random() * 100 + 1);
    if (random < healthpotionDropChance) {
        numhealthpotion++;
        console.log(`enemy give you health potion`);
        console.log(`your health is ${HeroHealth}`);
        console.log(`your health potion is ${numhealthpotion}`);
    }
    let useroption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do now",
        choices: ["1.Continue", "2.Exit"]
    });
    if (useroption.ans === "1.Continue") {
        console.log("you are continue on your adventure game");
    }
    else {
        console.log("you successfully Exit from DeadZone");
        break;
    }
    console.log("Thank you for PLaying.\n");
}
