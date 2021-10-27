let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if(!text) throw `Uhm... Mau cari apa?\n\nContoh: ${usedPrefix + command} Opening kimetsu no yaiba`
    let res = await fetch(global.API('lolhum', '/api/ytplay', { query: text }, 'apikey'))
    let json = await res.json()
    if(!res.ok) throw await res.text
    let thumb = await(await fetch(json.result.info.thumbnail)).buffer()
    let caption = `
Youtube Play
Title: *${json.result.info.title}*
Audio: *${json.result.audio.size}*
Video: *${json.result.video.size}*

Tunggu sebentar bot sedang memproses file
${watermark}
`.trim()
    await conn.sendFile(m.chat, thumb, 'thumbnail.jpg', caption, m, 0)
    await conn.sendFile(m.chat, json.result.audio.link, 'audio.mp3', 0, m)
    await conn.sendFile(m.chat, json.result.video.link, 'video.mp4', 0, m)
}
handler.command = /^(play|p)$/i
handler.tags = ['downloader']
handler.command = ['play']
handler.limit = false
module.exports = handler