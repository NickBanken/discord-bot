module.exports = {
    name: 'ping',
    description: 'ping command!',
    execute(message, args) {
        message.channel.send(`${message.author} Pong! lmao`);
    }
}