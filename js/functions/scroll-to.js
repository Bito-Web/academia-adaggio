"use strict"

export default function scrollTo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.replaceState(null, null, "/")
}