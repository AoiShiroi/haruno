let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    let gambar = await(await fetch('https://telegra.ph/file/356618ee42c6bc339790f.jpg')).buffer()
    conn.sendFile(m.chat, gambar, 'healer.jpg', `Kamu berhasil memulihkan darah.`, m)
    user.health = 100
}
handler.command = /^kenko$/i
module.exports = handler