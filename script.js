const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")


const begin = "31 dec 2023"

function countdown () {

    const dataBegin = new Date(begin)
    const hoje = new Date()

    const segTotal = (dataBegin - hoje)/1000
    const dias = Math.floor((segTotal / 3600 / 24))
    const horas = Math.floor((segTotal/3600) % 24)
    const minutos = Math.floor(segTotal / 60) % 60
    const segundos = Math.floor(segTotal % 60 )

    dia.innerHTML = `<strong> ${dias} Dias </strong>`
    hora.innerHTML = `<strong> ${horas} Horas </strong>`
    minuto.innerHTML = `<strong> ${minutos} Minutos </strong>`
    segundo.innerHTML = `<strong> ${segundos} Segundos </strong>`
}

countdown();

setInterval(countdown, 1000)