module.exports = {
    name: 'answers',
    description: 'looks for some words and answers accordingly',
    execute(message, args) {
        message.channel.send(`Hello ${message.author}, how are you today?`);
    }
}