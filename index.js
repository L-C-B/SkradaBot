const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {TOKEN, PREFIX} = require("./config.js");

client.login(TOKEN);
client.on("ready", async () => {  
  console.log('%c\n・Index.js en chargement...', 'color: #8BFF88')
  console.log('%c・Commandes en chargements...', 'color: #8BFF88')
  console.log('%c・Statut en chargement... \n', 'color: #8BFF88')
});
client.commands = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return 

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    client.commands.set(commande.help.name, commande);


  });
  client.on("ready", async () => {  
  });

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));

  });

});
client.on("ready", async () => {  
  console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n・Le BOT est ALLUMÉ !\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")

});
});
