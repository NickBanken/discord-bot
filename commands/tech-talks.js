const Discord = require('discord.js');
module.exports = {
    name: 'tech-talks',
    description: 'answering general questions about the tech-talks',
    execute(message, args) {
        const techTalksInfoMessage = new Discord.MessageEmbed()
            .setColor('#19CB61')
            .setTitle("Tech Talks Questions & Answers")
            .addFields(
                { name: "What should the Tech Talks be about?", value: "Any subject, related to your promotion's training." },
                { name: "What time are the Talks given?", value: "They are given at 13h30 and 15h15. Your promotion's talks are mandatory, the ones from other promotions are optional."},
                { name: "How long is a Tech Talk supposed to be?", value: "Between 10-15 minutes." },
                { name: "I don't know what to talk about?", value: "You can present a tool, a website, an IDE, an application, a ressource. Or showing a personnal project you made (design, code...)."},
                { name: "What tool can i use to do my presentation?", value: "You can use PowerPoint, [Genially](https://www.genial.ly/), [Canva](https://www.canva.com/), Google Slides. Or present your tool or code editor in live." },
                { name: "Where do I book my Talk?", value: "You can book the day to present your Tech Talk on [the agenda](https://my.becode.org/tech-talks/)" },
                { name: "I am stressed to present in front of the others", value:"We are not here to judge you. And you are not presenting as a professor who knows the absolute truth. You are just talking about some researches you made."}
            )
            .setImage("https://media1.tenor.com/images/b94c3db38d669a1c08982ce8f5dfa531/tenor.gif?itemid=12374537");

        message.channel.send(`${message.author} This could help you :\n`, techTalksInfoMessage);
    }
}