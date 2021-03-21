const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    
    const embed = {
        color: "#363636",

        title: `Seja bem vindo ${msg.author.username}#${msg.author.discriminator}`,

        description: "Descricao de qualquer coisa que seja.",

        thumbnail: {
            url: msg.author.avatar 
            ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${msg.author.discriminator & 5}.png`,            
        },

        url: "https://tirinhashq.com.br",

        author: {

            name: "A.I DONMASTER",
            icon_url: `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
            url: `https://www.instagram.com/tirinnhashq/,`
        },

        fields: [
                {
                    name: "vecê é o membro nº ",
                    value: "34",
                    inline: true,
                },
                {
                    name: "vecê é o membro nº ",
                    value: "34",
                    inline: true,
                },
        ],

        timestamp: new Date(),

        footer: {
            text: "respeito a todos !",
            icon_url: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`

        }
    };

    msg.channel.send({embed})
};

module.exports ={
    name: "embed",
    help: "ajuda",
    execute,
};