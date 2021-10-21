const Discord = require("discord.js");
const cron = require("cron");
module.exports = {
	name: "reminder",
	description: "reminding for the break and meal times",
	execute(GeneralChan, SecondChan) {
		try {
			const Hamilton5RoleId = "854986232151801876";
			const Jepsen5RoleId = "882645898776162345";

			const breakMessage = new Discord.MessageEmbed()
				.setColor("#6C63FF")
				.setTitle("Break Time! :doughnut:")
				.setDescription("15 minutes break, just go rest a bit ;)");

			const mealMessageHam = new Discord.MessageEmbed()
				.setColor("#6C63FF")
				.setTitle("Meal Time! :pizza:")
				.setDescription(
					"Nice Meal! \nDon't forget to clock on [MyBecode](https://my.becode.org/)"
				);

			const endOfDayMessageHam = new Discord.MessageEmbed()
				.setColor("#6C63FF")
				.setTitle("End of the day! :partying_face:")
				.setDescription(
					"Don't forget to clock on [MyBecode](https://my.becode.org/). \nNice evening guys!"
				);

			const mealMessageJep = new Discord.MessageEmbed()
				.setColor("#6C63FF")
				.setTitle("MEAL TIME! :pizza: CLOCK HERE!")
				.setDescription(
					"Nice Meal! \nDon't forget to clock on [MyBecode](https://my.becode.org/)"
				)
				.setURL("https://my.becode.org/")
				.setImage(
					"https://c.tenor.com/pDRfpNAXfmcAAAAC/despicable-me-minions.gif"
				);

			const endOfDayMessageJep = new Discord.MessageEmbed()
				.setColor("#6C63FF")
				.setTitle("END OF THE DAY! :partying_face: CLOCK HERE")
				.setDescription(
					"Don't forget to clock on [MyBecode](https://my.becode.org/). \nNice evening guys!"
				)
				.setURL("https://my.becode.org/")
				.setImage(
					"https://c.tenor.com/pDRfpNAXfmcAAAAC/despicable-me-minions.gif"
				);

			const sendBreakMessage = new cron.CronJob(
				"00 11,15 * * 1-5",
				() => {
					// From mon-fri, 11.00 & 15.00
					GeneralChan.send(`<@&${Hamilton5RoleId}>`, breakMessage);
					SecondChan.send(`<@&${Jepsen5RoleId}>`, breakMessage);
				}
			);
			const sendMealMessage = new cron.CronJob("00 30 12 * * 1-5", () => {
				// From mon-fri, 12.30
				GeneralChan.send(`<@&${Hamilton5RoleId}>`, mealMessageHam);
				SecondChan.send(`<@&${Jepsen5RoleId}>`, mealMessageJep);
			});
			const sendEndOfDayMessage = new cron.CronJob(
				"00 00 17 * * 1-5",
				() => {
					// From mon-fri, 17.00
					GeneralChan.send(
						`<@&${Hamilton5RoleId}>`,
						endOfDayMessageHam
					);
					SecondChan.send(`<@&${Jepsen5RoleId}>`, endOfDayMessageJep);
				}
			);

			sendBreakMessage.start();
			sendMealMessage.start();
			sendEndOfDayMessage.start();
		} catch (err) {
			message.channel.send(
				`I'm sorry, there was an error trying to answer that command: ${err}`
			);
		}
	},
};
