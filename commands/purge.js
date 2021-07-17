module.exports = {
    name: 'purge',
    description: "purges messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply(":x: Enter a number of messages to purge.");
        if(isNaN(args[0])) return message.reply("Enter a Number.");

        if (args[0] > 100) return message.reply("You can't purge more than 100 messages at once.");
        if (args[0] < 1 ) return message.reply("You must purge atleast one message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}