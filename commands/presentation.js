const Discord = require("discord.js");
module.exports = {
	name: "presentation",
	description: "little presentation, nice to meet you, message",
	execute(message, args) {
		try {
			const helpMessage = new Discord.MessageEmbed()
				.setColor("#16232E")
				.setTitle("PRESENTATION")
				.addFields(
					{
						name: "I'm Remi, I'm a bot. Obviously. It's written.",
						value: "I'm created by @TanyaL, coach at Becode Liège and I only speak English.",
					},
					{
						name: "What I do",
						value: "I remind you for the breaks and help the juniors in their Becode training. \nMy prefix is the `*`, and all my commands are listed in the `*help` command.",
					},
					{
						name: "Got an error?",
						value: "If you have a problem with my commands, just write it [here](https://github.com/Tanya-Amber-L/discord-bot/issues).",
					}
				);

			message.channel.send(helpMessage);
		} catch (err) {
			message.channel.send(
				`I'm sorry, there was an error trying to answer that command: ${err}`
			);
		}
	},
};
