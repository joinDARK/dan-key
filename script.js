modalTrigger = document.getElementById("modalTrigger")
const modalBackground = document.getElementsByClassName("modalBackground")[0]
const modalClose = document.getElementsByClassName("modalClose")[0]
const modalActive = document.getElementsByClassName("modalActive")[0]

const windowInnerWidth = document.documentElement.clientWidth
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)
const bodyElementHTML = document.getElementsByTagName("body")[0]

menu = document.querySelectorAll('.menu')

person = document.querySelectorAll('.person')
const modalPersonHeader = document.getElementById('modalWindow-personHeader')
const modalMenu = document.getElementById('modalWindow-menu')
const modalMenuBtn = document.querySelectorAll('.modalMenu')

let bodyMargin = () => bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";

bodyMargin();

modalTrigger.onclick = function () { //Добавляет модальное окно
    modalBackground.style.display = "block";
    modalPersonHeader.style.display = "flex";
    modalMenu.style.display = "none";

    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
}

modalClose.addEventListener("click", function () { //Убирает модальное окно при нажатии на крестик
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

modalBackground.addEventListener("click", function (event) { //Убирает модальное окно при нажатии на задний фон
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});

person.forEach((elem) => {
    elem.addEventListener('change', () => {
        document.getElementById("personName").textContent = document.getElementById("perName").value
        document.getElementById("personSpecies").textContent = document.getElementById("perSpecies").value
        document.getElementById("personClass").textContent = document.getElementById("perClass").value
        document.getElementById("personHealth").value = document.getElementById("perHealth").value
        document.getElementById("personArmor").value = document.getElementById("perArmor").value
        document.getElementById("personMage").value = document.getElementById("perMage").value
        document.getElementById("personLevel").value = document.getElementById("perLevel").value
    })
})

menu.forEach(function(elem) {
    elem.addEventListener("click", function() {
        modalBackground.style.display = "block";
        modalPersonHeader.style.display = "none";
        modalMenu.style.display = "flex";


        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    
        modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
    });
});

modalMenuBtn.forEach(function(elem) {
    elem.addEventListener("click", function() {
        console.log(elem)
        switch (elem) {
            case document.getElementById("modalWindow_menu-stats"):
                modalBackground.style.display = "none";
                document.getElementById("char-stats").style.display = "block";
                document.getElementById("char-skills").style.display = "none";
                document.getElementById("char-inventory").style.display = "none";
                document.getElementById("char-relationships").style.display = "none";
            break;

            case document.getElementById("modalWindow_menu-skills"):
                modalBackground.style.display = "none";
                document.getElementById("char-stats").style.display = "none";
                document.getElementById("char-skills").style.display = "block";
                document.getElementById("char-inventory").style.display = "none";
                document.getElementById("char-relationships").style.display = "none";
            break;

            case document.getElementById("modalWindow_menu-inventory"):
                modalBackground.style.display = "none";
                document.getElementById("char-stats").style.display = "none";
                document.getElementById("char-skills").style.display = "none";
                document.getElementById("char-inventory").style.display = "block";
                document.getElementById("char-relationships").style.display = "none";
            break;

            case document.getElementById("modalWindow_menu-relationships"):
                modalBackground.style.display = "none";
                document.getElementById("char-stats").style.display = "none";
                document.getElementById("char-skills").style.display = "none";
                document.getElementById("char-inventory").style.display = "none";
                document.getElementById("char-relationships").style.display = "block";
            break;

            default:
                modalBackground.style.display = "none";
        }
    });
});