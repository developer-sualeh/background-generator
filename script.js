const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const copyDiv = document.querySelector(".para");
const clipboard1 = document.querySelector(".clipboard");
const copiedText = document.getElementById("copyText");
//console.log(clipboard1);
let rgb1 = "#9c444e";
let rgb2 = "#6c8fc8";
const hexValues = () => {
  let myHexNum = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + myHexNum[Math.floor(Math.random() * 16)];
  }
  return color;
};

const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  btn1.innerText = rgb1;
  btn1.style.backgroundColor = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  btn2.innerText = rgb2;
  btn2.style.backgroundColor = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

copiedText.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
  // alert("your text is copied ");
  // clipboard1.classList.add("clipboard");
  clipboard1.style.visibility = "visible";
  setTimeout(() => {
    // clipboard1.classList.remove("clipboard ");
    clipboard1.style.visibility = "hidden";
  }, 2000);
});

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
