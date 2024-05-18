// let radio = document.querySelector(".nav-manual")

// const userNav = document.getElementById("user-nav")

// let cont = 1
// let navAuto;

const slideBox = document.querySelectorAll(".slide-box")
const decritionProjects = document.querySelectorAll(".slide-box .description-Projects")

console.log(slideBox)

function handleBox() {
    for (let i = 0; i < slideBox.length; i++) {
        slideBox[i].addEventListener("mouseover",() => {
            decritionProjects[i].style.display = "block"
            
        })   
        slideBox[i].addEventListener("mouseout",() => {
            decritionProjects[i].style.display = "none"
        })   
    }
}

handleBox()





// document.getElementById("project1").checked = true;

// //funcionalidade que controla o check auto e manual
// function navChoice() {
//     userNav.addEventListener("change",() =>{
//         if(userNav.checked) {
//             return navAuto = setInterval(nextImg,5000);
//         }
//             return clearInterval(navAuto);
//     })
// }



// function nextImg() {
//     cont++
//     const BreakingAction = document.body.scrollWidth

//     if(BreakingAction <= 900) {
//         return
//     }
    
//     if(cont > 4) {
//         cont = 1
//     }
//     document.getElementById(`project${cont}`).checked = true
// }


// navChoice();









