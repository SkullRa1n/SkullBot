const { readdirSync } = require("fs"),
ascii = require("ascii-table");

let table = new ascii("Comandos");
table.setHeading("Comandos", "Estado de carregamento");

module.exports = async (SkullRain) => {
    readdirSync("./SkullMands").forEach(dir => {
        const commands = readdirSync(`./SkullMands/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../SkullMands/${dir}/${file}`);
            pull.name = file.replace(".js", "")
            pull.category = dir
            SkullRain.commands.set(pull.name, pull);
            table.addRow(file, '✅ - Ok');
        
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => SkullRain.aliases.set(alias, pull.name));
        }
    });
    // Log the table
    console.log(table.toString());
}