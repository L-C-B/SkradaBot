const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const config = require('../config.js');


module.exports.run = (client, message, args) => {

    if(!args.length) { return message.reply(':pencil2: **| Vous devez indiquez du texte à envoyer !**')
        
    }
message.delete();
      let embed = new Discord.MessageEmbed()
      .setTitle(":books:  | SONDAGE : ")
      .setColor('#7bfbff')
      .setDescription(':interrobang:**・' +args.join(" ") + '**' + '\n \n'+ '\n・`🟩 - Oui (Pour)`\n・`🟨 - Neutre (Je ne sais pas)`\n・`🟥 - Non (Contre)`')
      .setThumbnail('https://cdn.discordapp.com/avatars/805474066399363113/27157664ebae802b85cb0edf35ca876f.webp')
      .setFooter('・Sondage de ' + message.author.username, message.author.avatarURL())
      .setTimestamp()

      
      
      message.channel.send(embed).then(m => {
        m.react("🟩")
        m.react("🟨")
        m.react("🟥")
      
  
    

      



      

        
      })
    }



module.exports.help = {
    name: 'sondage',
  };
