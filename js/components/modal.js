"use strict"

import initSlick from "../functions/init_slick.js"
import buildCookies, { getCookie } from "./cookies.js"

const section = document.querySelector(".modal")

export default function buildModal(data, item) {

    section.innerHTML = ""

    const __container = document.createElement("div")
    __container.setAttribute("class", "modal__container")
    section.appendChild(__container)

    const __header = document.createElement("header")
    __header.setAttribute("class", "modal__container__header")
    __container.appendChild(__header)

    const __body = document.createElement("section")
    __body.setAttribute("class", "modal__container__body")
    __container.appendChild(__body)

    const __footer = document.createElement("footer")
    __footer.setAttribute("class", "modal__container__footer")
    __container.appendChild(__footer)

    const selectedItem = item.getAttribute('data-id')

    switch (data.title) {
        case "Galería":

            data.albums.forEach(album => {
                if (selectedItem == album.title) {
                    __header.innerHTML = `${data.title} - ${album.title}`
                    __footer.innerHTML = `${data.footer}`
                    album.images.forEach(img => {
                        __body.innerHTML += `
                            <article>
                                <img src="${img.src}" alt="${img.alt}"/>
                            </article>
                        `
                    })
                }
            })
            const slickParams = [5, 1, 1, true, true, true, true]
            initSlick(".modal__container__body", ...slickParams)
            break
        case "Cátedras Musicales":
            
            data.courses.forEach(course => {
                let dataId = ""
                data.teachers.forEach(t => {
                    dataId = `${t.id}_${course.title}`

                    if (selectedItem == dataId) {
    
                        // let title = "Profesor"
                        // if (t.man_or_woman == 2) {
                        //     title = title + "a"
                        // }else {
                        //     title = title
                        // }
                        __header.innerHTML = `Cátedra: ${course.title}`
                        __footer.innerHTML = `${data.footer}`
                        // <img src="${t.img.src}"alt="${t.img.alt}" /> agregar luego
                        let finish = "Actualidad"
                        if (t.active == true) {
                            finish = finish
                        }else {
                            finish = `${t.end}`
                        }
                        __body.innerHTML += `
                            <article class="__teacher">
                                <i class="fa-solid fa-user"></i>
                                <p class="__teacher__title"><b>${t.name}</b></p>
                                <p class="__teacher__since">Desde <b>${t.since}</b> hasta <b>${finish}</b></p>
                                <div class="__teacher__biography">
                                    <div class="biography">
                                        <b>Biografía:</b>
                                        <p>${t.biography}</p>
                                    </div>
                                    <div class="instruments">
                                        <b>Instrumentos y especialidades:</b>
                                        <p>${t.instruments}</p>
                                    </div>
                                </div>
                            </article>
                        `
                        const schedule = document.querySelector(".__teacher__biography")
                        t.schedules.forEach(s => {
                            if (course.title == `${s.course}`) {
                                schedule.innerHTML += `
                                <div class="schedules">
                                    <p><b>Cátedra:</b> ${s.course}</p>
                                    <p><b>Sede:</b> ${s.place}</p>
                                    <p><b>Día:</b> ${s.day}</p>  
                                    <p><b>Horario:</b> ${s.hours}</p>  
                                </div>
                                `
                            }else {
                                return
                            }
                        })
                        
                    }
                })
            })
            break
        case "Políticas de Privacidad": 

            if (data.title == selectedItem) {

                __header.innerHTML = `${data.title}`
                __footer.innerHTML = `${data.footer}`

                const __articles = document.createElement('div')
                __articles.setAttribute('class', 'privacy_policy__content')

                __body.appendChild(__articles)

                data.articles.forEach(__section => {
                    __articles.innerHTML += `
                    <h4><strong>${__section.title}</strong></h4>
                    `
                    __section.content.forEach(d => {
                        __articles.innerHTML += `
                        <p>${d.content}</p>
                        `
                    })
                })

                const __form = document.createElement('form')
                __form.setAttribute('class', 'privacy_policy__form')
                __form.setAttribute('id', 'privacy_policy__form')
                __form.setAttribute('method', data.method)
                __form.setAttribute('action', data.action)
                __articles.appendChild(__form)
                
                const __check = document.createElement('div')
                __check.setAttribute('class', 'privacy_policy__content__form__check')
                const __submit = document.createElement('div')
                __submit.setAttribute('class', 'privacy_policy__content__form__submit')
                __form.appendChild(__check)
                __form.appendChild(__submit)
                
                const __checkbox = document.createElement('input')
                __checkbox.setAttribute('type', 'checkbox')
                __checkbox.setAttribute('name', 'accept')
                __checkbox.setAttribute('checked', true)
                __checkbox.setAttribute('id', 'privacy_policy_checkbox')
                __checkbox.setAttribute('class', 'privacy_policy__content__form__check__checkbox')
                
                const __label_checkbox = document.createElement('label')
                __label_checkbox.setAttribute('for', 'privacy_policy_checkbox')
                __label_checkbox.setAttribute('class', 'privacy_policy__content__form__check__label')
                __label_checkbox.textContent = "He leído las Políticas de Privacidad"

                const __longitude = document.createElement('input')
                __longitude.setAttribute('type', 'hidden')
                __longitude.setAttribute('name', 'longitude')
                __longitude.value = getCookie('geolocation_longitude')

                const __latitude = document.createElement('input')
                __latitude.setAttribute('type', 'hidden')
                __latitude.setAttribute('name', 'latitude')
                __latitude.value = getCookie('geolocation_latitude')

                const __timezone = document.createElement('input')
                __timezone.setAttribute('type', 'hidden')
                __timezone.setAttribute('name', 'timezone')
                __timezone.value = getCookie('timezone')
                
                const __navigation_id = document.createElement('input')
                __navigation_id.setAttribute('type', 'hidden')
                __navigation_id.setAttribute('name', 'navigation_id')
                __navigation_id.value = getCookie('navigation_id')

                __check.appendChild(__longitude)
                __check.appendChild(__latitude)
                __check.appendChild(__timezone)
                __check.appendChild(__navigation_id)
                
                __check.appendChild(__checkbox)
                __check.appendChild(__label_checkbox)

                const __button = document.createElement('button')
                __button.setAttribute('type', 'submit')
                __button.setAttribute('class', 'privacy_policy__content__form__submit__button')
                __button.textContent = "Aceptar"

                __submit.appendChild(__button)

                __button.addEventListener('click', (e) => {
                    e.preventDefault()
                    if (__checkbox.checked) {
                        __checkbox.value = true
                    }else {
                        __checkbox.value = false
                    }

                    buildCookies(__checkbox.value)
                    __form.submit(true)

                    section.classList.remove('open')

                })
            }
            break
        default:
            __body.innerHTML = `
                <h2>404 - Sin contenido</h2>
            `
            break
    }

    __header.addEventListener('click', () => {
        section.classList.remove('open')
    })
    
    window.addEventListener("dblclick", () => {
        section.classList.remove('open')
    })
}