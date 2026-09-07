import { accounts } from "./account.js";
import { rl,menuinput } from "./app.js";


function withdraw (){
    console.log("-----Withdraw-----");
    rl.question("Enter account Number: ",(account)=>{
        try{
            let index = accounts.findIndex((acc_num) => acc_num.account_number == account);
            if(!(index >= 0)) throw new Error("Account Not found");
            
            askAMount(index);
        }
        catch(error){
            console.log(error);
            console.log("\n\n");
            withdraw();
        }
    });
}

function askAMount(index){
    rl.question("Enter the withdrawl amount: ",(amount) => {
        try{
            if (!Number(amount)) throw new Error("Invalid Input");
            amount = Number(amount);
            if(amount < 500) throw new Error("Minimum withdrawl balance: 500");
            if (amount > accounts[index].balance ) throw new Error("Insufficient Amount");

            accounts[index].balance -= amount;
            accounts[index].transaction.push(`Withdraw: Rs.${amount}`);
            console.log(`Amount: ${amount} withdrawn from account: ${accounts[index].account_number} sucessfully.`);

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

export {withdraw}