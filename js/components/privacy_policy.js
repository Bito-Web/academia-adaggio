"use strict"

import buildModal from "./modal.js"


export default function privacy_policy(data) {
    
    const __button = document.querySelector('#privacy_policy')
    __button.setAttribute('type', 'button')
    __button.setAttribute('data-id', `${data.title}`)
    __button.textContent = `${data.title}`

    __button.addEventListener('click', (e) => {
        e.preventDefault()

        modal.classList.add('open')
        buildModal(data, __button)
    })
}