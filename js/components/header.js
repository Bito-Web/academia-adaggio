"use strict"

// import scrollTo from "../functions/scroll-to.js"

const section = document.querySelector(".header")

export default function buildHeader(data) {

    const __logo = document.createElement("div")
    __logo.setAttribute("class", "header__logo")

    __logo.innerHTML += `
        <a>
            <img src="${data.logo.src}" alt="${data.logo.alt}" loading="lazy"/>
        </a>
    `
    const __title = document.createElement("h1")
    __title.textContent = `${data.title}`
    
    const __nav = document.createElement("nav")
    __nav.setAttribute("class", "header__nav")
    
    section.appendChild(__logo)

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

    // __logo.addEventListener("click", scrollTo, false)
}