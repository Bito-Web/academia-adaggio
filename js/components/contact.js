"use strict"

import sendNotification from "../functions/send-notification-form.js"
import validateForm from "../functions/validate-form.js"

const section = document.querySelector('.contact')

export default function buildContact(data) {

    const __container = document.createElement('article')
    __container.setAttribute('class', 'contact__container')
    const __title = document.createElement('h3')
    __title.setAttribute('class', 'contact__title title')
    __title.textContent = data.title
    const __container__form = document.createElement('form')
    __container__form.setAttribute('class', 'contact__container__form')
    __container__form.setAttribute('id', 'contact__container__form')
    __container__form.setAttribute('action', data.form.action)
    __container__form.setAttribute('method', data.form.method)

    section.appendChild(__title)
    section.appendChild(__container)
    __container.appendChild(__container__form)

    data.form.inputs.forEach(d => {
        if(d.type != 'textarea' && d.type != 'hidden') {
            __container__form.innerHTML += `
                <div>
                    <label for="${d.id}"><b>${d.title}</b></label>
                    <input id="${d.id}" name="${d.name}" type="${d.type}" minlength="${d.minlength}" placeholder="${d.placeholder}" required="${d.required}"/>
                </div>
            `
        }else if(d.type == 'hidden') {
            __container__form.innerHTML += `
                <input id="${d.id}" name="${d.name}" type="${d.type}" value="${d.value}"/>
            `
        }else if(d.type == 'textarea'){
            __container__form.innerHTML += `
                <div>
                    <label for="${d.id}"><b>${d.title}</b></label>
                    <textarea id="${d.id}" name="${d.name}" type="${d.type}" rows="${d.rows}" required="${d.required}"></textarea>
                </div>
            `
        }
    })
    const required_fields = document.createElement('p')
    required_fields.setAttribute('id', 'required_fields')
    required_fields.setAttribute('class', 'required_fields')
    required_fields.textContent = `${data.required}`

    __container__form.appendChild(required_fields)

    const button = document.createElement('button')
    button.setAttribute('id', 'submit')
    button.setAttribute('type', 'submit')
    button.setAttribute('value', 'Enviar')
    button.textContent = 'Enviar'

    __container__form.appendChild(button)

    const __privacy_policy = document.createElement('button')
    __privacy_policy.setAttribute('id', 'privacy_policy')

    __container__form.appendChild(__privacy_policy)

    const __fullName = document.querySelector('#name')
    const __email = document.querySelector('#email')
    const __tel = document.querySelector('#tel')
    const __message = document.querySelector('#message')
    
    const __inputs = [
        __fullName, 
        __email, 
        __tel, 
        __message
    ]
    button.onclick = () => { 
        return validateForm(...__inputs)
    }
    button.onkeyup = (e) => {
        
        if (e.key == 'Enter') {
            return validateForm(...__inputs)
        }
    }
    sendNotification()
}