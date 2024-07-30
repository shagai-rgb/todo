const board = [
  { name: "Todo", title: "grey", class: "todoClass", id: "todo" },
  { name: "In process", title: "yellow", class: "processClass", id: "process" },
  { name: "Done", title: "green", class: "doneClass", id: "done" },
  { name: "Blocked", title: "red", class: "blockedClass", id: "blocked" },
];
const boards = document.getElementById("boardss");

board.forEach((item) => {
  boards.innerHTML += `<div class="board" id="${item.class}">
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

const boardDrop = document.querySelector(".board");
let uid = 1;
let cid = 1000;

const values = {
  title: "",
  desc: "",
  status: "",
  priority: "",
  id: "",
};

const createNewTask = (check, checkId) => {
  return ` <div class="card" draggable="true" id=${values.id} ondragstart="dragDrop1(event)">
                <div id=${checkId}>
                <button class=${check} onclick="move(event)">
                  <i class="fa fa-check icon" aria-hidden="true"></i>
                </button>
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
    event.currentTarget.parentNode.parentNode.id
  );
  const parent = document.getElementById(deleteCard.parentNode.id);
  parent.removeChild(deleteCard);
};

const move = (event) => {
  const checkButton = document.getElementById(
    event.currentTarget.parentNode.id
  );
  if (
    document.getElementById(
      event.currentTarget.parentNode.parentNode.parentNode.id
    ) !== doneContainer
  ) {
    const deleteCard = document.getElementById(
      event.currentTarget.parentNode.parentNode.id
    );
    doneContainer.appendChild(deleteCard);

    checkButton.innerHTML = `<button class="checked" onclick="move(event)">
    <i class="fa fa-check icon" aria-hidden="true"></i>
  </button>`;
  }
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
const addTask = (value, doneCheck) => {
  const container = document.getElementById(value);
  if (container == doneContainer) {
    doneCheck = "checked";
  }
  container.innerHTML += createNewTask(doneCheck, cid);
  uid += 1;
  cid += 1;
};
taskbtn.addEventListener("click", (event) => {
  values.title = title.value;
  values.desc = Description.value;
  values.status = statusSelect.value;
  values.priority = prioritySelect.value;
  values.id = uid;
  if (title.value.length !== 0 && Description.value.length !== 0) {
    let doneCheck = "checkdone";
    addTask(statusSelect.value, doneCheck);
    taskbox.style.display = "none";
    title.value = "";
    Description.value = "";
    statusSelect.value = "todo";
    prioritySelect.value = "Low";
    helper1.style.display = "none";
    helper2.style.display = "none";
  } else {
    helper1.style.display = "block";
    helper2.style.display = "block";
  }
});

const dragDrop1 = (event) => {
  event.dataTransfer.setData(
    "text/plain",
    JSON.stringify({
      childId: event.target.id,
      parentId: event.target.parentElement.id,
    })
  );
};

const dragDrop2 = (event) => {
  // const itemId = JSON.parse(event.dataTransfer.getData("text/plain"));
  console.log(event.currentTarget.id);
};

// const dragDrop2 = (event, id) => {
//   event.preventDefault();
//   event.addEventListener("drop", (el) => {
//     const itemId = JSON.parse(event.dataTransfer.getData("text/plain"));
//     if (!inner.children.length) {
//       event.target.appendChild(document.getElementById(itemId.childId));
//     } else {
//       const existingElement = document.getElementById(event.target.id);
//       inner.removeChild(existingElement);
//       inner.appendChild(document.getElementById(itemId.childId));
//       const parentid = itemId.parentId;
//       const parentElement = document.getElementById(parentid);
//       parentElement.appendChild(existingElement);
//     }
//   });
// };

// boardDrop.forEach((inner, id) => {
// inner.addEventListener("dragover", (event) => {
//   event.preventDefault();
// });
// inner.addEventListener("drop", (event) => {
// const itemId = JSON.parse(event.dataTransfer.getData("text/plain"));
// if (!inner.children.length) {
//   event.target.appendChild(document.getElementById(itemId.childId));
// } else {
//   const existingElement = document.getElementById(event.target.id);
//   inner.removeChild(existingElement);
//   inner.appendChild(document.getElementById(itemId.childId));
//   const parentid = itemId.parentId;
//   const parentElement = document.getElementById(parentid);
//   parentElement.appendChild(existingElement);
// }
// });
// });
