"use strict"

export default function sendNotification() {
    let url = location.href
    let getParameters = url.split('?')

    const message = document.createElement('div')
    message.setAttribute('class', 'confirm__message hidde')
    const message__title = document.createElement('h4')
    const message__content = document.createElement('p')
    document.body.appendChild(message)
    message.appendChild(message__title)
    message.appendChild(message__content)
    message__title.innerHTML = ""
    message__content.innerHTML = ""
    
    if (getParameters[getParameters.length -1] == 'send=true') {
        
        message.classList.remove('hidde')
        message__title.innerHTML = `Mensaje enviado exitosamente`
        message__content.innerHTML = `Pronto nos estaremos comunicando con usted :)`

    }else if (getParameters[getParameters.length -1] == 'send=false') {
        
        message.classList.remove('hidde')
        message__title.innerHTML = `Ups... Algo sali&oacute; mal`
        message__content.innerHTML = `El mensaje no se pudo enviar :(`

    }
    if (!(message.classList.contains('hidde'))) {

        setTimeout(() => {
            message.classList.add('hidde')
            location.href = "https://academia-adaggio.com/prueba.html"
        }, 3000)
    }
}