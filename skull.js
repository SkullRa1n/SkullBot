const { Client, Intents, Collection } = require('discord.js'),
{ token, prefixo, color, AccountID } = require("./config.json"),
SkullRain = new Client( { intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] })
const db = require('quick.db')

SkullRain.commands = new Collection();
SkullRain.aliases = new Collection();
SkullRain.settings = { prefixo, color, AccountID }

for(let handler of ["comandos", "eventos"]) require(`./carregar/${handler}`)(SkullRain);

SkullRain.login(token)