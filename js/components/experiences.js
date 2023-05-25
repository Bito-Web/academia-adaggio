"use strict"

import initSlick from "../functions/init_slick.js"

const section = document.querySelector(".experiences")

export default function buildExperiences(data) {

    const __title = document.createElement("h2")
    __title.setAttribute("class", "experiences__title title")
    __title.innerHTML = data.title
    section.appendChild(__title)

    const __container = document.createElement("article")
    __container.setAttribute("class", "experiences__container")
    section.appendChild(__container)


    data.comments.forEach(d => {
        __container.innerHTML += `
            <div class="experiences__container__item">
                <div>
                    <i class="fa-solid fa-user"></i>
                    <p>&ldquo;${d.comment}...&rdquo;</p>
                    <p>...${d.author}</p>
                </div>
            </div>
        `
    });
    
    const slickParams = [5, 1, 1, true, true, true, false]
    initSlick(".experiences__container", ...slickParams)
}