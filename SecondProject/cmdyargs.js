var yargs = require('yargs')
let list = [];
yargs.command({
    command:'myfirst',
    describe:"Add two string",
    builder:{
        firstName:{
            describe:"Add first name",
            demandOption:true, //compulsory
            type:"string"
        },
        secondName:{
            describe:"Add second name",
            // demandOption:true,
            type:"string"
        }
    },
    handler(argv) {
        list.push(argv.firstName)
        console.log("Name is "+argv.firstName);
        console.log("Last Name is "+argv.secondName);

    }
})

//add command - to add task in todo list
//display - display data
yargs.parse()