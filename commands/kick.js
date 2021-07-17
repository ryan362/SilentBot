 module.exports = {
    name: 'kick',
  description: "This command kicks a member",
    execute(message, args){
       const member = message.mentions.users.first();
     if(member){
              const membertarger = message.guild.members.cache.get(member.id);
                membertarger.kick();
               message.channel.send("User has been kicked");
        }else{
                message.channel.send('Please mention someone to kick');
        }
    }
}