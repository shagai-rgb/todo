const board = [
  { name: "Todo", title: "grey", class: "todoClass", id: "todo" },
  { name: "In process", title: "yellow", class: "processClass", id: "process" },
  { name: "Done", title: "green", class: "doneClass", id: "done" },
  { name: "Blocked", title: "red", class: "blockedClass", id: "blocked" },
];
const boards = document.getElementById("boardss");

board.forEach((item) => {
  boards.innerHTML += `<div class="board">
            <div class="board-header"><div id="color" style="background-color:${item.title} ;" ></div>${item.name}</div>
            <div class="cards ${item.class}" id="${item.id}">
            
            </div>
            <button class="add-btn">
              <img id="plus" src="plus-svgrepo-com.svg" alt="" />
              <div >Add card</div>
            </button>
          </div>`;
});

const cards = document.querySelectorAll("cards");
const todoContainer = document.getElementById("todo");
const processContainer = document.getElementById("process");
const doneContainer = document.getElementById("done");
const blockedContainer = document.getElementById("blocked");
const addBtn = document.querySelectorAll(".add-btn");
const taskbox = document.querySelector(".taskbox");
const away = document.getElementById("away");
const taskbtn = document.getElementById("taskbtn");
const title = document.getElementById("title");
const Description = document.getElementById("Description");
const helper1 = document.querySelector(".helper-text1");
const helper2 = document.querySelector(".helper-text2");
const statusSelect = document.getElementById("Status");
const prioritySelect = document.getElementById("Priority");

const values = {
  title: "",
  desc: "",
  status: "",
  priority: "",
  id: "",
};

const createNewTask = () => {
  return ` <div class="card" draggable="true" id=${values.id}>
                <div class="done">
                  <i class="fa fa-check icon" aria-hidden="true"></i>
                </div>
                <div class="details">
                <h4>${values.title}</h4>
                <p>${values.desc}</p>
                  <div class="priority">${values.priority}</div>
                </div>
                <div class="actions">
                  <button class="done" onclick="remove(event)">
                    <i class="fa-solid fa-xmark icon" aria-hidden="true" disabled ></i>
                  </button>
                  <button class="done" >
                    <i
                      class="fa-solid fa-pen-to-square icon"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>`;
};
const remove = (event) => {
  const deleteCard = document.getElementById(
    event.target.parentNode.parentNode.id
  );
  const parent = document.getElementById(deleteCard.parentNode.id);
  parent.removeChild(deleteCard);
};

addBtn.forEach((el) => {
  el.addEventListener("click", (event) => {
    taskbox.style.display = "flex";
  });
});
away.addEventListener("click", (event) => {
  taskbox.style.display = "none";
  helper1.style.display = "none";
  helper2.style.display = "none";
});

taskbtn.addEventListener("click", (event) => {
  values.title = title.value;
  values.desc = Description.value;
  values.status = statusSelect.value;
  values.priority = prioritySelect.value;

  if (title.value.length !== 0 && Description.value.length !== 0) {
    if (statusSelect.value === "InProgress") {
      console.log(cards);
      let uid = 123;
      values.id = uid;
      processContainer.innerHTML += createNewTask();
    } else if (statusSelect.value === "Done") {
      let uid = 1;
      values.id = uid;
      doneContainer.innerHTML += createNewTask();
    } else if (statusSelect.value === "Todo") {
      let uid = 1;
      values.id = uid;
      todoContainer.innerHTML += createNewTask();
    } else if (statusSelect.value === "Blocked") {
      let uid = 1;
      values.id = uid;
      blockedContainer.innerHTML += createNewTask();
    }
    taskbox.style.display = "none";
    title.value = "";
    Description.value = "";
    statusSelect.value = "Todo";
    prioritySelect.value = "Low";
    helper1.style.display = "none";
    helper2.style.display = "none";
  } else {
    helper1.style.display = "block";
    helper2.style.display = "block";
  }
});
