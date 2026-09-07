import fs from "node:fs/promises";
import path from "node:path";

const CURRENT_DIR = path.resolve();
const DATA_DIR = path.join(CURRENT_DIR,"data")
const FILE_PATH = path.join(DATA_DIR,"account.json");



async function retriveData(){
    try{
        await fs.access(FILE_PATH);
        const data = await fs.readFile(FILE_PATH,"utf-8");
        if(data.trim()===""){
            return [];
        }
        return JSON.parse(data);
    }
    catch(error){
        if(error.code == "ENOENT") {
            await fs.mkdir(DATA_DIR, { recursive: true });
            await fs.writeFile(FILE_PATH,JSON.stringify([],null,2));
            return [];
        }
        else console.log(error);


    }
}

async function saveData(accs){
    try{
        await fs.writeFile(FILE_PATH,JSON.stringify(accs,null,2));
    }
    catch(error){
        console.log(error);
    }
}

export {retriveData,saveData}