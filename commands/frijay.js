const Discord = require('discord.js');
module.exports = {
    name: 'frijay',
    description: 'presents the frijay activities at BeCode',
    execute(message, args) {
        try {
            const frijayMessage = new Discord.MessageEmbed()
            .setColor('#FFDE8E')
            .setTitle("FRIJAY")
            .setDescription("The frijay Activities are little games that we play at Becode, at the end of the week. ")
            .addFields(
                { name:"When?", value:"Fridays around 16h00"},
                { name:"Where?", value:"On Becode's Global Server (Frijay fun times Category). If you're not on that server, ask your coaches."}
            )
            message.channel.send(frijayMessage);
        } catch (err) {
            message.channel.send(`I'm sorry, there was an error trying to answer that command: ${err}`); 
        }
    }
}