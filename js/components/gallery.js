"use strict"

import initSlick from "../functions/init_slick.js"
import buildModal from "./modal.js"

const section = document.querySelector(".gallery")
const modal = document.querySelector(".modal")

export default function buildGallery(data) {
    
    const __title = document.createElement("h3")
    __title.setAttribute("class", "gallery__title title")
    __title.textContent = data.title
    section.appendChild(__title)

    const __container = document.createElement("article")
    __container.setAttribute("class", "gallery__container")
    section.appendChild(__container)

    
    data.albums.forEach(d => {
        __container.innerHTML += `
            <div class="gallery__container__album" data-id="${d.title}" style="background-image: url(${d.cover});">
                <h4>${d.title}</h4>
            </div>
        `
    });

    const slickParams = [5, 3, 1, true, true, false, true]
    initSlick(".gallery__container", ...slickParams)

    const __album = document.querySelectorAll(".gallery__container__album")
    __album.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            modal.classList.add('open')
            buildModal(data, item)
        })
    })
}