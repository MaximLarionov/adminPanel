"use strict";




function addEventCansel(){
    const btn_cansel = document.querySelectorAll(".btn-cansel");


    for (let i = 0; i < btn_cansel.length; i++) {
        btn_cansel[i].addEventListener("click", (event)=>{

            const index = event.target.dataset.num;

            const td_message = document.querySelector(".message" + index);
            const td_day = document.querySelector(".days" + index);
            const td_move = document.querySelector(".move" + index);

            const buttons = td_move.children;

            for (let j = 0; j < buttons.length; j++) {
                if(buttons[j].style.display === "none"){
                    buttons[j].style.display = "";
                }else{
                    buttons[j].style.display = "none";
                }
            }

            td_day.textContent = td_day.dataset.days;
            td_message.textContent = td_message.dataset.message;

        });
    }

}



export {
    addEventCansel
}