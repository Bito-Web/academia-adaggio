"use strict"

const section = document.querySelector(".footer")

export default function buildFooter(data) {

    const __container = document.createElement("div")
    __container.setAttribute("class", "footer__container")
    section.appendChild(__container)

    const __contact = document.createElement("div")
    __contact.setAttribute("class", "footer__container__contact")
    __container.appendChild(__contact)

    const __logo = document.createElement("div")
    __logo.setAttribute("class", "footer__container__logo")
    __container.appendChild(__logo)

    const __social = document.createElement("div")
    __social.setAttribute("class", "footer__container__social")
    __container.appendChild(__social)

    data.contact.forEach(d => {
        __contact.innerHTML += `
        <a href="${d.href}" target="${d.target}">
            <i class="${d.icon}"></i>
            <span>${d.title}</span>
        </a>
        `
    })

    __logo.innerHTML += `
        <a href="${data.logo.href}" target="${data.logo.target}">
            <img src="${data.logo.src}" alt="${data.logo.alt}" loading="lazy"/>
        </a>
    `
    data.social.forEach(d => {
        __social.innerHTML += `
        <a href="${d.href}" target="${d.target}">
            <i class="${d.icon}"></i>
            <span>${d.title}</span>
        </a>
        `
    })
}