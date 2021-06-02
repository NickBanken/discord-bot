module.exports = {
    name: 'ping',
    description: 'ping command!',
    execute(message, args) {
        try {
            message.channel.send(`${message.author} Pong! lmao`);
        } catch (err) {
            message.channel.send(`I'm sorry, I had an error trying to make a joke: ${err}`); 
        }
    }
}