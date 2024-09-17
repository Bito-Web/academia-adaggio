"use strict"

const section = document.querySelector(".ubication")

export default function buildubication(data) {

    const __title = document.createElement("h3")
    __title.setAttribute("class", "ubication__title title")
    __title.textContent = data.title
    section.appendChild(__title)
    
    const __container = document.createElement("article")
    __container.setAttribute("class", "ubication__container")
    section.appendChild(__container)
    
    data.ubication.forEach(d => {
        const __school = document.createElement("div")
        __container.appendChild(__school)
        
        const __school_title = document.createElement("p")
        __school_title.innerHTML += `<b>Escuela:</b> ${d.title}`
        __school.appendChild(__school_title)
        
        const __school_address = document.createElement("p")
        __school_address.innerHTML += `<b>Lugar:</b> ${d.address}`
        __school.appendChild(__school_address)

        const __school_schedules = document.createElement("p")
        __school_schedules.innerHTML += `<b>Horarios:</b>`
        __school.appendChild(__school_schedules)
        
        d.schedules.forEach(dd => {
            
            __school_schedules.innerHTML += `
                <span style="word-break: keep-all;">"${dd.day} - ${dd.hours}"</span>
            `
        })
        __school.innerHTML += `
        <iframe src="https://www.google.com/maps/embed?pb=${d.map.src}" allowfullscreen="" loading="lazy"></iframe>
        `
    });
}