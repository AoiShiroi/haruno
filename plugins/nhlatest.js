const nhentai = require('nhentai-node-api')
let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
    let doujin = await nhentai.getLatest()
    let { isBusiness } = conn.isOnWhatsApp(conn.user.jid)
      if (isBusiness) {
    let text = doujin.map((v, i) => `No ${i + 1}\nKode: ${v.id}\nTitle: ${v.title}\nLanguage: ${v.language}\nUntuk mendownload: ${usedPrefix}nhentai ${v.id}\n==============\n`).join('\n')
    m.reply('🆕 Latest Doujin!' + '\n\n' +text)
      } else {
        let rows = []
        doujin.forEach((v, i)=> {
            rows.push({
              title: `${i + 1}. ${v.title}`,
              description: `Code: ${v.id}`,
              rowId: `${usedPrefix}nhentai ${v.id}`
            })
          })
          let name = conn.getName(m.sender)
          await conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
            "listMessage": {
              "title": `Hi, ${name}`,
              "description": `🆕 Latest Doujin!\nSilahkan pilih list opsi untuk mendownload doujin.`,
              "footerText": "Silahkan tekan tombol \"Click Here\" untuk melihat list doujin",
              "buttonText": "Click Here",
              "listType": "SINGLE_SELECT",
              "sections": [
                {
                  "rows": rows,
                  "title": "Doujin Searcn"
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
}
handler.command = /^nhlatest|nhterbaru|nhnewest|nhnew$/i
handler.tags = ['internet']
handler.help = ['nhlatest']
module.exports = handler