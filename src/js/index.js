const navToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector("#navigation")
navToggle.addEventListener("click", () => {

    navigation.toggleAttribute('data-visible')

})