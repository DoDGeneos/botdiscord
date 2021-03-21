const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {

  // Definicao por reacoes d eemoji
  if (args.length === 0) {
    const embed = new MessageEmbed();
    embed.setTitle("Escolha suas área de interesse");
    embed.setDescription(
      "Para escolher uma área de interesse, reaja à essa mensagem com os emojis que desejar. Cada uma das áreas possui um emoji, representados abaixo:"
    );
    embed.setAuthor(
      "AidonMaster",
      `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
      "https://tirinhashq.com.br"
    );
    embed.addFields([
      { name: "Lendarios", value: ":yum:", inline: true },
    ]);
    msg.member.send({ embed }).then( (embed) => {
        const collector = embed.createReactionCollector((reaction, user) =>
            [":yum:"].includes(reaction.emoji.name)
        );
        collector.on("collector", (reaction,user) => {
          console.log(" EMOJI ",reaction.emoji.name)
        });

    });
  }
  // Reacoes por mencionar membros
  else {/*

    if (!msg.member.hasPermission("MANAGE_ROLES"))
      return msg.reply("Desculpa, você não pode executar essa ação");
    
    const [mention, roleArg] = args;
    const member = msg.mentions.members.first();    

    if (!member) // Se nao for mencionado um mebro
      return msg.reply("você precisa mencionar a quem deseja dar o cargo.");

    if (!roleArg) // Se nao for passado um cargo
      return msg.reply("você precisa escolher um cargo");

    const role = msg.guild.roles.cache.find((r) => r.name === roleArg);

    if (!role) // Se o cargo nao for encontrado
      return msg.reply(`não encontrei o cargo \`${roleArg}\``);

    member.roles.add(role);
    */
  }
  
};



module.exports = {
  name: "role",
  help: "Atribui cargos a um usuário",
  execute,
};

