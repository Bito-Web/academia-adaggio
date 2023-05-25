"use strict"

import buildModal from "./modal.js"

const section = document.querySelector(".chairs")

export default function buildChairs(data) {

    const __title = document.createElement("h3")
    __title.setAttribute("class", "chairs__title title")
    __title.textContent = data.title
    section.appendChild(__title)

    const __description = document.createElement("p")
    __description.setAttribute("class", "chairs__description")
    __description.textContent = data.description
    section.appendChild(__description)

    const __container = document.createElement("article")
    __container.setAttribute("class", "chairs__container")
    section.appendChild(__container)

    data.courses.forEach(d => {

        const div = document.createElement("div")
        div.setAttribute("class", "chairs__container__chair")
        __container.appendChild(div)

        const __chair__title = document.createElement("h4")
        __chair__title.setAttribute("class", "chairs__container__chair__title")
        __chair__title.textContent = d.title
        div.appendChild(__chair__title)

        const __chair__description = document.createElement("p")
        __chair__description.setAttribute("class", "chairs__container__chair__description")
        __chair__description.innerHTML = `<b>Descripción:</b>`
        div.appendChild(__chair__description)

        d.description.forEach(t => {
            __chair__description.innerHTML += `
                <p class="chairs__container__chair__description__items"><b style="width: 1rem;">&bull;</b>&nbsp;${t.text}</p>
            `
        })

        const __chair__levels = document.createElement("p")
        __chair__levels.setAttribute("class", "chairs__container__chair__levels")
        __chair__levels.innerHTML = `<b>Niveles:</b> ${d.levels}`
        div.appendChild(__chair__levels)

        data.teachers.forEach(t => {
            d.teachers.forEach(dt => {

                if (t.id == dt) {
                    const __chair__teachers = document.createElement("p")
                    __chair__teachers.setAttribute("class", "chairs__container__chair__teachers")
        
                    let title = "Profesor"
        
                    if (t.man_or_woman == 2) {
                        title = title + "a"
                    }else {
                        title = title
                    }
                    __chair__teachers.innerHTML = `<b>${title}:</b> ${t.name}`
                    
                    div.appendChild(__chair__teachers)
        
                    const __chair__seemore_teachers = document.createElement("p")
                    __chair__seemore_teachers.setAttribute("data-id", `${t.id}_${d.title}`)
                    __chair__seemore_teachers.setAttribute("class", `__teachers__see-more`)
                    __chair__seemore_teachers.textContent = "+ Info..."
                    div.appendChild(__chair__seemore_teachers)
                }
            })
        })

    })

    const chairs = document.querySelectorAll('.chairs__container__chair');

    chairs.forEach(chair => {
        chair.addEventListener('mouseenter', () => {
            chair.classList.add('open');
        });
        
        chair.addEventListener('mouseleave', () => {
            chair.classList.remove('open');
        });
    });

    const __chair__seemore_teachers_btn = document.querySelectorAll(".__teachers__see-more")
    __chair__seemore_teachers_btn.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            modal.classList.add('open')
            buildModal(data, item)
        })
    })

}