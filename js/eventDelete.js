"use strict";



function addEventDelete(){
    const btn_delete = document.querySelectorAll(".btn-delete");


    for (let i = 0; i < btn_delete.length; i++) {
        btn_delete[i].addEventListener("click", (event)=>{

            const name = document.querySelector(`.name${event.target.dataset.num}`).textContent;
            fetch(`../php/get_command.php?cmd=delete&name-channel=${name}`)
                .then(() => window.location.href = "../php/do_command.php");

        });
    }
}



export {
    addEventDelete
}