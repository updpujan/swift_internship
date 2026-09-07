import { accounts } from "./account.js";
import { rl,menuinput } from "./app.js";
import { saveData } from "./fileService.js";


function deposit (){
    console.log("-----Deposit-----");
    rl.question("Enter account Number: ",(account)=>{
        try{
            let index = accounts.findIndex((acc_num) => acc_num.account_number == account);
            if(!(index >= 0)) throw new Error("Account Not found");
            
            askAMount(index);
        }
        catch(error){
            console.log(error);
            console.log("\n\n");
            deposit();
        }
    });
}

function askAMount(index){
    rl.question("Enter the deposite amount: ",async (amount) => {
        try{
            if (!Number(amount)) throw new Error("Invalid Input");
            amount = Number(amount);
            if (amount < 100 ) throw new Error("Minimum deposit amount Rs.100");

            accounts[index].balance += amount;
            accounts[index].transaction.push(`Deposite: Rs.${amount}`);
            await saveData(accounts);
            console.log(`Amount: ${amount} deposited to account: ${accounts[index].account_number} sucessfully.`);
            console.log(`Total Balance: ${accounts[index].balance}\n\n`);
            menuinput();
        }
        catch(error){
            console.log(error);
            console.log("\n\n");
            askAMount();
        }
    });
}

export {deposit}