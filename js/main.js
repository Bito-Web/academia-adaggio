"use strict"

import buildHeader from "./components/header.js"
import buildBanners from "./components/banners.js"
import buildAboutUs from "./components/about-us.js"
import buildGallery from "./components/gallery.js"
import buildChairs from "./components/chairs.js"
import buildExperiences from "./components/experiences.js"
import buildFaqs from "./components/faqs.js"
import buildUbication from "./components/ubication.js"
import buildContact from "./components/contact.js"
import privacy_policy from "./components/privacy_policy.js"
import buildCookies from "./components/cookies.js"
import buildFooter from "./components/footer.js"

function buildBodySections(data) {
    buildBanners(data.banners)
    buildAboutUs(data.about_us)
    buildGallery(data.gallery)
    buildChairs(data.chairs)
    buildExperiences(data.experiences)
    buildFaqs(data.faqs)
    buildUbication(data.ubication)
    // buildContact(data.contact)
    // privacy_policy(data.privacy_policy)
}

async function buildHtml() {
    const data = await fetch("./json/data.json")
    const json = await data.json()
    
    buildHeader(json.header)
    buildBodySections(json.sections)
    buildFooter(json.footer)
}

document.addEventListener("DOMContentLoaded", () => {
    buildHtml()
    if (window.localStorage.getItem("accepted_cookies") == null) {
        buildCookies(false)
    }
})