module.exports = {
    category: 'Infos',
    description: 'Zeigt den Ping des Bots',
    callback: ({ message }) => {
        message.reply('Pong!')
    }
}