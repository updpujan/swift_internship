//imports
import { rl ,menuinput} from "./app.js";
import { retriveData,saveData } from "./fileService.js";


//empty array
export const accounts = await retriveData();

function enterName(){
    console.log("\n-----Create Account------");
    rl.question(`Enter your name:::`,(name)=>{
        createAccount(name);
    });
}

async function createAccount(name){
    
    let id = accounts.length + 1;
    let account_number = 1000+id;

    const account_info = {
    id,
    name,
    account_number,
    balance:0,
    transaction: [],
    };

    accounts.push(account_info);
    await saveData(accounts);
    console.log("Account Created Sucessfully..");
    console.log(`Your information are as folowed:
            Name:${account_info.name}
            Account number:${account_info.account_number}
            Balance: ${account_info.balance = 0}\n\n`);

    menuinput();
}

export {enterName}
