console.log("scope=100");
let count = 0;

function sas() {
    if (count == 0) {
        let burgerMeny = document.querySelector('.nav');
        let vertMeny = document.querySelector('.list_header');
        let burgMeny = document.querySelector('.nav_burger');
        burgerMeny.style.display = 'flex';
        burgMeny.style.transform = ' rotate(-10deg)'
        count = 1
    } else if (count == 1) {
        let burgMeny = document.querySelector('.nav_burger');
        let burgerMeny = document.querySelector('.nav');
        let vertMeny = document.querySelector('.list_header');
        burgerMeny.style.display = 'none';
        burgMeny.style.transform = ' rotate(0deg)'
        
        count = 0
    }
    
}









let count1 = 0
var countBtn = 0

function clickGardens() {
    let btnGardens = document.querySelectorAll('.service_item');
    let btn1 = document.querySelector('.link_gardens')
    let style = window.getComputedStyle(btn1)
    let btn2 = document.querySelector('.link_lawn')
    let style2 = window.getComputedStyle(btn2)
    let btn3 = document.querySelector('.link_planting')
    let style3 = window.getComputedStyle(btn3)
    if (style2.border == '1px solid rgb(224, 103, 51)' && style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn1.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[1].style.filter = 'blur(2px)';
            btnGardens[2].style.filter = 'blur(2px)';
            btnGardens[3].style.filter = 'blur(2px)';
            btnGardens[5].style.filter = 'blur(2px)';
        } else if (style.border == '5px solid rgb(224, 103, 51)') {
            btn1.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[1].style.filter = 'none';
            btnGardens[2].style.filter = 'none';
            btnGardens[3].style.filter = 'none';
            btnGardens[5].style.filter = 'none';
        }
    } else if (style2.border == '1px solid rgb(224, 103, 51)' || style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn1.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[0].style.filter = 'none';
            btnGardens[4].style.filter = 'none';
        } else if (style.border == '5px solid rgb(224, 103, 51)') {
            btn1.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[0].style.filter = 'blur(2px)';
            btnGardens[4].style.filter = 'blur(2px)';
        }
    }
}

function clickLawn() {
    let btnGardens = document.querySelectorAll('.service_item');
    let btn2 = document.querySelector('.link_lawn')
    let style = window.getComputedStyle(btn2)
    let btn1 = document.querySelector('.link_gardens')
    let style2 = window.getComputedStyle(btn1)
    let btn3 = document.querySelector('.link_planting')
    let style3 = window.getComputedStyle(btn3)
    console.log(style.border)
    if (style2.border == '1px solid rgb(224, 103, 51)' && style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn2.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[0].style.filter = 'blur(2px)';
            btnGardens[1].style.filter = 'blur(2px)';
            btnGardens[3].style.filter = 'blur(2px)';
            btnGardens[4].style.filter = 'blur(2px)';
            btnGardens[5].style.filter = 'blur(2px)';
        } else if ('5px solid rgb(224, 103, 51)') {
            btn2.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[0].style.filter = 'none';
            btnGardens[1].style.filter = 'none';
            btnGardens[3].style.filter = 'none';
            btnGardens[4].style.filter = 'none';
            btnGardens[5].style.filter = 'none';
        }
    } else if (style2.border == '1px solid rgb(224, 103, 51)' || style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn2.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[2].style.filter = 'none';
        } else if (style.border == '5px solid rgb(224, 103, 51)') {
            btn2.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[2].style.filter = 'blur(2px)';
        }
    }
}

