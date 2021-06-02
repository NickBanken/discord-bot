const Discord = require('discord.js');
module.exports = {
    name: 'point',
    description: 'prensent where and how to point',
    execute(message, args) {
        try {
            const pointMessage = new Discord.MessageEmbed()
            .setColor('#C89DD4')
            .setTitle("POINTING INFOS")
            .setDescription("You have to point on [MyBecode](https://my.becode.org/)")
            .addFields(
                { name:"*When?*", value:"- Before 9:00 \n - After 12:30 \n - Before 13:30 \n - After 17:00 \n **If you have any problems, contact your coaches** 😉"}
            )
            message.channel.send(pointMessage);
        } catch (err) {
            message.channel.send(`I'm sorry, there was an error trying to answer that command: ${err}`); 
        } 
    }
}