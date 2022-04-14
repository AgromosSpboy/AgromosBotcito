let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
ミ🤠  *Hola estimado usuario* 🤠彡
Duro-duro-duro dos horas

Haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

Duro dos horas haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

La tengo en cuatro, quiere que la rompa

Quiere maltrato, en mi bicho se monta

Es una loca, no se controla

La quiere en su nuca para ella sola (Golosa)

Se viene conmigo, no le gustan los novatos

Pide que la folle en el patio de su casa

Pide leche fresca a cada rato

Se larga de la uni y follamos en el acto

Acto, acto, pide contacto

Acto, acto, pide contacto

Acto, acto, pide contacto

Pide que follemos cada rato

Duro dos horas haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

Duro dos horas haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

Dicen que me aman y les creo

Dejaron a sus novios porque se lo hacen feo

Hacemos fantasías, cumplo sus deseos

Estamos en el bus dándole al meneo

Quiere todo para ella, es una golosa

Quiere de mi esperma porque dicen que es sabrosa

Su novio toca el timbre, no atiende mi tramposa

Porque está chupando toda mi vergota

Acto, acto, pide contacto

Acto, acto, pide contacto

Acto, acto, pide contacto

Pide que follemos cada rato

Duro dos horas haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

Duro dos horas haciéndolo bien rico, ¡oh!

De las chicas soy su favorito, wow

Todas dicen que me aman

Todas me quieren en su cama

Acto, acto, pide contacto

Acto, acto, pide contacto

Acto, acto, pide contacto

¡Rra!

Soy Faraón Love Shady conquistando el mundo con estilo y elegancia

Híbrido Gang Music, Delexio Beats

Fuente: Musixmatch

`.trim(), 'AGROMOS SP - Bot', '🔵 MENÚ 🔵', `#menu`, '🔴 MENÚ NUEVO🔴', `#menunuevo`, '🟡 MENÚ AUDIOS 🟡', `#menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
