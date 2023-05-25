"use strict"

const section = document.querySelector(".faqs") 
export default function buildFaqs(data) {

    const __title = document.createElement("h3")
    __title.setAttribute("class", "faqs__title title")
    __title.textContent = data.title
    section.appendChild(__title)

    const __container = document.createElement("article")
    __container.setAttribute("class", "faqs__container")
    section.appendChild(__container)

    data.questions.forEach(d => {
        const __div = document.createElement("div")
        __div.setAttribute("class", "faqs__container__questions")
        
        //Agregar con el ::after por css el icono
        __div.innerHTML += `
            <h4>${d.question}</h4>
        `

        d.answers.forEach(answer => {
            __div.innerHTML += `
                <p>${answer.text}</p>
            `
        })
        
        __container.appendChild(__div)

    });
    openFaq()
}

function openFaq() {
    const questions = document.querySelectorAll(".faqs__container__questions")

    questions.forEach(question => {
        question.addEventListener('mouseenter', () => {
            question.classList.add('open');
        });
        
        question.addEventListener('mouseleave', () => {
            question.classList.remove('open');
        });
    });

}