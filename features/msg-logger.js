module.exports = (client) => {
    client.on('message', message => {
        console.log(message.content)
    })
}

module.exports.config = {
    displayName: 'Message Console output',
    dbName: 'MESSAGE LOGGER'
}