import { accounts } from "./account.js";
import { rl,menuinput } from "./app.js";


function searchAccount (){
    console.log("-----View Account-----");
    rl.question("Enter account Number: ",(account)=>{
        try{
            let index = accounts.findIndex((acc_num) => acc_num.account_number == account);
            if(!(index >= 0)) throw new Error("Account Not found");
            
            viewAccount(index);
        }
        catch(error){
            console.log(error);
            console.log("\n\n");
            searchAccount();
        }
    });
}

function viewAccount(index){   

    console.log(`---Account Info: ${accounts[index].name}`);

    console.log(`Name: ${accounts[index].name}
    Account_Number: ${accounts[index].account_number}
    Balance: ${accounts[index].balance}`);

    if (accounts[index].transaction.length === 0) {
        console.log("Transactions: No transaction yet\n\n");
    } else {
    console.log("Transactions:");
    accounts[index].transaction.forEach((trans) => {
        console.log("\t",trans);
    });
    console.log("\n\n");
    }
    menuinput();

}

export {searchAccount}