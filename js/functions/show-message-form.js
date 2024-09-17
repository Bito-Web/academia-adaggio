"use strict"

export default function showMessageForm(button, error, time) {
    time = time * 1000
    button.textContent = ""

    if (error == 0) {
        button.textContent = "¡Enviando Mensaje!"
        button.classList.add('ok')
        button.classList.remove('error')
    }else {
        let plural = "es"
        if (error > 1) {
            plural = "es"
            button.textContent = `Hay ${error} error${plural}`
        }else {
            plural = ""
            button.textContent = `Hay ${error} error${plural}`
        }
        button.classList.add('error')
        button.classList.remove('remove')
        
        setTimeout(() => {
            button.textContent = "Enviar"
            button.classList.remove('error')
            button.classList.remove('ok')
        }, time)
    }
}