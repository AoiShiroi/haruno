let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
    let jid = m.sender
    let name = conn.getName(m.sender)
    let kaptjion = `
*Harunobot EVENT*

Matahari terbit, Hari baru!
event yang sedang berlangsung:
5 pemenang, gratis bot join ke group*

Daftarkan nomor mu di event, dan nomor akan di pilih secara acak.
untuk mendaftar silahkan tekan tombol "Daftar" di bawah.
`.trim()
    conn.sendButtonLoc(m.chat, await(await fetch(image)).buffer(), kaptjion, watermark, 'Daftar', `.eventregister ${jid}|${name}`, m)
}
handler.command = /^event$/i
module.exports = handler