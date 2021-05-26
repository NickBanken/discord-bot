const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='*';

const fs = require('fs'); //to enter ino other Js files

client.commands = new Discord.Collection(); //storing all of our commands

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //the commands are in the commands folder, in a js file
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}



client.once('ready', () => {
    console.log('I am online');
})

client.on('message', message => {

    // const helloArray = ["hello", "hi", "good morning"];
    // for (let i  =0; i < helloArray.length; i++) {
    //     if (message.mentions.has(client.user) && (message.content.includes(helloArray[i]))) {
    //         client.commands.get('hello').execute(message, args);
    //     }
    // }
    
    const Reaction = () => {message.react("👀");}

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //if there's no prefix or if the author is the bot, ignore.

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 
    //commands are case-insensitive

    if (command === 'ping') {
        Reaction();
        client.commands.get('ping').execute(message, args);
    } else if (command === 'help') {
        Reaction();
        client.commands.get('help').execute(message, args);
    } else if (command === 'tech-talks') {
        Reaction();
        client.commands.get('tech-talks').execute(message, args);
    } else if (command === 'point') {
        Reaction();
        client.commands.get('point').execute(message, args);
    } else if (command === 'english') {
        Reaction();
        client.commands.get('english').execute(message, args);
    } else if (command === 'frijay') {
        Reaction();
        client.commands.get('frijay').execute(message, args);
    }
})

client.on('ready', () => {
    const GeneralChan = client.channels.cache.get('841983205909200917');
    client.commands.get('reminder').execute(GeneralChan);

    client.user.setActivity('*help', {type: "WATCHING"}).catch(console.error);
})



const secretToken = getenv("BOT_SECRET_TOKEN");
client.login(secretToken);