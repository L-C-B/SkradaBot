const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const config = require('../config.js');

module.exports.run = async (client, message, args, log) => {



    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("`Vous n\'avez pas la permission d\'utiliser cette commande.`");
    if (!args[0]) return message.reply("`Vous devez mettre un nombre de messages à supprimer`");
    if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 100) return message.reply("`Vous devez indiquer un nombre entre 1 et 100 !.`")
    message.channel.bulkDelete(parseInt(args[0]) + 1)
    const pong = new Discord.MessageEmbed()
    .setColor('#7bfbff')
    .setTitle(`:white_check_mark:・\`${args[0]}\` Message(s) Supprimé(s)`)
    return message.channel.send(pong).then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 3000);
    });
}
  
  
  
  module.exports.help = {
    name:"clear"
  }
  
