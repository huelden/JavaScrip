function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minut} minutos.`


if (hora >= 0 && hora <12) {
    //BOM DIA!
    img.src = 'img/manha.jpg'

} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'img/tarde.jpg'
} else {
    //BOA NOITE!
    img.src = 'img/noite.jpg'
}
}