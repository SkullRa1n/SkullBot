const Skull = require('discord.js')
module.exports = {
    description: "Setup do bot!", // Descrição do comando
    botPermissions: [ "ADMINISTRATOR" ], // Permissões do bot
    memberPermissions: [ "ADMINISTRATOR" ], // Permissões do membro
    aliases: [ 'SETUP', 'SetUp'], // Aliases do comando
    dono: "Sim", // Use Sim ou Não para verificar se é só o dono
    run: async (SkullRain, msg, args) => {
        const embed1 = new Skull.MessageEmbed()
          .setTitle('Setup SkullRain Bot v1.0')
          .setDescription('Olá eu sou seu guia aqui!\nVamos começar!')
        msg.reply({ embeds: [embed1]})
        const embed2 = new Skull.MessageEmbed()
          .setTitle('Fase 1')
          .setDescription('Abra a aba \`./SkullMands/\`')
        msg.channel.send({ embeds: [embed2]})
        const embed3 = new Skull.MessageEmbed()
          .setTitle('Fase 2')
          .setDescription('Abra a pasta que quer ex: \`./SkullMands/4Fun\`')
        msg.channel.send({ embeds: [embed3]})
        const embed4 = new Skull.MessageEmbed()
          .setTitle('Fase 3')
          .setDescription('Crie um ficheiro js ex: \`ping.js\`')
        msg.channel.send({ embeds: [embed4]})
        let command = 'Use o module Exports\n\nconst Skull = require(+discord.js+)\nmodule.exports = {\n  description: +Setup do bot!+, // Descrição do comando\n  botPermissions: [ +ADMINISTRATOR+ ], // Permissões do bot\n  memberPermissions: [ +ADMINISTRATOR+ ], // Permissões do membro\n  aliases: [ +SETUP+, +SetUp+], // Aliases do comando\n  dono: +Não+, // Use Sim ou Não para verificar se é só o dono\n  run: async (SkullRain, msg, args) => {\n\n  }\n}'
        command = command.replace('+', `'`);
        const embed5 = new Skull.MessageEmbed()
          .setTitle('Fase 4')
          .setDescription(command)
          .setFooter('Leia o \`README.md\` para mais informações')
        msg.channel.send({ embeds: [embed5]})
    }
}