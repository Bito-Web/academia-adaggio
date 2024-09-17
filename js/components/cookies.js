"use strict"

export default function buildCookies(value) {

    window.localStorage.clear()
    acceptCookieConsent(value)
    geoLocation()
    navigationId()
}

// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
export function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
export function acceptCookieConsent(value){

    window.localStorage.setItem('accepted_cookies', value)
    deleteCookie('accepted_cookies');
    setCookie('accepted_cookies', value, 30);
    
}

export function navigationId() {
    deleteCookie('navigation_id')
    setCookie('navigation_id', navigation.currentEntry.id, 1)
}

export function geoLocation() {
    if ('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition((position) => {
            deleteCookie('geolocation_latitude')
            setCookie('geolocation_latitude', position.coords.latitude, 30)
            deleteCookie('geolocation_longitude')
            setCookie('geolocation_longitude', position.coords.longitude, 30)
        });
    }
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    deleteCookie('timezone')
    setCookie('timezone', timezone, 30)
}