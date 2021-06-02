module.exports = {
    name: 'answers',
    description: 'looks for some words and answers accordingly',
    execute(message) {
        try {
            lowerCaseMessage = message.content.toLowerCase(); 

            const helloArray = ["hello", "hi", "good morning", "nice afternoon", "good afternoon", "good evening", "nice evening", "greeting", "greetings", "happy day"];
            const sadArray = ["problem", "sad", "wrong", "bad", "not working"];

            for (let i = 0; i < helloArray.length; i++) {
                if (lowerCaseMessage.includes(helloArray[i])) {
                    message.channel.send(`Hello ${message.author}, how are you today?`);
                }
            }

            for (let i = 0; i < sadArray.length; i++) {
                if (lowerCaseMessage.includes(sadArray[i])) {
                    message.channel.send(`It's gonna be okayyy ${message.author}!! \n Did you ask your colleagues for help? Did you type your problem in different ways in your browser? \n Yes? Okay, then just go to your coaches, they'll help you.`);
                }
            }
        } catch (err) {
            message.channel.send(`I'm sorry, there was an error trying to answer you: ${err}`); 
        }
        
    }
}