let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    let user = db.data.users[m.sender]
    let hyaku = user.pokemon
    let res = await fetch(global.API('https://zekais-api.herokuapp.com', '/pokemon', { query: hyaku }, 'grqgD6pU'))
    if (!res.ok) throw `API nya belom di bayar bang.\nDonasi ke owner biar di bayar & bisa main lagi\n\nHaruno: [401] The request did not include an authentication token or the authentication token was expired.`
    let json = await res.json()
    let teks = `
Pokemon ${json.title}
Attack: %{json.stats.attack}
Deff: ${json.stats.defense}
HP: ${json.stats.hp}
`.trim()
    let katoumegumi = await fetch(global.API('https://zekais-api.herokuapp.com', '/cardpoke', {
        pokemon: hyaku,
        power: `${json.stats.total}`,
        text: teks,
        image: `${json.image}`
    }, 'grqgD6pU'))
    let hakzen = await(await fetch(katoumegumi)).buffer()
    let nama = conn.getName(m.sender)
    let caption = `
*Pokemon PROFILE*
Nama mu: ${nama}
Resin: ${user.resin}
EXP: ${user.exp}
Mora: ${user.mora}

Note: Fitur masih dalam pengembangan owner.
`.trim()
    conn.sendFile(m.chat, hakzen, '', caption, m)
}
handler.command = /^poke-desk$/i
handler.tags = ['game']
handler.help = ['poke-desk']
module.exports = handler