const board = [
  { name: "Todo", title: "grey" },
  { name: "In process", title: "yellow" },
  { name: "Done", title: "green" },
  { name: "Blocked", title: "red" },
];
const boards = document.getElementById("boardss");

board.forEach((item) => {
  boards.innerHTML += `<div class="board">
            <div class="board-header"><div id="color" style="background-color:${item.title} ;" ></div>${item.name}</div>
            <div class="cards"></div>
            <button class="add-btn">
              <img id="plus" src="plus-svgrepo-com.svg" alt="" />
              <div >Add card</div>
            </button>
          </div>`;
});

const addBtn = document.querySelectorAll(".add-btn");
const taskbox = document.querySelector(".taskbox");
const away = document.getElementById("away");
const taskbtn = document.querySelector("taskbtn");
const title = document.getElementById("title");
const Description = document.getElementById("Description");

addBtn.forEach((el) => {
  el.addEventListener("click", (event) => {
    taskbox.style.display = "flex";
  });
});
away.addEventListener("click", (event) => {
  taskbox.style.display = "none";
});

taskbtn.addEventListener("click", () => {
  ``;
});
