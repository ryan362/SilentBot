module.exports = {
    name: 'group',
    description: "sends group link",
    execute(message, args){
        message.channel.send(`Here you go ${message.author} https://www.roblox.com/groups/8055728/Hybrid-Game#!/about `);
    }
}
