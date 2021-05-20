const Discord = require('discord.js');
module.exports = {
    name: 'point',
    description: 'prensent where and how to point',
    execute(message, args) {
        const pointMessage = new Discord.MessageEmbed()
            .setColor('#C89DD4')
            .setTitle("POINTING INFOS")
            .setDescription("You have to point on [MyBecode](https://my.becode.org/)")
            .addFields(
                { name:"*When?*", value:"- Before 9:00 \n - After 12:30 \n - Before 13:30 \n - After 17:00"},
                { name:"If you have any problems, contact your coaches 😉"}
            )
        message.channel.send(pointMessage);
    }
}