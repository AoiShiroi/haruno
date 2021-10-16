let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    if(!args[0]) throw `Uhm... URL nya mana?\n\nMasukkan link tiktok yang valid.\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSwWCk5o/`
    let res = await fetch(global.API('lolhum', '/api/tiktok', { url: args[0]}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    m.reply(global.wait)
    let thumb = await(await fetch(json.result.thumbnail)).buffer()
    await conn.sendFile(m.chat, json.result.link, 'video.mp4', 0, m, 0, { thumbnail: thumb })
}
handler.command = /^(tiktok-video|tiktokv|ttv)$/i
handler.help = ['tiktok-video <url>']
handler.tags - ['downloader']
module.exports = handler