let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    if(!args[0]) throw `Uhm... URL nya mana?\n\nMasukkan link tiktok yang valid.\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSwWCk5o/`
    let res = await fetch(global.API('lolhum', '/api/tiktok', { url: args[0]}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    m.reply(global.wait)
    await conn.sendFile(m.chat, json.result.audio, 'audio.mp3', 0, m)
}
handler.command = /^(tiktok-audio|tiktoka|tta)$/i
handler.help = ['tiktok-audio <url>']
handler.tags = ['downloader']
module.exports = handler