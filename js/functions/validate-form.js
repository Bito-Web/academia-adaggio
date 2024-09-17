"use strict"

import showError from "./show-error.js"
import showMessageForm from "./show-message-form.js"
import {telMask, textMask} from "./masks.js"

export default function validateForm(...inputs) {
    const button = document.querySelector('#submit')
    let error = 0
    
    inputs.forEach(input => {

        if (input.name == "name" && input.type == "text") {
            if(!isNaN(input.value) || input.value == "" || input.value.length < 5 || input.value == input.placeholder) {
                error++
                showError(input, 'error' , error)
            }else {
                showError(input, 'error' , error)
                input.value = textMask(input.value).toString()
            }
        }
        if (input.name == "email" && input.type == "email") {
            if(!(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(input.value)) || input.value == input.placeholder) {
                error++
                showError(input, 'error' , error)
            }else {
                showError(input, 'error' , error)
                input.value = input.value.toString()
            }
        }
        if (input.name == "tel" && input.type == "tel") {
            if(!(/^\d{10,11}$/.test(input.value)) || input.value == input.placeholder) {
                error++
                showError(input, 'error' , error)
            }else {
                showError(input, 'error' , error)
                input.value = telMask(input.value).toString()
            }
        }
        if (input.name == "message" && input.type == "textarea") {
            if(input.value == "" || input.value.length < 15 || input.value == input.placeholder) {
                error++
                showError(input, 'error' , error)
            }else {
                showError(input, 'error' , error)
                input.value = textMask(input.value).toString()
            }
        }
    })
    
    if(error == 0) {
        // saveDataForm(...inputs)
        showMessageForm(button, error, 7)
        return true
    }else {
        showMessageForm(button, error, 3)
        return false
    }
}