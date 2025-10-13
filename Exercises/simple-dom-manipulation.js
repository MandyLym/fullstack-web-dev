const btn = document.getElementById("clickMe");
btn.addEventListener("click", function () {
  let title = document.getElementById("title");
  title.textContent = "You clicked me!";
  title.style.color = "red";
  title.style.fontSize = "40px";
});

const paragraph = document.getElementById("paragraph");
paragraph.onmouseover = () => {
    paragraph.style.color = "pink";
}

paragraph.onclick = () => {
    paragraph.hidden = true;
}