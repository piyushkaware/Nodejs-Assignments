function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[process.argv.length-1]
}


function getNameFromEnv() {
    // Write your code here    
    return process.env.name
}


function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline');
    const out = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })

    out.question((name)=>{
        out.close();  
    })

}


module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}