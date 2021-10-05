let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let res = await fetch('https://raw.githubusercontent.com/FadliDarmawan/natsukawa/main/event.json')
    let json = await res.json()
    let kamisato = `
Selamat datang, ${name} di menu game Haruno Bot!

Pemberitahuan event:
*${json.event.event_name}*
${json.event.event_desk}

${json.event.event_date}

Silahkan memilih sub-menu pada list di bawah, sub menu akan membawa mu ke petualangan yang baru!
`.trim()
    const button = {
        buttonText: 'Mari mulai petualangan ini!',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Advanture', description: "Mari bertualang!\nLawan musuh ataupun selesaikan puzzle!", rowId:".advanture"},
        {title: 'Quest', description: "Selesaikan quest dan dapatkan hadiahnya!", rowId:".questmenu"},
        {title: 'Boss', description: "Lawan bos dan dapatkan hadiahnya!", rowId:".bossmenu"},
        {title: 'Domain', description: "Masuk ke domain.", rowId:".domainmenu"},
        {title: 'Event', description: "Event menu", rowId:".eventmenu"},
        {title: 'Wish', description: "Dapatkan artefak, senjata, dan karakter baru!", rowId:".wish"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(genshin)$/i
handler.help = ['genshin']
module.exports = handler
//Haruno Bot
