var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são extamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Boa Tarde!`)
} else if (hora <= 18) {
    console.log(`Boa Noite!`)
}