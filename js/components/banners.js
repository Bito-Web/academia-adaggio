"use strict"
import initSlick from "../functions/init_slick.js"

const section = document.querySelector(".banners")

export default function buildBanners(data) {

    const __container = document.createElement("article")
    __container.setAttribute("class", "banners__container")
    section.appendChild(__container)

    data.images.forEach(d => {
        __container.innerHTML += `
            <img src="${d.src}" alt="${d.alt}"/> 
        `
    });
    
    const slickParams = [5, 1, 1, true, true, false, true]
    initSlick(".banners__container", ...slickParams)
}