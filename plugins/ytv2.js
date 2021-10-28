let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if(!text) throw `Uhm... URL nya mana?\n\nPastikan kamu menggunakan link youtube yang valid, Fitur ini tidak mendukung youtube short.\nContoh: ${usedPrefix + command} https://youtu.be/uwph0dv9E6U`
    let res = await fetch(global.API('lolhum', '/api/ytvideo', { url: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let thumb = await(await fetch(thumbfoto)).buffer()
    m.reply(global.wait)
    let yn = await(await fetch(json.result.thumbnail)).buffer()
    let nrm = `
Title: *${json.result.title}*
Filesize: *${json.result.link.size}*
`.trim()
    await conn.sendFile(m.chat, json.result.link.link, `${json.result.id}.mp4`, nrm, m, 0, { contextInfo:{externalAdReply: {title: 'Haruno', sourceUrl: 'https://github.com/FadliDarmawan/haruno', body: `Haruno Bot source code. You can contribute me on github.`, thumbnail: thumb}}}, m)
}
handler.commanfd = /^(ytv2|ytmp42)$/i
handler.tags = ['downloader']
handler.help = ['ytmp42 <url> (server API)']
module.exports = handler