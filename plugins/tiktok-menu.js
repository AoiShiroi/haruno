let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    if(!args[0]) throw `Uhm... URL nya mana?\n\nMasukkan link tiktok yang valid.\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSwWCk5o/`
    let res = await fetch(global.API('lolhum', '/api/tiktok', { url: args[0]}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    m.reply(global.wait)
    let nrm = `
Title: *${json.result.title}*
Keywords: ${json.result.keywords}
Description: ${json.result.description}
`.trim()
    await conn.send2ButtonImg(m.chat, await(await fetch(json.result.thumbnail)).buffer(), nrm, watermark, 'Audio', `.tiktoka ${args[0]}`, 'Video', `.tiktokv ${args[0]}`, m)
}
handler.command = /^tiktok2$/i
handler.tags = ['downloader']
handler.help = ['tiktok2 <url>']
module.exports = handler