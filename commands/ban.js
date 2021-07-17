module.exports = {
    name: 'ban',
   description: "This command bans a member",
    execute(message, args){
        const member = message.mentions.users.first();
      if(member){
                const membertarger = message.guild.members.cache.get(member.id);
             membertarger.ban();
              message.channel.send("User has been banned");
      }else{
               message.channel.send('Please mention someone to ban');
        }
   }
}