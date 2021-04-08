const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
  var ping = Date.now() - message.createdTimestamp;
  const embed = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle(`**:ping_pong: - Pong !** \`${ping}ms\``)
  message.channel.send(embed);                     
};
module.exports.help = {
    name: 'ping',
  };