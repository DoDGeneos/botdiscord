const execute = (bot,msg,args) =>{
    return msg.reply("dentro do Hello");
};

module.exports ={
    name: "hello",
    help: "ajuda de boas vindas!"   , 
    execute,
};