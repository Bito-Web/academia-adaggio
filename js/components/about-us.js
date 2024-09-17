"use strict"

const section = document.querySelector(".about-us")

export default function buildAboutUs(data) {

    const __container = document.createElement("article")
    __container.setAttribute("class", "about-us__container")
    section.appendChild(__container)

    const __left = document.createElement("div")
    __left.setAttribute("class", "about-us__container__left")
    __container.appendChild(__left)
    
    const __img = document.createElement("img")
    __img.setAttribute("src", `${data.image.src}`)
    __img.setAttribute("loading", "lazy")
    __left.appendChild(__img)
    
    const __right = document.createElement("div")
    __right.setAttribute("class", "about-us__container__right")
    __container.appendChild(__right)

    __right.innerHTML += `<h3 class="title">${data.content.title}</h3>`
    
    data.content.description.forEach(d => {

        __right.innerHTML += `<h4>${d.subtitle}</h4>`
        __right.innerHTML += `<p>${d.text}</p>`
    })
    
}