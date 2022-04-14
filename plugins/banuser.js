let handler = async (m, { conn, text}) => {
    if (!text) throw '*_A QUIEN QUIERE BANEAR?_*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_ETIQUETE A ALGUN USUARIO_*'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `*_EL USUARIO FUE BANEADO CON EXITO_*\n\n*_EL USUARIO NO TENDRA PERMISO PARA USAR EL BOT
    si crees que se trate de un error comuniquese con http://wa.me/595983186566_*`, m)
}
handler.help = ['banuser']
handler.tags = ['General']
handler.command = /^banuser$/i
handler.rowner = true

module.exports = handler
