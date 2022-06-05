const downButton = document.querySelector("#lower");
const upButton = document.querySelector("#add");
const count = document.querySelector("#count");

downButton.onclick = () => {
  count.textContent--;
  if (count.textContent < 0) {
    count.style.color = "red";
  } else if (count.textContent == 0) {
    count.style.color = "black";
  }
};
upButton.onclick = () => {
  count.textContent++;
  if (count.textContent > 0) {
    count.style.color = "green";
  } else if (count.textContent == 0) {
    count.style.color = "black";
  }
};
