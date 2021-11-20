module.exports = {
    run: (SkullRain) => {
        console.log(",--------------------,");
        console.log("|Name: " + SkullRain.user.username);
        console.log("|#: " + SkullRain.user.discriminator);
        console.log("|ID: " + SkullRain.user.id);
        console.log("|Ping: " + SkullRain.ws?.ping + " ms");
        console.log("'--------------------'");

        let activities = [
          `Todos os direitos para SkullRain`,
          'https://discord.gg/ftyQAybNdb'
        ],
          i = 0;
        setInterval(
          () =>
            SkullRain.user.setActivity(`${activities[i++ % activities.length]}`, {
              type: 'PLAYING'
            }),
          10000
        );
    }
}