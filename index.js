function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "ODg2NjQ2Mjk4NjA0ODc1Nzc2.YcIdiQ.Y1uTbg8ovWonK4UemmDjAF3fjto";
let prefix = ";";

client.on('ready', () => {
    console.log(`Go go ${client.user.tag}!`);
});

client.on('ready', () => {
    client.user.setActivity("💕Death is just a doorway to another universe", {
        type: "STREAMING",
        url: "https://twitch.tv/cursed_hex"
      });
})

client.on('message', function(message) {

    if (message.content === ";bump47") { 

        var interval = setInterval (function () {

            client.channels.cache.get(`743593616739401738`).send(`dc!bump`)
            client.channels.cache.get(`743593616739401738`).send(`!d bump`)

            .catch(console.error);
        }, 1 * 7260000); 
    }
});

client.on('message', message => {
    if (message.mentions.has(client.user)) {
        message.channel.send("Hush now child, I'm only doing my job.")
    }
})

client.login(token);