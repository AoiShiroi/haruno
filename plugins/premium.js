let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let caption = `
┌〔 Premium 〕
├ Dapatkan fitur premium
├ Unlimited limit
├ Github/sc bot
└────
1. Fitur play atau downloader youtube up to 90mb
2. Unlimited limit (limit tidak terpakai)
3. Memasukkan bot ke 2 group (30 Hari)
4. Jadibot (dapatkan sc bot Haruno[harap tidak di sebar])
5. Event berhadiah

Jika kamu ada saran fitur bisa langsung di kasih tau ke owner.
Terimakasih >~<
-Harunobot
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), caption, watermark, 'Owner', '.owmer', 'ListPrem', '.listprem')
}
handler.command = /^premium$/i
handler.help = ['premium']
handler.tags = ['main']
module.exports = handler