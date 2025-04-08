
let marksField = document.querySelector("#marksField");
let subBtn = document.querySelector("#subBtn");



let main_hero_path = document.querySelector("#main_hero_path");
let main_hero_button = document.querySelector("#main_hero_button");
let successContent = document.querySelector("#successContent");
let shapePath1 = document.querySelector("#shapePath1");
let shapePath2 = document.querySelector("#shapePath2");
let shapePath3 = document.querySelector("#shapePath3");


subBtn.addEventListener("click", function(){
    if(Number(marksField.value) > 1100){
        main_hero_path.style.transform = ("translateX(0)");
        shapePath1.style.transform = ("translateX(100%)");
        shapePath2.style.transform = ("translateX(100%)");
        shapePath3.style.transform = ("translateX(100%)");
        successContent.innerHTML = "You entered wrong numbers";
        main_hero_button.style.display = ("none");
    } else if(Number(marksField.value) >= 950){
        main_hero_path.style.transform = ("translateX(0)");
        shapePath1.style.transform = ("translateX(0)");
        shapePath2.style.transform = ("translateX(0)");
        shapePath3.style.transform = ("translateX(0)");
        successContent.innerHTML = "Welcome";
        main_hero_button.style.display = ("flex");
    } else {
        main_hero_path.style.transform = ("translateX(0)");
        shapePath1.style.transform = ("translateX(100%)");
        shapePath2.style.transform = ("translateX(100%)");
        shapePath3.style.transform = ("translateX(100%)");
        successContent.innerHTML = "Numbers are less than minimum requirement";
        main_hero_button.style.display = ("none");
    }
});







    

