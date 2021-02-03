const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

    const EmBeD = new Discord.MessageEmbed()
    .setAuthor('Permission de unmute nécessaire ', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
    .setColor('#7bfbff')
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(EmBeD)
    const channel = message.channel
    const members = channel.members
    members.forEach(member => {
        member.voice.setMute(false)
        member.voice.setDeaf(false)
    });
    const embed =  new Discord.MessageEmbed()
    .setAuthor('Commande exécuté avec succès', 'https://cdn.discordapp.com/emojis/793046366548918282.png?v=1')
    .setColor('#7bfbff')
    return message.channel.send(embed)

}

module.exports.help = { 
    name: 'unmuteall',
  };
