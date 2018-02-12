const Discord = require("discord.js");
const prefix = 'ka.';
const bot = new Discord.Client({disableEveryone: false});
const client = new Discord.Client({disableEveryone: false});

var server = {};

bot.on ("ready", async () => {
	console.log('\nReady!\n');

	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log("\nINVITE BOT:\n" + link);
	}).catch(err => {
		console.log(err.stack);
	});

	await bot.generateInvite(["ADMINISTRATOR"]);
    bot.user.setStatus('dnd')
});

bot.on("ready", function(){
    bot.user.setPresence({game : {name : `ka.help`, url:"https://bots.discord.pw/bots/276060004262477825", type:1}})
    console.log("BOT IS READY");
});

bot.on("message", message =>{
    if (message.content === prefix + "server"){
        var channel = message.guild.channels.find("name","private")
        channel.send("ka.test1")
        channel.send("ka.test2")
        channel.send("ka.server")

        
}
})

bot.on("message", message =>{
    if (message.content === prefix + "test2"){
        var channel = message.guild.channels.find("name","private")
        channel.send("_-_**4**_-_")
        channel.send("_-_**3**_-_")
        channel.send("_-_**2**_-_")
        channel.send("_-_**1**_-_")
        channel.send("_-_**0**_-_")
        channel.send("***___~Changement ?~___***  @here ")
        message.guild.setIcon('https://cdn.discordapp.com/attachments/370567573009334273/412687156516225024/pack_icon.png')
}
});

bot.on("message", message =>{
    if (message.content === prefix + "test1"){
        var channel = message.guild.channels.find("name","private")
        channel.send("_-_**10**_-_")
        channel.send("_-_**9**_-_")
        channel.send("_-_**8**_-_")
        channel.send("_-_**7**_-_")
        channel.send("_-_**6**_-_")
        channel.send("_-_**5**_-_")
        message.guild.setIcon('https://cdn.discordapp.com/attachments/370567573009334273/412687531054989312/KILLLURA2.png')
}
});

bot.login("NDEyNjg3OTk3NTUzNjA2NjY2.DWN5Kg.pWJ6EVgiJWfb0sKRW5TA6cdv0QM")
