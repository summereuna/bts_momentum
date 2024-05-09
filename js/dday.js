const dDay = document.querySelector("#dDay");

const dDayForm = document.querySelector("#dDay-form");
const dDayInput = dDayForm.querySelector("input");
const dDaySaveBtn = dDayForm.querySelector("button");

const dDayTextBox = document.querySelector("#dDay-date");
const dDayCountText = dDayTextBox.querySelector("span");
const dDayRemoveBtn = dDayTextBox.querySelector("button");

const HIDDEN_CLASSNAME_2 = "hidden";
const DDAY_KEY = "comebackDDay";

function onSaveDDay(event) {
  event.preventDefault();
  dDayForm.classList.add(HIDDEN_CLASSNAME_2);

  const comeback = new Date(dDayInput.valueAsDate);
  const now = new Date();
  const newDDay = comeback.getDate() - now.getDate();

  localStorage.setItem(DDAY_KEY, newDDay);

  paintDDay(newDDay);
}

function removeDDay(event) {
  console.log(event);
  localStorage.removeItem(DDAY_KEY);
  dDayTextBox.classList.add(HIDDEN_CLASSNAME_2);
  dDayForm.classList.remove(HIDDEN_CLASSNAME_2);
}

function paintDDay(newDDay) {
  if (newDDay < 0) {
    localStorage.removeItem(DDAY_KEY);
    alert(
      "이전 날짜를 디데이로 설정할 수 없습니다. 디데이를 새로 설정해 주세요."
    );
    dDayForm.classList.remove(HIDDEN_CLASSNAME_2);

    return;
  }

  dDayCountText.innerText = `${
    Number(newDDay) === 0 ? "오늘이에요!" : `${newDDay}일 남았어요!`
  }`;

  dDayTextBox.classList.remove(HIDDEN_CLASSNAME_2);

  dDayRemoveBtn.addEventListener("click", removeDDay);
}

const savedDDay = localStorage.getItem(DDAY_KEY);

if (savedDDay === null) {
  dDayForm.classList.remove(HIDDEN_CLASSNAME_2);
  dDayForm.addEventListener("submit", onSaveDDay);
} else {
  paintDDay(savedDDay);
}
