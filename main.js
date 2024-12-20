let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let numberOfTak = document.getElementById("numberOfTak");

const taskArray = [];
taskInput.focus();

// Add task
addTaskBtn.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  // Create a new task object
  let taskText = taskInput.value;
  let task = {
    text: taskText,
    status: "pending",
  };

  // Add the new task to the array
  taskArray.push(task);

  // Create the task element for the new task
  const container = document.createElement("li");
  container.classList =
    "flex justify-between items-center py-3 gap-x-3 w-full border-b";
  container.id = `task${taskArray.length - 1}`; // Use index for reference

  const taskHtml = `
        <div class="flex w-full gap-x-2">
          <input type="checkbox" name="" id="checkbox${
            taskArray.length - 1
          }" class="w-4" />
          <h1 id="text${
            taskArray.length - 1
          }" class="text-xl w-[80%] text-start ">${task.text}</h1>
        </div>
        <span class="material-symbols-outlined cursor-pointer" id="delete${
          taskArray.length - 1
        }">delete</span>
    `;
  container.innerHTML = taskHtml;

  // Append the new task to the task list
  taskList.append(container);

  // Add event listener for checkbox
  const checkbox = container.querySelector("input[type='checkbox']");
  const text = container.querySelector("h1");
  checkbox.addEventListener("change", function () {
    task.status = checkbox.checked ? "completed" : "pending";
    text.classList.toggle("line-through", task.status === "completed");
  });

  // Add event listener for delete
  const deleteBtn = container.querySelector("span");
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(container); // Remove from DOM
    taskArray.splice(taskArray.indexOf(task), 1); // Remove from array
    console.log(taskArray); // Debugging
  });

  // add taskLinst length
  numberOfTak.textContent = taskArray.length;

  // Clear the input field and focus
  taskInput.value = "";
  taskInput.focus();
});
