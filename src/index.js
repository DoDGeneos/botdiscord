const Discord = require("discord.js");
const dotevn = require("dotenv");
const fs = require("fs");
const path = require("path");


dotevn.config();


const bot = new Discord.Client();

bot.commands = new Discord.Collection(); // Conjunto de comandos do bot

const commandsFiles = fs
    .readdirSync(path.join(__dirname, "/commands")) 
    .filter((filename) => filename.endsWith(".js")) // concatena diretorio atual com o commands

// Carrega os comandos dos arquivo para a lista de comandos do bot
for(var filename of commandsFiles){
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
}
console.log(bot.commands)

bot.login(process.env.TOKEN);

bot.on("ready", () => {
    console.log("O bot",bot.user.username)
})




bot.on("message", (msg) => {
    if(!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    // Captura o comando e os cargumentos
    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    // Pega o argumento passado no comando
    const command = args.shift();    

    try {
        bot.commands.get(command).execute(bot, msg, args);
        console.log("Boa ", command)
    } catch (error) {
        console.log("Erro: ",command)
        console.log(error)
        return msg.reply("Comando invalido");
    }
    


});




/*







console.log(bot.commands);



bot.on("ready", () =>{
    console.log(`O bot ${bot.user.username}`);
});

bot.on("message", () => {

});


*/   