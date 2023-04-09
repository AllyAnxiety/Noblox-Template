const noblox = require('noblox.js')
const settings = require('./settings.js')
const fs = require('fs');

//Command Handler 
const CommandsArray = []

fs.readdir('./commands/',async (err,files)=> {
    if (err) return console.log("We Have An Error!").then(console.log(err));
     files.forEach(f => {
        let fl = require(`./commands/${f}`)
        console.log(`${fl.config.name} Loading...`)
        CommandsArray.push(fl)
        console.log(`${fl.config.name} Loaded!`)

        
     })
    
})


//Command Handler




