const Discord = require('discord.js');
module.exports = {
    name: 'english',
    description: 'presents the english activities at BeCode',
    execute(message, args) {
        try {
            const frijayMessage = new Discord.MessageEmbed()
            .setColor('#FFDE8E')
            .setTitle("ENGLISH ACTIVITIES")
            .setDescription("The English Activities are there to help you practise your English. ")
            .addFields(
                { name:"When and what?", value:"- Mondays, at 12:45, during the break, we watch a serie. \n - Wednesdays, 9h30 - 10h00, discussions between little groups on common subjects \n - Wednesdays, 16h00 - 17h00, little game in English, usually by groups."},
                { name:"Where?", value:"On Becode's Global Server ([English] Activities Category). If you're not on that server, ask your coaches."}
            )
            message.channel.send(frijayMessage);
        } catch (err) {
            message.channel.send(`I'm sorry, there was an error trying to answer that command: ${err}`); 
        }
    }
}