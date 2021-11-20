const Skull = require('discord.js')
module.exports = {
    run: (SkullRain, msg) => {
        if (msg.content == `<@!${SkullRain.user.id}>`) {

        let prefixo = SkullRain.settings.prefixo;

          const embedm = new Skull.MessageEmbed()
            .setTitle(`Meu prefixoo é ${prefixo}!`)
            .setColor("RED")
            .setDescription(`Use ${prefixo} para executar os comandos!`)
            .setTimestamp()
            .setFooter('#BemVindo!');
          msg.reply({ embeds: [embedm]})
        }

        if(msg.author.bot || !msg.guild || !msg.content.startsWith(SkullRain.settings.prefixo)) return;
        const args = msg.content.slice(SkullRain.settings.prefixo.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        let command = SkullRain.commands.get(cmd)
        if (!command) command = SkullRain.commands.get(SkullRain.aliases.get(cmd));
        if(!command) return

        if (command.botPermissions) {
            const Permissions = command.botPermissions.filter(x => !msg.guild.me.permissions.has(x)).map(x => "`" + x + "`")
            const permb = new Skull.MessageEmbed()
              .setTitle('Permissões em falta no bot!')
              .setDescription(`Permissões: ${Permissions.join(", ")}`)
            if (Permissions.length) return msg.channel.send({ embeds: [permb] })
        } 
          
        if (command.memberPermissions) {
            const Permissions = command.memberPermissions.filter(x => !msg.member.permissions.has(x)).map(x => "`" + x + "`")
            const permm = new Skull.MessageEmbed()
              .setTitle('Você precisa de permissões!')
              .setDescription(`Permissões: ${Permissions.join(", ")}`)
            if (Permissions.length) return msg.channel.send({ embeds: [permm] })
        }
        
        if (command.dono == 'Sim') {
            if (msg.author.id !== SkullRain.settings.AccountID) return msg.channel.send("Esse comando é apenas para a dono")
        }

        command.run(SkullRain, msg, args)
    }
}
