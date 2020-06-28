const { Client , RichEmbed , Collection} = require("discord.js")
const cli = new Client({
  disabledEveryone: true
})
console.log(cli.user.tag)
cli.on("ready", async() =>{
  cli.user.setActivity("CODM", {type: "PLAYING"})
})
cli.on('guildMemberAdd', member =>{
   const guild = cli.guilds.get("713234545788583967");
      var memberCount = guild.members.filter(member => !member.user.bot).size;  
      var memberCountChannel = cli.channels.get("713778256708501524");
        memberCountChannel.setName("|>>|"+`${memberCount}`+"|<<|"+"SOILDERS");
   });

cli.on('guildMemberRemove', member =>{
   const guild = cli.guilds.get("713234545788583967");
      var memberCount = guild.members.filter(member => !member.user.bot).size;  
      var memberCountChannel = cli.channels.get("713778256708501524");
      memberCountChannel.setName("|>>|"+`${memberCount}`+"|<<|"+"SOILDERS");
   });
cli.on("guildMemberAdd", member =>{
  const em = new RichEmbed()
 var set = member.send("",em.setTitle("Welcome") ,em.setDescription("Welcome Soilder to ThaGawd's server for you to start chatting\n we need you to read the rules and if you follow along do +verify and you will be able to chat"), em.setFooter(`ThaGawds Dev { HerobrinePE }`),em.setColor("RANDOM")).then(set =>{
   set.react("🎖")
 })
 
})
cli.on('message', message => {
   if (message.content.startsWith("+say ")) {
     if(message.member.hasPermission("MANAGE_MESSAGES")){
      message.delete(1);
      message.channel.send(message.content.slice(5, message.content.length))
   }else{
     message.reply("sorry pal you dont meet the requirements\n MANAGE_MESSAGES")
   }
}
})
 cli.on("message", message =>{
   if (message.content == "+verify"){
       if(message.channel.id == "713728062931337236") {
      message.member.addRole("713544880747577354")
  message.author.send("verified Sucessfully").then(()=>{
     message.delete()
     })
     }else{
       message.delete()
       var ren = message.author.send("Your not in the Verification channel or user verified sucessfully").then(()=>{
         ren.react("❌")
       })
       }
   } else {
    if(message.channel.id == "713728062931337236") {
   if (message.content !== "+verify")
     message.delete()
   }else{
     
    }
   }
 })
cli.on("message", message => {
  if(message.content.startsWith("{mdm")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cant access this")
    message.reply("mass dms sent")
  let text = message.content.split(" ").slice(1)
  if(!text) return message.reply("Cant do that")
    message.guild.members.forEach(member =>{
   member.send(text.join(" "))
      message.delete()
    })
  }
})

cli.login(process.env.TOKEN)
