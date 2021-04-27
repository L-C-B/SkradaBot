const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const config = require('../config.js');


module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':x: **| Vous n\'avez pas la permission d\'utiliser cette commande.**')
    if (!args[0]) return message.reply(':pencil2: **| Vous devez indiquez du texte à envoyer !**')
    message.delete();
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text)
}
module.exports.help = {
    name: 'say',
  };
