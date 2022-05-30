function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  // hora = 17

  if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'manha.png'
    document.body.style.background = '#FEE386'
  } else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#FAA33D'
  } else {
    // boa noite
    img.src = 'noite.png'
    document.body.style.background = '#343362'
  }
}