function clickPlanting() {
    let btnGardens = document.querySelectorAll('.service_item');
    let btn3 = document.querySelector('.link_planting')
    let style = window.getComputedStyle(btn3)
    let btn1 = document.querySelector('.link_gardens')
    let style2 = window.getComputedStyle(btn1)
    let btn2 = document.querySelector('.link_lawn')
    let style3 = window.getComputedStyle(btn2)
    console.log(style.border)
    if (style2.border == '1px solid rgb(224, 103, 51)' && style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn3.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[0].style.filter = 'blur(2px)';
            btnGardens[2].style.filter = 'blur(2px)';
            btnGardens[4].style.filter = 'blur(2px)';
        } else if ('5px solid rgb(224, 103, 51)') {
            btn3.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[0].style.filter = 'none';
            btnGardens[2].style.filter = 'none';
            btnGardens[4].style.filter = 'none';
        }
    } else if (style2.border == '1px solid rgb(224, 103, 51)' || style3.border == '1px solid rgb(224, 103, 51)') {
        if (style.border == '1px solid rgb(224, 103, 51)') {
            btn3.style.border = '5px solid rgb(224, 103, 51)'
            btnGardens[1].style.filter = 'none';
            btnGardens[3].style.filter = 'none';
            btnGardens[5].style.filter = 'none';
        } else if (style.border == '5px solid rgb(224, 103, 51)') {
            btn3.style.border = '1px solid rgb(224, 103, 51)';
            btnGardens[1].style.filter = 'blur(2px)';
            btnGardens[3].style.filter = 'blur(2px)';
            btnGardens[5].style.filter = 'blur(2px)';
        }
    }

}


function openForever1() {
    function openForever1() {
        let btnBasics = document.querySelector(".btnPrise1")
        let element = document.querySelector(".price_box1")
        btnBasics.style.height = "150px"
        element.style.display = "block"
        btnBasics.style.background = "#D6E7D2"
    }
}


function btnBasics() {
    let btnBasics = document.querySelector(".btnPrise1")
    let border = document.querySelector(".btnPrise1 > .price_h4")
    let border2 = document.querySelector(".btnPrise2 > .price_h4")
    let border3 = document.querySelector(".btnPrise3 > .price_h4")
    let btnBasics2 = document.querySelector(".btnPrise2")
    let btnBasics3 = document.querySelector(".btnPrise3")
    let element = document.querySelector(".price_box1")
    let element2 = document.querySelector(".price_box2")
    let element3 = document.querySelector(".price_box3")
    let style = window.getComputedStyle(element)
    let style2 = window.getComputedStyle(element2)
    let style3 = window.getComputedStyle(element3)
    let arrow = document.querySelector('.h4_arrow1')
    let arrow2 = document.querySelector('.h4_arrow2')
    let arrow3 = document.querySelector('.h4_arrow3')
    
    if (style2.display == "none" && style3.display == "none") {
        if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
            border.style.borderBottom = "0.5px solid #AEA1A1"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
            border.style.borderBottom = "none"
        }
} else {
            if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
            element2.style.display = "none"
            element3.style.display = "none"
            btnBasics2.style.height = "50px"
            btnBasics3.style.height = "50px"
            btnBasics2.style.background = "#EDF2EC"
            btnBasics3.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(180deg)"
            border.style.borderBottom = "0.5px solid #AEA1A1"
            border2.style.border = "none"
            border3.style.border = "none"
            arrow2.style.transform = "rotate(0deg)"
            arrow2.style.filter = "contrast(100%)"
            arrow3.style.transform = "rotate(0deg)"
            arrow3.style.filter = "contrast(100%)"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(0deg)"
            border.style.borderBottom = "none"
            element2.style.border = "none"
            element3.style.border = "none"
            border2.style.border = "none"
            border3.style.border = "none"
        }
}
    
}

