const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'defines all existing commands for this bot',
    execute(message, args) {
        try {
            const helpMessage = new Discord.MessageEmbed()
            .setColor('#E89F28')
            .setTitle("HELP")
            .addFields(
                { name: "*help", value: "List of all commands and their function" },
                { name: "*tech-talks", value: "Q&A on the Tech Talks"},
                { name: "*point", value: "How and where to point" },
                { name: "*english", value: "Presents the English Activities"},
                { name: "*frijay", value: "Presents the Frijay"},
                { name: "Reminder", value: "For breaks, meal time, and end of the day" },
                { name: "Greatings", value: "Try to tag me and say hello" }
            );

            message.channel.send(helpMessage);
        } catch (err) {
            message.channel.send(`I'm sorry, there was an error trying to answer that command: ${err}`); 
        }
    }
}