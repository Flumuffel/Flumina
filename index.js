const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
    // Use recommended partials for the built-in help menu
    partials: ['MESSAGE', 'REACTION']
})

client.on('ready', () => {
    console.log('READY')

    new WOKCommands(client, {
       commandsDir: 'commands',
       featuresDir: 'features', 
    })
    .setCategorySettings({
        name: 'Infos',
        emoji: '🧭'
    },
    {
        name: 'Development',
        emoji: '👨🏽‍💻'
    })
    .setMongoPath(process.env.MONGO_URI);

})

client.login(process.env.TOKEN)