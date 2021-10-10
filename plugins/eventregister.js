let fs = require('fs')
let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    const json = JSON.parse(fs.readFileSync('./src/toko.json'))
    let [t, n] = text.split`|`
    json.push({jid: t, name: n })
    fs.writeFileSync('./src/event.json', JSON.stringify(json))
    conn.sendButtonLoc(m.chat, await(await fetch(image)).buffer(), 'Terimakasih sudah mendaftar. Nomor yang terdaftar akan di pilih secara random.', watermark, 'Menu', '.?')
}
handler.command = /eventregister$/i
module.exports = handler