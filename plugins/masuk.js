function handler(m) {
    m.reply('Konfirmasi ke owner untuk informasi lebih lanjut.')
    this.sendContact(m.chat, '628112958665@s.whatsapp.net', 'Fadli', m)
    this.sendContact(m.chat, '6288215569001@s.whatsapp.net', 'Zaki', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
  
