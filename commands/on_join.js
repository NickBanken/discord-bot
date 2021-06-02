const Discord = require('discord.js');
module.exports = {
    name: 'on_join',
    description: 'frist message when the bot is invited on a new server',
    execute(guild) {
        try {
            const onJoinMessage = new Discord.MessageEmbed()
            .setColor('#FFDE8E')
            .setTitle("Hello! Let me present myself")
            .addFields(
                { name:"I'm a bot. Obviously. It's written.", value:"I'm created by @TanyaL, coach at Becode Liège."},
                { name:"What I do", value:"I remind you for the breaks and help the juniors in their Becode training. \nMy prefix is the \`*\`, and all my commands are listed in the \`*help\` command."},
                { name:"Got an error?", value:"If you have a problem with my commands, just write it [here](https://github.com/Tanya-Amber-L/discord-bot/issues)."},
            )
            guild.systemChannel.send(onJoinMessage);
        } catch (err) {
            guild.systemChannel.send(`I'm sorry, i'm a bit stressed meeting you all and threw this error by mistake: ${err}`); 
        }
    }
}