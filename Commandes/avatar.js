const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
      .setTitle("🍉 | Avatar de " + message.author.username)
      .addField('❤️ | Autres Informations', `• \`Tag\` : ***${message.author.tag}***`+ `\n • \`ID\` : ***${message.author.id}***`)
      .setColor('#2f3136')
      .setThumbnail(message.author.avatarURL())
      .setFooter('Commande executé par ' + message.author.username, message.author.avatarURL())
      return message.channel.send(embed)   
    } 
    const embed = new Discord.MessageEmbed()
    .setTitle(":watermelon: | Avatar de " + user.username)
    .addField(`:heart: | Autres Informations sur ${user.username} `, `• \`Tag\` : ***${user.tag}***`+ `\n • \`ID\` : ***${user.id}***`+ `\n `)
    .setColor('#2f3136')
    .setThumbnail(user.avatarURL())
    .setFooter('Commande executé par ' + message.author.username, message.author.avatarURL())

    return message.channel.send(embed)

};
module.exports.help = { 
    name: 'avatar',
  };