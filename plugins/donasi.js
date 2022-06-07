let handler =  m => m.reply(`
╭─「 Donasi • Mursid 」
│ • Dana : 088233832771
│ • Owner : wa.me/6288233832771
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana : 081254496523
│ • Ovo : 081254496523
│ • Owner : wa.me/6281348568830
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
