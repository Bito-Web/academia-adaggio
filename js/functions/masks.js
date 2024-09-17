"use strict"

export function textMask(input) {
    let output = input.trim()
    return output
}

export function telMask(input) {

    let output = input.toString()

    if (input != "0414-123-1234") {

        let filterCharsets = [" ",",",".","-","_","(",")","<",">","+","/","\\","e"]
        
        filterCharsets.forEach(charset => {
            input = input.split(charset).join("");
            
        })
        // let _1 = input.slice(0,4)
        // let _2 = input.slice(4,7)
        // let _3 = input.slice(7,11)
    
        // output = `+58 (${_1}) ${_2} ${_3}`
    }
    return output
}