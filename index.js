const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
 
const prefix = '✞';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
    console.log('Silent is online!');
    client.user.setActivity('Calasity is daddy');
});

client.on('guildMemberAdd', guildMember => {
	if (guildMember.guild.id === "800068410288766996"){
		let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('800946538867851276').send(`Welcome to our server, <@${guildMember.user.id}>!`)
		const channel = guildMember.guild.channels.cache.get('801266073453199390');
    channel.setName(`Total Members: ${guildMember.guild.memberCount.toLocaleString()}`);
	}
})

client.on("guildMemberRemove", guildMember => {
	if (guildMember.guild.id === "800068410288766996") {
		guildMember.guild.channels.cache.get("800946538867851276").send(`${guildMember.user.tag} has left the server!`)
		const channel = guildMember.guild.channels.cache.get('801266073453199390');
    channel.setName(`Total Members: ${guildMember.guild.memberCount.toLocaleString()}`);
	}
})

client.on('message', message =>{


    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } 
    
    if  (command === 'twitter'){
        client.commands.get('twitter').execute(message, args, Discord);
    } 
    
    if (command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }

    if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
     if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }


    if (command === 'commands' || command === "help"){
        client.commands.get('commands').execute(message, args, Discord);
    }

    if (command === 'play'){
        client.commands.get('play').execute(message, args);
    }

    if (command === 'leave'){
        client.commands.get('leave').execute(message, args);  
    }

    if (command === 'group'){
        client.commands.get('group').execute(message, args);  
    }
});
 
client.login(process.env.token);