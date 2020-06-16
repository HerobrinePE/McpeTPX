require("./server.js")
const {Client, MessageEmbed, Collection} = require("discord.js")
let key = process.env.TOKEN
const cli = new Client({
  disabledEveryone: true
})
let prefix = "-"
cli.on("ready", member =>{
  console.log("Online on "+cli.guilds.cache.size+" Guilds")
  setInterval(function(){
    let stats = [`online on ${cli.guilds.cache.size} servers`, `use my prefix ${prefix}`, `@${cli.user.tag}`]
    let ran = stats[Math.floor(Math.random() * stats.length)]
  cli.user.setActivity(ran, {type: "STREAMING"})
}, 10000)
})
cli.on("message", (args, message )=>{
  if(message.content.startsWith(prefix+"test")) return message.reply("Test was successful").then(m=>{
    m.react("✅")
  })
})

cli.login(key)
