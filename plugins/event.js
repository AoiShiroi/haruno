let fetch = require('node-fetch')
let handler = async(m, { conn, text}) => {
    if (!text) {
        conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), `Event belum di buat, silahkan request ke owner.`, watermark, 'Menu', '.?', 'Request ke Qodir', '.event qodir')
    } else if (text === 'qodir') conn.sendContact(m.chat, '6283153189868@s.whatsapp.net', 'Qodir', m)
}
handler.command = /^event$/i
handler.tags = ['main']
handler.help = ['event']
module.exports = handler