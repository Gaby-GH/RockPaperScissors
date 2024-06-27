// GAME

let feuille = document.querySelector("#btn_feuille")
let ciseaux = document.querySelector("#btn_ciseaux")
let pierre = document.querySelector("#btn_pierre")
let div_2 = document.querySelector("#div_2")

let p1 = document.querySelector("#p_you_picked")
let p2 = document.querySelector("#p_the_house_picked")
let dark_rond = document.querySelector("#dark_rond")

feuille.addEventListener("click", () => {
    feuille.style.left = "30%"
    feuille.style.top = "35%"
    ciseaux.className = "enlever"
    pierre.className = "enlever"
    p1.removeAttribute("hidden")
    p2.removeAttribute("hidden")
    dark_rond.removeAttribute("hidden")
    div_2.style.backgroundImage = "url()"
})

ciseaux.addEventListener("click", () => {
    ciseaux.style.left = "30%"
    ciseaux.style.top = "35%"
    feuille.className = "enlever"
    pierre.className = "enlever"
    p1.removeAttribute("hidden")
    p2.removeAttribute("hidden")
    dark_rond.removeAttribute("hidden")
    div_2.style.backgroundImage = "url()"
})

pierre.addEventListener("click", () => {
    pierre.style.left = "30%"
    pierre.style.top = "35%"
    ciseaux.className = "enlever"
    feuille.className = "enlever"
    p1.removeAttribute("hidden")
    p2.removeAttribute("hidden")
    dark_rond.removeAttribute("hidden")
    div_2.style.backgroundImage = "url()"
})


// RULES

let btn_rules = document.querySelector("#btn_rules")
let div_rules = document.querySelector("#div_rules")
let div_shadow = document.querySelector("#div_shadow")
let div_rules_close = document.querySelector("#div_rules_close")

btn_rules.addEventListener("click", () => {
    div_shadow.removeAttribute("hidden")
    div_rules.removeAttribute("hidden")
})

div_rules_close.addEventListener("click", () => {
    div_rules.setAttribute("hidden", true)
    div_shadow.setAttribute("hidden", true)
})