function btnStandart() {
    let border2 = document.querySelector(".btnPrise1 > .price_h4")
    let border = document.querySelector(".btnPrise2 > .price_h4")
    let border3 = document.querySelector(".btnPrise3 > .price_h4")
    let btnBasics2 = document.querySelector(".btnPrise1")
    let btnBasics = document.querySelector(".btnPrise2")
    let btnBasics3 = document.querySelector(".btnPrise3")
    let element2 = document.querySelector(".price_box1")
    let element = document.querySelector(".price_box2")
    let element3 = document.querySelector(".price_box3")
    let style2 = window.getComputedStyle(element2)
    let style = window.getComputedStyle(element)
    let style3 = window.getComputedStyle(element3)
    let arrow2 = document.querySelector('.h4_arrow1')
    let arrow = document.querySelector('.h4_arrow2')
    let arrow3 = document.querySelector('.h4_arrow3')
    
    if (style2.display == "none" && style3.display == "none") {
        if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
            border.style.borderBottom = "0.5px solid #AEA1A1"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
            border.style.borderBottom = "none"
        }
} else {
            if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
            element2.style.display = "none"
            element3.style.display = "none"
            btnBasics2.style.height = "50px"
            btnBasics3.style.height = "50px"
            btnBasics2.style.background = "#EDF2EC"
            btnBasics3.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(180deg)"
            border.style.borderBottom = "0.5px solid #AEA1A1"
            border2.style.border = "none"
            border3.style.border = "none"
            arrow2.style.transform = "rotate(0deg)"
            arrow2.style.filter = "contrast(100%)"
            arrow3.style.transform = "rotate(0deg)"
            arrow3.style.filter = "contrast(100%)"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(0deg)"
            border.style.borderBottom = "none"
            border2.style.border = "none"
            border3.style.border = "none"
        }
}
    
}

function btnPro() {
    let border2 = document.querySelector(".btnPrise1 > .price_h4")
    let border3 = document.querySelector(".btnPrise2 > .price_h4")
    let border = document.querySelector(".btnPrise3 > .price_h4")
    let btnBasics3 = document.querySelector(".btnPrise1")
    let btnBasics2 = document.querySelector(".btnPrise2")
    let btnBasics = document.querySelector(".btnPrise3")
    let element2 = document.querySelector(".price_box1")
    let element3 = document.querySelector(".price_box2")
    let element = document.querySelector(".price_box3")
    let style2 = window.getComputedStyle(element3)
    let style3 = window.getComputedStyle(element2)
    let style = window.getComputedStyle(element)
    let arrow2 = document.querySelector('.h4_arrow1')
    let arrow3 = document.querySelector('.h4_arrow2')
    let arrow = document.querySelector('.h4_arrow3')
    
    if (style2.display == "none" && style3.display == "none") {
        if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
        }
} else {
            if (style.display == "none") {
            btnBasics.style.height = "150px"
            element.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
            arrow.style.filter = "contrast(70%)"
            btnBasics.style.background = "#D6E7D2"
            element2.style.display = "none"
            element3.style.display = "none"
            btnBasics2.style.height = "50px"
            btnBasics3.style.height = "50px"
            btnBasics2.style.background = "#EDF2EC"
            btnBasics3.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(180deg)"
            border2.style.border = "none"
            border3.style.border = "none"
            arrow2.style.transform = "rotate(0deg)"
            arrow2.style.filter = "contrast(100%)"
            arrow3.style.transform = "rotate(0deg)"
            arrow3.style.filter = "contrast(100%)"
        } else if (style.display == "block") {
            btnBasics.style.height = "50px"
            element.style.display = "none"
            arrow.style.transform = "rotate(0deg)"
            arrow.style.filter = "contrast(100%)"
            btnBasics.style.background = "#EDF2EC"
            arrow.style.transform = "rotate(0deg)"
            border2.style.border = "none"
            border3.style.border = "none"
        }
}
    
}

function openCity() {
    let btnContact = document.querySelector(".button_contact")
    let cityOpen = document.querySelector(".city_open")
    let style = window.getComputedStyle(cityOpen)
    let arrow = document.querySelector('.arrow_contact')
    let boxCity = document.querySelector(".CanandaiguaBOX")
    let boxCity2 = document.querySelector(".NYBOX")
    let boxCity3 = document.querySelector(".YonkersBOX")
    let boxCity4 = document.querySelector(".SherrillBOX")
    if (style.display == "none") {
        cityOpen.style.display = "flex"
        btnContact.style.height = "200px"
        arrow.style.filter = "contrast(70%)"
        arrow.style.transform = "rotate(180deg)"
        boxCity.style.display = "none"
        boxCity2.style.display = "none"
        boxCity3.style.display = "none"
        boxCity4.style.display = "none"
    } else {
        cityOpen.style.display = "none"
        btnContact.style.height = "100%"
        arrow.style.filter = "contrast(100%)"
        arrow.style.transform = "rotate(0deg)"
    }
    
}

