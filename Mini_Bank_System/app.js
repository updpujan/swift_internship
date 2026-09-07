//Imports
import readline from "readline";
import { enterName } from "./account.js";
import { deposit } from "./deposite.js";
import { withdraw } from "./withdraw.js";
import { searchAccount } from "./viewAccount.js";
import { sender } from "./transferBalance.js";

//interface for the input in the console
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\t\t------Welcome to Mini Bank System------");

//display the menu items and read the input from console
function menuinput(){
    rl.question(`-----Please select the service of the bank(Enter the number corresponding to the Service)-----
        ----- Mini Bank System -----
        1. Create account
        2. View account
        3. Deposit
        4. Withdraw
        5. Transfer
        6. Exit
        :::Enter your choice: `,(service)=>{
            try{
                if (!Number(service)){
                    throw new Error("Enter value is not a number");
                }
                service = Number(service);  
                menuselect(service); 
            }
            catch(error){
                console.log(error);
                console.log("\n\n");
                menuinput();
            }
    });
}


function menuselect(serivce){
    switch(serivce){
        case 1:
            //create account
            enterName();
            break;
        case 2:
            //view account
            searchAccount();
            break;
        case 3:
            //deposite ammount to account
            deposit();
            break;
        case 4:
            //withdraw amount from account
            withdraw();
            break;
        case 5:
            //transfer amount from one account to another
            sender();
            break;
        case 6:
            rl.close();
            console.log("-----Thank you for using the Mini-Bank-System-----");
            break;
        default:
            console.log("Invalid Input\nPlease enter again\n\n");
            menuinput();
    }
}

menuinput();

export {menuinput}