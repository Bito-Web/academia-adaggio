"use strict"

import buildHeader from "../js/components/header.js"
import buildBanners from "../js/components/banners.js"
import buildAboutUs from "../js/components/about-us.js"
import buildGallery from "../js/components/gallery.js"
import buildChairs from "../js/components/chairs.js"
import buildExperiences from "../js/components/experiences.js"
import buildFaqs from "../js/components/faqs.js"
import buildUbication from "../js/components/ubication.js"
import buildContact from "../js/components/contact.js"
import privacy_policy from "../js/components/privacy_policy.js"
import buildCookies from "../js/components/cookies.js"
import buildFooter from "../js/components/footer.js"

function buildBodySections(data) {
    buildBanners(data.banners)
    buildAboutUs(data.about_us)
    buildGallery(data.gallery)
    buildChairs(data.chairs)
    buildExperiences(data.experiences)
    buildFaqs(data.faqs)
    buildUbication(data.ubication)
    // buildContact(data.contact)
    privacy_policy(data.privacy_policy)
}

async function buildHtml() {
    const data = await fetch("./data.json")
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