function cityClick1() {
    let city = document.querySelector(".Canandaigua")
    let city2 = document.querySelector(".NY")
    let city3 = document.querySelector(".Yonkers")
    let city4 = document.querySelector(".Sherrill")
    let boxCity = document.querySelector(".CanandaiguaBOX")


    let btnContact = document.querySelector(".button_contact")
    let cityOpen = document.querySelector(".city_open")
    let arrow = document.querySelector('.arrow_contact')

    city.style.borderBottom = "0.5px solid #717171"
    cityOpen.style.display = "none"
    city.style.order = "1"
    city2.style.order = "2"
    city3.style.order = "3"
    city4.style.order = "4"
    city2.style.border = "none"
    city3.style.border = "none"
    city4.style.border = "none"
    btnContact.style.height = "100%"
    arrow.style.filter = "contrast(100%)"
    arrow.style.transform = "rotate(0deg)"
    boxCity.style.display = "block"
    
}

function cityClick2() {
    let city2 = document.querySelector(".Canandaigua")
    let city = document.querySelector(".NY")
    let city3 = document.querySelector(".Yonkers")
    let city4 = document.querySelector(".Sherrill")
    let boxCity = document.querySelector(".NYBOX")


    let btnContact = document.querySelector(".button_contact")
    let cityOpen = document.querySelector(".city_open")
    let arrow = document.querySelector('.arrow_contact')

    city.style.borderBottom = "0.5px solid #717171"
    cityOpen.style.display = "none"
    city.style.order = "1"
    city2.style.order = "2"
    city3.style.order = "3"
    city4.style.order = "4"
    city2.style.border = "none"
    city3.style.border = "none"
    city4.style.border = "none"
    btnContact.style.height = "100%"
    arrow.style.filter = "contrast(100%)"
    arrow.style.transform = "rotate(0deg)"
    boxCity.style.display = "block"
    
}

function cityClick3() {
    let city2 = document.querySelector(".Canandaigua")
    let city3 = document.querySelector(".NY")
    let city = document.querySelector(".Yonkers")
    let city4 = document.querySelector(".Sherrill")
    let boxCity = document.querySelector(".YonkersBOX")


    let btnContact = document.querySelector(".button_contact")
    let cityOpen = document.querySelector(".city_open")
    let arrow = document.querySelector('.arrow_contact')

    city.style.borderBottom = "0.5px solid #717171"
    cityOpen.style.display = "none"
    city.style.order = "1"
    city2.style.order = "2"
    city3.style.order = "3"
    city4.style.order = "4"
    city2.style.border = "none"
    city3.style.border = "none"
    city4.style.border = "none"
    btnContact.style.height = "100%"
    arrow.style.filter = "contrast(100%)"
    arrow.style.transform = "rotate(0deg)"
    boxCity.style.display = "block"
    
} 

function cityClick4() {
    let city2 = document.querySelector(".Canandaigua")
    let city3 = document.querySelector(".NY")
    let city4 = document.querySelector(".Yonkers")
    let city = document.querySelector(".Sherrill")
    let boxCity = document.querySelector(".SherrillBOX")


    let btnContact = document.querySelector(".button_contact")
    let cityOpen = document.querySelector(".city_open")
    let arrow = document.querySelector('.arrow_contact')

    city.style.borderBottom = "0.5px solid #717171"
    cityOpen.style.display = "none"
    city.style.order = "1"
    city2.style.order = "2"
    city3.style.order = "3"
    city4.style.order = "4"
    city2.style.border = "none"
    city3.style.border = "none"
    city4.style.border = "none"
    btnContact.style.height = "100%"
    arrow.style.filter = "contrast(100%)"
    arrow.style.transform = "rotate(0deg)"
    boxCity.style.display = "block"
    
} 




    
    
    
    



