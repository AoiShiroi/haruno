let fetch = require('node-fetch')
const fs = require('fs')
let handler = async(m, { conn, usedPrefix, command }) => {
    let toko = JSON.parse(fs.readFileSync(`./src/event.json`))
    let json = toko[Math.floor(Math.random() * toko.length)]
    let who = json.jid
    let caption = `
Nama: ${json.name}

JID: ${json.jid}

Mentioned: @${who.replace(/@.+/,'')}
`.trim()
    await conn.sendButtonLoc(m.chat, await(await fetch(image)).buffer(), caption, watermark,'Menu', '.?', m, { contextInfo: { mentionedJid: [who] } })
}
handler.command = /eventrandom$/i

module.exports = handler 