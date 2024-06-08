// let radio = document.querySelector(".nav-manual")

// const userNav = document.getElementById("user-nav")

// let cont = 1
// let navAuto;

const $slideBox = document.querySelectorAll(".slide-box")
const $descriptionProjects = document.querySelectorAll(".slide-box .description-Projects")

function handleBox() {
    $(".slide-box").each(function(index) {
        $(this).on("mouseover", function() {
            $(".slide-box .description-Projects").eq(index).css("display", "block");
        });
        $(this).on("mouseout", function() {
            $(".slide-box .description-Projects").eq(index).css("display", "none");
        });
    });
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









