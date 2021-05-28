module.exports = {
    name: 'answers',
    description: 'looks for some words and answers accordingly',
    execute(message) {
        const sadArray = ["problem"];

        for (let i = 0; i < sadArray.length; i++) {
            if (message.content.includes(sadArray[i])) {
                message.channel.send(`It's gonna be okayyy ${message.author}`);
            }
        }
    }
}