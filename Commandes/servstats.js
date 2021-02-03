const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const util = require('minecraft-server-util')
module.exports.run = (client, message, args) => {
    if (!args[0]) return message.reply(':pencil2: **| Vous devez indiquer l\'ip du serveur que vous voulez voir !**')


    let arguments = message.content.substring(PREFIX.length).split(' ')
 

    util.status(arguments[1])

    .then((response) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("❤️ | Status du Serveur")
        .addField('🌊 | IP du Serveur', '`' + response.host + '`')
        .addField('🚨 | Version du Serveur','`' + response.version +'`')
        .addField('🛑 | Port du Serveur','`' + response.port +'`')
        .addField('🔥 | Joueurs en Ligne', '`' + response.onlinePlayers + '`')
        .addField('📌 | Limite de Joueurs', '`' + response.maxPlayers + '`')
        .setColor('#7bfbff')
 
        return message.channel.send(embed)
    })
    .catch((error) => {
        message.react('❌')
        message.reply('**🌊 | IP du Serveur invalide !**')

        
    });
}
module.exports.help = {
    name: 'servstats',
};