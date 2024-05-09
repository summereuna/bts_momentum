const images = [
  "answer_l_1.jpeg",
  "answer_l_2.jpeg",
  "answer_l_3.jpeg",
  "answer_l_4.jpeg",
  "answer_l_5.jpeg",
  "answer_l_6.jpeg",
  "answer_l_7.jpeg",
  "butter_remix_sweeter.jpeg",
  "v_L_1.jpeg",
  "v_L_2.jpeg",
  "v_L_3.jpeg",
  "v_L_4.jpeg",
  "v_L_5.jpeg",
  "v_L_6.jpeg",
  "v_L_7.jpeg",
];
const bgChangeBtn = document.querySelector("#bg-change");
const bgImage = document.createElement("img");

function handleBgChange() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${chosenImage}`;
  bgImage.classList.add("bgImage");
  bgImage.alt = "background image";
  document.body.appendChild(bgImage);
}

bgChangeBtn.addEventListener("click", handleBgChange);
window.addEventListener("DOMContentLoaded", handleBgChange);
