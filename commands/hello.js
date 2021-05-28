module.exports = {
    name: 'hello',
    description: 'looks for some words and answers accordingly',
    execute(message) {
        message.channel.send(`Hello ${message.author}, how are you today?`);
    }
}