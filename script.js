document.documentElement.style.overflow = 'hidden';

if (window.innerWidth > 375){
    // SET

    let score = 0
    let aff_score = document.querySelector("#p_score_number")
    aff_score.textContent = score

    // GAME

    let feuille = document.querySelector("#btn_feuille")
    let ciseaux = document.querySelector("#btn_ciseaux")
    let pierre = document.querySelector("#btn_pierre")
    let div_2 = document.querySelector("#div_2")

    let p1 = document.querySelector("#p_you_picked")
    let p2 = document.querySelector("#p_the_house_picked")
    let dark_rond = document.querySelector("#dark_rond")

    let choice = undefined

    feuille.addEventListener("click", () => {
        choice = "f"
        feuille.style.transform = "scale(1.25)"
        feuille.style.position = "fixed"
        feuille.style.top = "50%"
        feuille.style.left = "34%"
        ciseaux.setAttribute("hidden", true)
        pierre.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    ciseaux.addEventListener("click", () => {
        choice = "c"
        ciseaux.style.transform = "scale(1.25)"
        ciseaux.style.position = "fixed"
        ciseaux.style.top = "50%"
        ciseaux.style.left = "34%"
        feuille.setAttribute("hidden", true)
        pierre.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    pierre.addEventListener("click", () => {
        choice = "p"
        pierre.style.transform = "scale(1.25)"
        pierre.style.position = "fixed"
        pierre.style.top = "50%"
        pierre.style.left = "34%"
        ciseaux.setAttribute("hidden", true)
        feuille.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    function entierAleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function Wait(duration){
        let t = Date.now()

        while (Date.now() < t + duration){

        }
    }

    let house_choice = undefined
    function RandomPicked(){
   
        let House_picked = entierAleatoire(1, 3)
        house_choice = House_picked
        console.log(House_picked)


        console.log(dark_rond.textContent)
        if (House_picked == 1){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "1.5vw solid hsl(230, 89%, 65%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(230, 29%, 41%)"
            aff_House_picked.style.width = "13vw"
            aff_House_picked.style.height = "13vw"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-paper.svg"     
            aff_House_picked.style.transform = "scale(1.25)"
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }else if (House_picked == 2){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "1.5vw solid hsl(39, 89%, 49%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(40, 41%, 35%)"
            aff_House_picked.style.width = "13vw"
            aff_House_picked.style.height = "13vw"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-scissors.svg"       
            aff_House_picked.style.transform = "scale(1.25)"
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }else if (House_picked == 3){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "1.5vw solid hsl(349, 71%, 52%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(349, 39%, 33%)"
            aff_House_picked.style.width = "13vw"
            aff_House_picked.style.height = "13vw"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-rock.svg"     
            aff_House_picked.style.transform = "scale(1.25)"
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }

        Result()
    }

    function Result(){
        if (choice == "f"){
            if (house_choice == 1){
                Draw(feuille)
            }else if (house_choice == 2){
                Lose(feuille)
            }else if (house_choice == 3){
                Win(feuille)
            }
        }else if (choice == "c"){
            if (house_choice == 1){
                Win(ciseaux)
            }else if (house_choice == 2){
                Draw(ciseaux)
            }else if (house_choice == 3){
                Lose(ciseaux)
        }
        }else if (choice == "p"){
            if (house_choice == 1){
                Lose(pierre)
            }else if (house_choice == 2){
                Win(pierre)
            }else if (house_choice == 3){
                Draw(pierre)
            }
        }
    }

    let div_draw = document.querySelector("#div_draw")
    let p_draw = document.querySelector("#p_draw")
    let btn_draw = document.querySelector("#btn_draw")

    function Draw(element){
        element.style.left = "24%"
        p1.style.left = "27%"

        dark_rond.style.left = "63%"
        p2.style.left = "64%"

        div_draw.style.transform = "scale(1)"
        div_draw.removeAttribute("hidden")
        p_draw.removeAttribute("hidden")
        btn_draw.removeAttribute("hidden")

        btn_draw.addEventListener("click", () => {
            div_draw.style.transform = "scale(0.1)"
            div_draw.setAttribute("hidden", true)
            p_draw.setAttribute("hidden", true)
            btn_draw.setAttribute("hidden", true)
            Reset(element)
        })
    
    }

    let div_win = document.querySelector("#div_win")
    let p_win = document.querySelector("#p_win")
    let btn_win = document.querySelector("#btn_win")

    function Win(element){
        score += 1
        aff_score.textContent = score

        element.style.left = "24%"
        p1.style.left = "27%"

        dark_rond.style.left = "63%"
        p2.style.left = "64%"

        div_win.style.transform = "scale(1)"
        div_win.removeAttribute("hidden")
        p_win.removeAttribute("hidden")
        btn_win.removeAttribute("hidden")

        btn_win.addEventListener("click", () => {
            div_win.style.transform = "scale(0.1)"
            div_win.setAttribute("hidden", true)
            p_win.setAttribute("hidden", true)
            btn_win.setAttribute("hidden", true)
            Reset(element)
        })
    }

    let div_lose = document.querySelector("#div_lose")
    let p_lose = document.querySelector("#p_lose")
    let btn_lose = document.querySelector("#btn_lose")

    function Lose(element){
        if (score != 0){
            score -= 1
            aff_score.textContent = score
        }
    
        element.style.left = "24%"
        p1.style.left = "27%"

        dark_rond.style.left = "63%"
        p2.style.left = "64%"

        div_lose.style.transform = "scale(1)"
        div_lose.removeAttribute("hidden")
        p_lose.removeAttribute("hidden")
        btn_lose.removeAttribute("hidden")

        btn_lose.addEventListener("click", () => {
            div_lose.style.transform = "scale(0.1)"
            div_lose.setAttribute("hidden", true)
            p_lose.setAttribute("hidden", true)
            btn_lose.setAttribute("hidden", true)
            Reset(element)
        })
    }

    function Reset(element){
        p1.setAttribute("hidden", true)
        p1.style.left = "37%"
        p2.setAttribute("hidden", true)
        p2.style.left = "54%"

        div_2.style.backgroundImage = 'url("images/bg-triangle.svg")'

        element.style.transform = "scale(1)"
        element.style.position = "sticky"
        console.log(element)

        if (element.id == "btn_feuille"){
            element.style.top = "20%"
            element.style.left = "34%"

            ciseaux.removeAttribute("hidden")
            pierre.removeAttribute("hidden")
        }else if (element.id == "btn_ciseaux"){
            element.style.top = "20%"
            element.style.left = "54%"

            feuille.removeAttribute("hidden")
            pierre.removeAttribute("hidden")
        }else if (element.id == "btn_pierre"){
            element.style.top = "90%"
            element.style.left = "43%"

            ciseaux.removeAttribute("hidden")
            feuille.removeAttribute("hidden")
        }

        dark_rond.setAttribute("hidden", true)
        dark_rond.style.left = "53%"
        let supp = document.querySelector("#aff_House_picked")
        supp.remove()
    }

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
    
}else{
    console.log("MOBILE")

    // SET

    let score = 0
    let aff_score = document.querySelector("#p_score_number")
    aff_score.textContent = score

    // GAME

    let feuille = document.querySelector("#btn_feuille")
    let ciseaux = document.querySelector("#btn_ciseaux")
    let pierre = document.querySelector("#btn_pierre")
    let div_2 = document.querySelector("#div_2")

    let p1 = document.querySelector("#p_you_picked")
    let p2 = document.querySelector("#p_the_house_picked")
    let dark_rond = document.querySelector("#dark_rond")

    let choice = undefined

    feuille.addEventListener("click", () => {
        choice = "f"
        feuille.style.position = "fixed"
        feuille.style.top = "32%"
        feuille.style.left = "12%"
        ciseaux.setAttribute("hidden", true)
        pierre.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    ciseaux.addEventListener("click", () => {
        choice = "c"
        ciseaux.style.position = "fixed"
        ciseaux.style.top = "32%"
        ciseaux.style.left = "12%"
        feuille.setAttribute("hidden", true)
        pierre.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    pierre.addEventListener("click", () => {
        choice = "p"
        pierre.style.position = "fixed"
        pierre.style.top = "32%"
        pierre.style.left = "12%"
        ciseaux.setAttribute("hidden", true)
        feuille.setAttribute("hidden", true)
        p1.removeAttribute("hidden")
        p2.removeAttribute("hidden")
        dark_rond.removeAttribute("hidden")
        div_2.style.backgroundImage = "url()"
        setTimeout(() => {
            RandomPicked()
        }, "1000")
    })

    function entierAleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function Wait(duration){
        let t = Date.now()

        while (Date.now() < t + duration){

        }
    }

    let house_choice = undefined
    function RandomPicked(){
   
        let House_picked = entierAleatoire(1, 3)
        house_choice = House_picked
        console.log(House_picked)


        console.log(dark_rond.textContent)
        if (House_picked == 1){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "15px solid hsl(230, 89%, 65%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(230, 29%, 41%)"
            aff_House_picked.style.width = "134px"
            aff_House_picked.style.height = "134px"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-paper.svg"     
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }else if (House_picked == 2){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "15px solid hsl(39, 89%, 49%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(40, 41%, 35%)"
            aff_House_picked.style.width = "134px"
            aff_House_picked.style.height = "134px"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-scissors.svg"       
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }else if (House_picked == 3){
            let aff_House_picked = document.createElement("button")
            aff_House_picked.id = "aff_House_picked"
            aff_House_picked.style.borderRadius = "100%"
            aff_House_picked.style.border = "15px solid hsl(349, 71%, 52%)"
            aff_House_picked.style.boxShadow = "0px 2px 1px 2px rgb(183, 188, 210) inset, 0px 5px 1px hsl(349, 39%, 33%)"
            aff_House_picked.style.width = "134px"
            aff_House_picked.style.height = "134px"
            aff_House_picked.style.backgroundColor = "white"
            let image_aff = document.createElement("img")
            image_aff.style.width = "50%"
            image_aff.src = "images/icon-rock.svg"     
            aff_House_picked.append(image_aff)
            dark_rond.append(aff_House_picked)
        }

        Result()
    }

    function Result(){
        if (choice == "f"){
            if (house_choice == 1){
                Draw(feuille)
            }else if (house_choice == 2){
                Lose(feuille)
            }else if (house_choice == 3){
                Win(feuille)
            }
        }else if (choice == "c"){
            if (house_choice == 1){
                Win(ciseaux)
            }else if (house_choice == 2){
                Draw(ciseaux)
            }else if (house_choice == 3){
                Lose(ciseaux)
        }
        }else if (choice == "p"){
            if (house_choice == 1){
                Lose(pierre)
            }else if (house_choice == 2){
                Win(pierre)
            }else if (house_choice == 3){
                Draw(pierre)
            }
        }
    }

    let div_draw = document.querySelector("#div_draw")
    let p_draw = document.querySelector("#p_draw")
    let btn_draw = document.querySelector("#btn_draw")

    function Draw(element){
        element.style.left = "8%"
        p1.style.left = "15%"

        dark_rond.style.left = "56%"
        p2.style.left = "57%"

        div_draw.style.transform = "scale(1)"
        div_draw.removeAttribute("hidden")
        p_draw.removeAttribute("hidden")
        btn_draw.removeAttribute("hidden")

        btn_draw.addEventListener("click", () => {
            div_draw.style.transform = "scale(0.1)"
            div_draw.setAttribute("hidden", true)
            p_draw.setAttribute("hidden", true)
            btn_draw.setAttribute("hidden", true)
            Reset(element)
        })
    
    }

    let div_win = document.querySelector("#div_win")
    let p_win = document.querySelector("#p_win")
    let btn_win = document.querySelector("#btn_win")

    function Win(element){
        score += 1
        aff_score.textContent = score

        element.style.left = "8%"
        p1.style.left = "15%"

        dark_rond.style.left = "56%"
        p2.style.left = "57%"

        div_win.style.transform = "scale(1)"
        div_win.removeAttribute("hidden")
        p_win.removeAttribute("hidden")
        btn_win.removeAttribute("hidden")

        btn_win.addEventListener("click", () => {
            div_win.style.transform = "scale(0.1)"
            div_win.setAttribute("hidden", true)
            p_win.setAttribute("hidden", true)
            btn_win.setAttribute("hidden", true)
            Reset(element)
        })
    }

    let div_lose = document.querySelector("#div_lose")
    let p_lose = document.querySelector("#p_lose")
    let btn_lose = document.querySelector("#btn_lose")

    function Lose(element){
        if (score != 0){
            score -= 1
            aff_score.textContent = score
        }
    
        element.style.left = "8%"
        p1.style.left = "15%"

        dark_rond.style.left = "56%"
        p2.style.left = "57%"

        div_lose.style.transform = "scale(1)"
        div_lose.removeAttribute("hidden")
        p_lose.removeAttribute("hidden")
        btn_lose.removeAttribute("hidden")

        btn_lose.addEventListener("click", () => {
            div_lose.style.transform = "scale(0.1)"
            div_lose.setAttribute("hidden", true)
            p_lose.setAttribute("hidden", true)
            btn_lose.setAttribute("hidden", true)
            Reset(element)
        })
    }

    function Reset(element){
        p1.setAttribute("hidden", true)
        p1.style.left = "20%"
        p2.setAttribute("hidden", true)
        p2.style.left = "52%"

        div_2.style.backgroundImage = 'url("images/bg-triangle.svg")'

        element.style.transform = "scale(1)"
        element.style.position = "sticky"
        console.log(element)

        if (element.id == "btn_feuille"){
            element.style.top = "27%"
            element.style.left = "8%"

            ciseaux.removeAttribute("hidden")
            pierre.removeAttribute("hidden")
        }else if (element.id == "btn_ciseaux"){
            element.style.top = "27%"
            element.style.left = "60%"

            feuille.removeAttribute("hidden")
            pierre.removeAttribute("hidden")
        }else if (element.id == "btn_pierre"){
            element.style.top = "52%"
            element.style.left = "32%"

            ciseaux.removeAttribute("hidden")
            feuille.removeAttribute("hidden")
        }

        dark_rond.setAttribute("hidden", true)
        dark_rond.style.left = "53%"
        let supp = document.querySelector("#aff_House_picked")
        supp.remove()
    }

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
}
