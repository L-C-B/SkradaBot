const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = async (client, message, args) => {
let mutedRole = message.guild.roles.cache.find(role => role.name == "📛┃Muted");
let person = message.mentions.users.first();
const EmBeD = new Discord.MessageEmbed()
.setAuthor('Permission de mute nécessaire ', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
.setColor('#7bfbff')
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(EmBeD)
const EMBED = new Discord.MessageEmbed()
.setAuthor('Veuillez mentionner l\'utilisateur', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
.setColor('#7bfbff')
if (!person) return message.channel.send(EMBED)

let reason = args[1];
const Embed = new Discord.MessageEmbed()
.setAuthor('Aucune Raison précisée', 'https://cdn.discordapp.com/emojis/793046366254268427.png?v=1')
.setColor('#7bfbff')
if(!reason) return message.channel.send(Embed)

const member = message.guild.member(person);
if (member) {
  member.roles
    .add(mutedRole)
    .then(() => {
});
const embed = new Discord.MessageEmbed()
.setAuthor(person.username + ' a été mute・' + reason, 'https://cdn.discordapp.com/emojis/793046366548918282.png?v=1')
.setColor('#7bfbff')
return message.channel.send(embed)

}
}

module.exports.help = {
    name: 'mute',
  };
