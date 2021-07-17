module.exports = {
    name: 'twitter',
    description: "send the twitter link",
    execute(message, args){
        message.channel.send('https://www.twitter.com/DevvSilent');
    }
}