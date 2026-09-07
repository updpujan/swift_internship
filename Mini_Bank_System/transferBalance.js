import { rl,menuinput } from "./app.js";
import { accounts } from "./account.js";

 const tran = {
        sender,
        receiver,
        amount:0,
    }

function sender(){
    console.log("-----Transfer Balance-----");
    rl.question("Enter your account Number: ",(account)=>{
        try{
            let index = accounts.findIndex((acc_num) => acc_num.account_number == account);
            if(!(index >= 0)) throw new Error("Account Not found");
            tran.sender = index;
            receiver();
        }
        catch(error){
            console.log(error);
            console.log("\n");
            sender();
        }
    });
}


function receiver(){
    rl.question("Enter Receiver account Number: ",(account)=>{
        try{
            let index = accounts.findIndex((acc_num) => acc_num.account_number == account);
            if(!(index >= 0)) throw new Error("Account Not found");
            if(tran.sender == index) throw new Error("same account number for sender and receiver");
            tran.receiver = index;
            transferAmount();
        }
        catch(error){
            console.log(error);
            console.log("\n");
            receiver();
        }
    });
}


function transferAmount(){
    rl.question("Enter transfer amount ",(amount)=>{
        try{
            if(!Number(amount)) throw new Error("Invalid Input");
            amount = Number(amount);
            let senderBalance = accounts[tran.sender].balance;
            if(senderBalance<amount) throw new Error("Insufficeient Balance");
            else tran.amount = amount;
            accounts[tran.sender].balance -= tran.amount;
            accounts[tran.sender].transaction.push(`Transfer, withdrwan:${amount}`);
            accounts[tran.receiver].balance += tran.amount;
            accounts[tran.receiver].transaction.push(`Transfer, deposited:${amount}`);
            console.log("Balance trnasfered Sucessfully");
            menuinput();


        }
        catch(error){
            console.log(error);
            console.log("\n");
            transferAmount();
        }
    });
}


export {sender}