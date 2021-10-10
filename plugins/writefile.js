let fs = require('fs')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) { 
        throw `
┌〔 List Write 〕
├ database
├ premium
├ file
├ event
└────
example:
${usedPrefix + command} database [quoted]
${usedPrefix + command} file plugins/join.js
`.trim()
    } else if (args[0] === 'database') {
        let saveas = await m.quoted.download()
        fs.writeFileSync(`./database.json`, saveas)
        m.reply('Berhasil tersimpan sebagai database.json')
    } else if (args[0] === 'premium') {
        let saveas = await m.quoted.download()
        fs.writeFileSync(`./src/premium.json`, saveas)
        m.reply('Berhasil tersimpan sebagai premium.json')
    } else if (args[0] === 'file') {
        if (!args[1]) throw `Masukkan nama dan tujuan file.\n${usedPrefix + command} plugins/join.js`
        require('fs').writeFileSync(`./${args[1]}`, m.quoted.text)
        m.reply(`Berhasil tersimpan sebagai ${args[1]}.`)
    } else if (args[0] === 'event') {
        let saveas = await m.quoted.download()
        fs.writeFileSync(`./src/event.json`, saveas)
        m.reply('Berhasil tersimpan sebagai event.json')
    }
} 
handler.command = /write$/i
handler.tags = ['owner']
handler.owner = true
handler.help = ['write']
module.exports = handler