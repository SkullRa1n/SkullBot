const { readdirSync } = require("fs"),
ascii = require("ascii-table");

let table = new ascii("Eventos");
table.setHeading("Eventos", "Estado de carregamento");

module.exports = async (SkullRain) => {
  const commands = readdirSync("./eventos").filter(file => file.endsWith(".js"));
  for (let file of commands) {

    try {
        let pull = require(`../eventos/${file}`);
        if (pull.event && typeof pull.event !== "string") {
            table.addRow(file, `❌ -> Erro numa linha.`);
            continue;
        }
        
        pull.event = pull.event || file.replace(".js", "")
        SkullRain.on(pull.event, pull.run.bind(null, SkullRain))
        table.addRow(file, '✅ - Ok');

    } catch(err) {
        console.log("Falha ao carregar o evento, Entre por ajuda: https://discord.gg/ftyQAybNdb")
        console.log(err)
        table.addRow(file, `❌ -> Falha ao carregar o evento, Entre por ajuda:  https://discord.gg/ftyQAybNdb`);
    }
  }
   console.log(table.toString());
}