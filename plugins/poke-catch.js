let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command, args }) => {
    let user = db.data.users[m.sender]
    if(mtype !== 'buttonsResponseMessage') throw `Jangan curang weh, cuma bisa dari poke-find`
    user.pokemon = `${args[0]}`
    m.reply(`Selamat, ${args[0]} sudah menjadi milik mu!
Ketik *.poke-desk* untuk melihat profile pokemon mu.`.trim())
}
handler.command = /^poke-catch$/i
module.exports = handler