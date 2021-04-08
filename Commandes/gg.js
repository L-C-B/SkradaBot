const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const config = require('../config.js');


module.exports.run = (client, message, args) => {
    message.delete();
    const user = message.mentions.users.first();
    if(!user) return message.reply("***:books:┃Vous devez mentionner un utilisateur pour lui dire GG !***").then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 2000);
    });
    message.delete()
    message.channel.send(":wave:┃" + user.toString() + ", ***" + message.author.toString() + " vous félicite ! GG !***")
};
module.exports.help = {
    name: 'gg',
  };
