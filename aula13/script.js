function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
     if (hora >= 0 && hora < 12){
        // manha
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#F9c034 '
     } else if ( hora >= 12 && hora < 18) {
        //tarde
        img.src = ' imagens/tarde.jpg'
        document.body.style.background = '#DD754D '
     } else {
        //noite
        img.src = 'imagens/noite.jpg.jpg'
        document.body.style.background = '#452B5A'
     }
}

