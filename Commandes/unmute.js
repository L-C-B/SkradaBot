const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
let mutedRole = message.guild.roles.cache.find(role => role.name == "📛┃Muted");
let person = message.mentions.users.first();
const EmBeD = new Discord.MessageEmbed()
.setAuthor('Permission de unmute nécessaire ', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
.setColor('#7bfbff')
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(EmBeD)
const EMBED = new Discord.MessageEmbed()
.setAuthor('Veuillez mentionner l\'utilisateur', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
.setColor('#7bfbff')
if (!person) return message.channel.send(EMBED)


const member = message.guild.member(person);
if (member) {
  member.roles
    .remove(mutedRole.id)
    .then(() => {
});
const embed = new Discord.MessageEmbed()
.setAuthor(person.username + ' a été unmute', 'https://cdn.discordapp.com/emojis/793046366548918282.png?v=1')
.setColor('#7bfbff')
return message.channel.send(embed)

}
}

module.exports.help = {
    name: 'unmute',
  };