let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if(!text) throw `Uhm... URL nya mana?\n\nPastikan kamu menggunakan link youtube yang valid, Fitur ini tidak mendukung youtube short.\nContoh: ${usedPrefix + command} https://youtu.be/uwph0dv9E6U`
    let res = await fetch(global.API('lolhum', '/api/ytaudio', { url: text }, 'apikey'))
    m.reply(global.wait)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let nurma = `
Title: *${json.result.title}*
Filesize: *${json.result.link.size}*
`.trim()
    conn.sendFile(m.chat, json.result.link.link, `${json.result.id}.mp3`, null, m, false)
}
handler.command = /^(yta2|ytmp32)$/i
handler.help = ['ytmp32 <url> (server API)']
handler.tags = ['downloader']
module.exports = handler