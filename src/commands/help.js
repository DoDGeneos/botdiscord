const execute = (bot,msg,args) =>{
    let string = `===== AJUDA =====\n \
                 **+hello** -> Mostra boas vindas\n \
                 **+help**  -> Mostra isso que você está vendo`;

    
    return msg.channel.send(string)
};

module.exports ={
    name: "help",
    help: "Veja os possiveis comandos!",
    execute,
};