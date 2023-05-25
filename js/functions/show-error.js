"use strict"

export default function showError(input, classCss, error) {
    if(error > 0) {
        if(input.classList.contains(classCss) == false) {
            input.classList.add(classCss)
        }
    }else {
        input.classList.remove(classCss)
    }
}