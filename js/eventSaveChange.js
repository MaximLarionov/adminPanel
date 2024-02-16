"use strict";

function addEventSaveChange(){
    const btn_save_change = document.querySelectorAll(".btn-save-change");


    for (let i = 0; i < btn_save_change.length; i++) {
        btn_save_change[i].addEventListener("click", (event)=>{
            const index = event.target.dataset.num;

            const td_message = document.querySelector(".message" + index);




            const message = td_message.children[0].value;


            let days = "";

            for (let j = 0; j < 7; j++) {
                if(document.querySelector(`.cb${j+1}_${index}`).checked){
                    if(days === ""){
                        days += `${j}`;
                    }else{
                        days += `, ${j}`
                    }
                }
            }

            const name = document.querySelector(`.name${event.target.dataset.num}`).textContent;

            fetch(`../php/get_command.php?cmd=update&name-channel=${name}&days=${days}&message=${message}`)
                .then(() => window.location.href = "../php/do_command.php")

        });
    }
}


export {
    addEventSaveChange
}