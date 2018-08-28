
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const newUsers = new Discord.Collection();

bot.on("ready", async () => {
	console.log('$(bot.user.username) is online!');
	bot.user.setGame("with Wooby!");
	
});


bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	//let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);


	let displayname = message.member.displayName;
	let id = message.author.username;
	let tag = message.author.tag;
	let content = message.content;
	let userMsgs = message.content
	let channel = message.channel;
	
	
	var colors = require('colors');


	console.log(id.cyan + "@".cyan + message.guild.name.cyan + "/".magenta + channel.name.magenta + "# ".magenta + content.white);

});

bot.login("<bot_token_here>");


