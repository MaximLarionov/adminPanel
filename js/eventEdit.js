"use strict";


function addEventEdit(){
    const btn_edit = document.querySelectorAll(".btn-edit");


    for (let i = 0; i < btn_edit.length; i++) {
        btn_edit[i].addEventListener("click", (event)=>{


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



            const textarea = `<textarea class="message-textarea">${td_message.textContent}</textarea>`;
            td_message.innerHTML = textarea;



            let days = td_day.textContent;

            const ch_1 = days.indexOf("Понедельник") !== -1 ? "checked" : "";
            const ch_2 = days.indexOf("Вторник") !== -1 ? "checked" : "";
            const ch_3 = days.indexOf("Среда") !== -1 ? "checked" : "";
            const ch_4 = days.indexOf("Четверг") !== -1 ? "checked" : "";
            const ch_5 = days.indexOf("Пятница") !== -1 ? "checked" : "";
            const ch_6 = days.indexOf("Суббота") !== -1 ? "checked" : "";
            const ch_7 = days.indexOf("Воскресенье") !== -1 ? "checked" : "";


            const checkBoxes = `
            <input type="checkbox" id="cb1_${index}" class="input-checkbox cb1_${index}" ${ch_1}><label for="cb1_${index}">Понедельник</label><br>
            <input type="checkbox" id="cb2_${index}" class="input-checkbox cb2_${index}" ${ch_2}><label for="cb2_${index}">Вторник</label><br>
            <input type="checkbox" id="cb3_${index}" class="input-checkbox cb3_${index}" ${ch_3}><label for="cb3_${index}">Среда</label><br>
            <input type="checkbox" id="cb4_${index}" class="input-checkbox cb4_${index}" ${ch_4}><label for="cb4_${index}">Четверг</label><br>
            <input type="checkbox" id="cb5_${index}" class="input-checkbox cb5_${index}" ${ch_5}><label for="cb5_${index}">Пятница</label><br>
            <input type="checkbox" id="cb6_${index}" class="input-checkbox cb6_${index}" ${ch_6}><label for="cb6_${index}">Суббота</label><br>
            <input type="checkbox" id="cb7_${index}" class="input-checkbox cb7_${index}" ${ch_7}><label for="cb7_${index}">Воскресенье</label><br>
            `;

            td_day.innerHTML = checkBoxes;





        });
    }
}

export {
    addEventEdit
}