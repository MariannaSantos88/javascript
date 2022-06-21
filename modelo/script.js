function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//mostra o ano completo
    var fano = document.getElementById(`txtano`)//pega o id qe eu criei
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fano.value // calculo da idade
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute(`src`, `imagens/menino.jpg`)
            } else if (idade < 21){
                //Jovem
                img.setAttribute(`src`, `imagens/moço.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `imagens/homen.jpg`)
            } else {
                //idoso
                img.setAttribute(`src`, `imagens/senhor.jpg`)
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute(`src`, `imagens/menina.jpg`)
            } else if (idade < 21){
                //Jovem
                img.setAttribute(`src`, `imagens/moça.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `imagens/mulher.jpg`)
            } else {
                //idoso
                img.setAttribute(`src`, `imagens/senhora.jpg`)
            }
        }
        res.style.textAlign = `center`
        img.style.borderRadius = `150px`
        img.style.padding = `8px`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}