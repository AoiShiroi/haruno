const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix, command, args }) => {
  conn.poke = conn.poke ? conn.poke : {}
  let id = m.chat
  if (id in conn.poke) {
    conn.reply(m.chat, 'Masih ada yang melakukan Poke Find', conn.tebakgambar[id][0])
    throw false
  }
  if(db.data.users[m.sender].resin === '0') throw `Resin kamu habis. Mekanik untuk menambahkan resin belum di tambahkan, Tunggu update selanjutnya.`
  let pokemon = JSON.parse(fs.readFileSync(`./src/pokemon.json`))
  let json = pokemon[Math.floor(Math.random() * pokemon.length)]
  let res = await fetch(`https://zekais-api.herokuapp.com/pokemon?query=${json.name}&apikey=grqgD6pU`)
  if (!res.ok) throw `API nya belom di bayar bang.\nDonasi ke owner biar di bayar API nya\n\nHaruno: [402]`
  let hyaku = await res.json()
  let caption = `
*Pokemon FOUND*

- Name: *${hyaku.title}*

- Stats
Attack: ${hyaku.stats.attack}
Defense: ${hyaku.stats.defense}
HP: ${hyaku.stats.hp}

Total Power: ${hyaku.stats.total}
    `.trim()
    db.data.users[m.sender].resin -= 20
  conn.poke[id] = [
    await conn.send2ButtonImg(m.chat, caption, await (await fetch(hyaku.image)).buffer(), '© Haruno', 'Catch', `.poke-catch ${json.name}, 'Skip`, '.delpoke-find', m)
    ,
    setTimeout(async () => {
      if (conn.poke[id]) await conn.sendButton(m.chat, `Waktu habis!\nManfaatkan waktu sebaik mungkin.`, '© Haruno', 'Poke-find', '.poke-find')
      delete conn.poke[id]
    }, timeout)
  ]
}
handler.help = ['poke-find']
handler.tags = ['game']
handler.command = /^poke-find/i

module.exports = handler