const Discord = require("discord.js");
module.exports = {
	name: "help",
	description: "defines all existing commands for this bot",
	execute(message, args) {
		try {
			const helpMessage = new Discord.MessageEmbed()
				.setColor("#E89F28")
				.setTitle("HELP")
				.addFields(
					{
						name: "*help",
						value: "List of all commands and their function",
					},
					{ name: "*presentation", value: "Presentaing myself" },
					{ name: "*tech-talks", value: "Q&A on the Tech Talks" },
					{ name: "*point", value: "How and where to point" },
					{
						name: "*english",
						value: "Presents the English Activities",
					},
					{ name: "*frijay", value: "Presents the Frijay" },
					{
						name: "What else?",
						value: "I also give every promo reminders for breaks, meal time, and end of the day",
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
