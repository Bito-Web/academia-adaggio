"use strict"

export default function scrollTo(item) {
    const button = document.querySelector(item)
    button.scrollIntoView({
        behavior: "smooth"
    });
}