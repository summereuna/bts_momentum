const dDay = document.querySelector("#dDay");
const dDayForm = document.querySelector("#dDay-form");
const dDaySet = dDayForm.querySelector("input");
const dDaySaveBtn = dDayForm.querySelector("button");
const dDayCount = dDay.querySelector("span");

const HIDDEN_CLASSNAME2 = "hidden";

function saveDDay(event){
    event.preventDefault();
    dDayForm.classList.add(HIDDEN_CLASSNAME2);
    dDayCount.classList.remove(HIDDEN_CLASSNAME2);
    
    const comeback = new Date(dDaySet.valueAsDate);
    const now = new Date();
    
    const untilDDay = comeback.getTime() - now.getTime();
    const days = Math.floor(untilDDay / (1000*60*60*24));
    
    dDayCount.innerText = `${days}일 남았어요!`;

    getDDay();
    setInterval(getDDay, 1000);
}


dDayForm.addEventListener("submit", saveDDay);