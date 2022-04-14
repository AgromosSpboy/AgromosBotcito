let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
ミ🤠  *Hola estimado usuario* 🤠彡
 *Actualmente estoy activo*. 🤖            
   
  😈 *que esperas para usarme a tu antojo?* 😈
`.trim(), 'AGROMOS SP - Bot', '🔵 MENÚ 🔵', `#menu`, '🔴 MENÚ NUEVO🔴', `#menunuevo`, '🟡 MENÚ AUDIOS 🟡', `#menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
