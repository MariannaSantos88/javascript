var agora = new Date() //mostra a hora exata do sistema
var horas = agora.getHours() //mostra a hora exata do sistema
var minutos = agora.getMinutes() //mostra os minutos exato do sistema
console.log(`Agora são exatamente ${horas}:${minutos} horas.`)
if (horas < 12 ){
    console.log(`Bom dia!`)
} else if (horas <=18) {
    console.log (`Boa tarde!`)
} else{
    console.log(`Boa noite!`)
}