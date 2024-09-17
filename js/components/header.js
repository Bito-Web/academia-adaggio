"use strict"

const section = document.querySelector(".header")

export default function buildHeader(data) {

    const __logo = document.createElement("a")
    __logo.setAttribute("class", "header__logo")
    __logo.setAttribute("href", `${data.logo.href}`)
    __logo.setAttribute("target", `${data.logo.target}`)

    const __logo_img = document.createElement("img")
    __logo_img.setAttribute("src", `${data.logo.src}`)
    __logo_img.setAttribute("alt", `${data.logo.alt}`)
    __logo_img.setAttribute("loading", "lazy")
    
    const __title = document.createElement("h1")
    __title.textContent = `${data.title}`
    
    const __nav = document.createElement("nav")
    __nav.setAttribute("class", "header__nav")
    
    if (data.logo.href != null || data.logo.href != "") {
        section.appendChild(__logo)
    }
    if (data.logo.src != null || data.logo.src != "") {
        __logo.appendChild(__logo_img)
    }
    if (data.title.length != 0 || data.title != "") {
        __logo.appendChild(__title)
    }
    if (data.menu.length != 0) {
        section.innerHTML += `
            <i class="fa-solid fa-bars"></i>
        `
        section.appendChild(__nav)
    
        data.menu.forEach(d => {
            __nav.innerHTML += `
                <a href="${d.href}" target="${d.target}">${d.title}</a>
            `
        });

        const __mobile_btn = document.querySelector(".fa-solid.fa-bars")
        __mobile_btn.addEventListener("click", (e) => {
            e.preventDefault()
            
            __mobile_btn.classList.toggle("show")
            __nav.classList.toggle("show")
        })
    }
}