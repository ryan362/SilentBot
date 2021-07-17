module.exports = {
    name: 'commands',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4488ee')
        .setTitle('Commands')
        .setURL('https://www.twitter.com/DevvSilent')
        .setDescription('This is the list of the current bot commands.')
        .addFields(
            {name: 'ping', value: 'says pong'},
            {name: 'twitter', value: 'gives my twitter link'},
            {name: 'rules', value: 'shows rules'},
            {name: 'clear', value: 'clears messages'},
            {name: 'kick', value: 'kicks a user'},
            {name: 'ban', value: 'bans a user'},
            {name: 'commands/help', value: 'shows a list of all commands'}
        )
        .setImage('https://static.toiing.com/photo/msid-67586673/67586673/jpg?3918697')
        .setFooter('All commands noobs');

        message.channel.send(newEmbed); 
    }


}