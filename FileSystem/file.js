/*
--File system
-system that uses os to interact with files operations like create, delete, write, read,.... 

-- file
-file is a collection of data

--directory
-file system container that organizes files and folder/directory

--path
- it tells system where the file is actually located
- absolute path: path starts from the file system root
- relative path: path starts from the current path, relative to current directory

- fs module: node uses this module to work with file system

--operation in file
-read
-write
-update
-delete
-create


*/
import fs from "node:fs/promises";

//create file
const createfile = async () =>{
    await fs.writeFile("file.txt","This is file creation, also writing to file.");
    console.log("FIle created");
    await readfile();
    await append();
    await readfile();
    await rename();
    await deletefile();
};

//read the created file
const readfile = async ()=>{
    const data = await fs.readFile("file.txt","utf8");// use of utf8 is becaue by default the data it reads is in bytes so to maake it in human readble/string form we use utf8 alos buffer data can be converted by : console.log(data.toString("utf8"));
    console.log(data);
};


//appending to a file
const append = async()=>{
    await fs.appendFile("file.txt","This is appended content");
    console.log("Data apended sucessfully");
};



//delete a file
const deletefile = async () => {
    await fs.unlink("rename.txt");
    console.log("file deleted sucessfully");
};



//create directories
const credir = async () => {
    await fs.mkdir("pujan/dir1",{
        recursive: true//means will create the parent directory if not there
    });
    console.log("DIrectory created sucess...");
    readdir();
};

//read directory
const readdir = async () => {
    const file = await fs.readdir(".");//. means current directory
    console.log(file);
};


//renaming a file
const rename = async () => {
    await fs.rename("file.txt","rename.txt");
    console.log("file rename sucessfully");
};

createfile();
credir();

//absolute dir path calculate and join other path
//path.join(), joins the two path to one
//path.resolve(), connect the path to absolute path
//path.basename(), gives the base of path like last point of it
//path.dirname(), give the directory path name
//path.extname(), for know the extension of file
//process.cwd(), current dir from where the node program stated
//_dirname, directory containg current module

import path from "path";
const currentdir = path.resolve();//or use path.resolve() without argument ro process.cwd()
const filepath = path.join(currentdir,"data","user.js");
console.log(filepath);

//copy file: copyFile(), copies content of one file to another
//delete dir: rm(), also recursive: true then will delete entire tree

//file metadata
const stats = await fs.stat("metadata");
console.log(stats);
console.log(stats.size,
stats.birthtime,
stats.mtime,
stats.isFile(),
stats.isDirectory());


