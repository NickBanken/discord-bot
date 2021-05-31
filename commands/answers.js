module.exports = {
    name: 'answers',
    description: 'looks for some words and answers accordingly',
    execute(message) {
        lowerCaseMessage = message.content.toLowerCase(); 

        const helloArray = ["hello", "hi", "good morning"];
        const sadArray = ["problem"];

        for (let i = 0; i < helloArray.length; i++) {
            if (lowerCaseMessage.includes(helloArray[i])) {
                message.channel.send(`Hello ${message.author}, how are you today?`);
            }
        }

        for (let i = 0; i < sadArray.length; i++) {
            if (lowerCaseMessage.includes(sadArray[i])) {
                message.channel.send(`It's gonna be okayyy ${message.author}`);
            }
        }
    }
}