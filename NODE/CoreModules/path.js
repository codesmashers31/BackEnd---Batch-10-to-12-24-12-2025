import { log } from 'console'
import path from 'path'

//console.log(path);


// Join - 
// path.join(path1,path2,....)

// absolute path
// path.resolve(path)

// Take the File extension
// path.extname(filename)

// Take the Filename
// path.basename(filename)

const foldername = "upload/newdata"

const fileName = "server.js"


const filePath = path.join(foldername,fileName)

console.log(filePath);




const absolutePath = path.resolve("server.js")



console.log('absolutePath',absolutePath);
