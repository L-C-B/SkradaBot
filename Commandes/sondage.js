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
      .setThumbnail('https://media.discordapp.net/attachments/750730858951999539/781159991796564018/Logo_new_teste.png?width=450&height=450')
      .setFooter('・Sondage de ' + message.author.username, message.author.avatarURL())
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/784822706272862217/800349117938925578/Sans_titre_1.png')

      
      
      message.channel.send(embed).then(m => {
        m.react("🟩")
        m.react("🟨")
        m.react("🟥")
      
  
    

      



      

        
      })
    }



module.exports.help = {
    name: 'sondage',
  };