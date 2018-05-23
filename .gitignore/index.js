const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./Commands/google')

bot.on('ready', function () {
bot.user.setGame('Tachus ChatBot | .help').catchnode
})
bot.on('ready', function() {
    bot.user.setUsername("Tachus ChatBot");
})
//INTERACTION DE REVEIL
bot.on('message', function (message) {
    if (message.content === '.google') {
        message.channel.send(':arrow_forward: Je suis là ! Que puis-je faire pour vous ?')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Ok Google') {
        message.channel.send(':arrow_forward: Je suis là ! Que puis-je faire pour vous ?')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Bonjour !') {
        message.channel.send(':arrow_forward: Oh ! Bonjour ! Je ne vous avais pas vu =3')
    }
})
//AIDE
bot.on('message', function (message) {
    if (message.content === '.help') {
        message.channel.send(":arrow_forward: **Liste des commandes Pour Tachus ChatBot (Respectez les majuscules et minuscules) :\n                                    **INTERACTION ET REVEIL**                                 \n \n ---> '***Ok Google***' ou ***'.google'*** pour interagir avec le bot; \n ---> ***'Bonjour !'*** pour saluer votre ami =3.\n \n                                        **AIDE**                                \n  ---> ***'.help'*** pour afficher la liste des commandes; \n ---> Dites ***'J'ai faim'*** pour trouver un resto près de chez vous; \n ---> ***'.update'*** pour vérifier les updates; \n ---> ***'.info'*** A propos de Google Assistant; \n ---> ***'.google'*** pour faire une recherche Internet QuickSearch.")
    }
})
bot.on('message', function (message) {
    if (message.content === '.update') {
        message.channel.send(":arrows_counterclockwise: Recherche de mise à jour...")
    }
})
bot.on('message', function (message) {
    if (message.content === '.update') {
        message.channel.send(":x: Aucune mise à jour disponible.")
    }
})
bot.on('message', function (message) {
    if (message.content === '.info') {
        message.channel.send(":information_source: **Tachus ChatBot for Discord v2.0.1 release** \n Projet basé sur Tachus ChatBot, discord.js, Node.js, et édité par Tachus Software.")
    }
})
//HUMOUR ET MODERATION
bot.on('message', function (message) {
        if (message.content === "J'ai faim") {
                 message.channel.send(':x: Désolé. Je ne peux pas trouver de restaurants pour le moment. Veuillez activer le service de localisation Google.')
    }
})
bot.on('message', function (message) {
    if (message.content === ".settings") {
             message.channel.send(":arrows_counterclockwise: Ouverture de l'application Paramètres...")
}
})
bot.on('message', function (message) {
    if (message.content === ".settings") {
             message.channel.send("NO SIM                                                                       [:x:] \n \n                     **Paramètres**             \n \n **WIFI** (.wifi) \n **Bluetooth** (.blue) \n **Données mobiles** (.data) \n **Localisation** (.loc)")
}
})
bot.on('message', function (message) {
    if (message.content === ".wifi") {
             message.channel.send(":x: Impossible d'activer le WIFI. Aucune carte Internet trouvée.")
}
})
bot.on('message', function (message) {
    if (message.content === ".blue") {
             message.channel.send(":x: Impossible d'activer le Bluetooth. Aucune carte Bluetooth trouvée.")
}
})
bot.on('message', function (message) {
    if (message.content === ".data") {
             message.channel.send(":x: Impossible d'accéder aux paramètres Data : Aucune carte SIM inserée.")
}
})
bot.on('message', function (message) {
    if (message.content === ".loc") {
             message.channel.send(":x: Oups ! Impossible d'éxécuter l'action demandée : Je pense que vous avez oublié que je n'étais pas sur votre téléphone :expressionless:.")
}
})
bot.on('message', function (message) {
    if (Google.match(message)) {
        Google.action(message)
    }    
    if (message.content === ".google") {
     }
})
//BIENVENUE MP
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenue à toi Jeune ' + member.displayName + ' sur ce serveur ! Nous attendions ta venue. Pense à lire les règles : elles sont très importantes ! :wink:')
            }).catch(console.error)
})

bot.login(process.env.TOKEN)
