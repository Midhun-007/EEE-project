// Main Elements
const mainScreen = document.getElementById("main-screen");
const dailyTasksScreen = document.getElementById("daily-tasks-screen");
const greenTasksScreen = document.getElementById("green-tasks-screen");

// Buttons
const dailyTasksBtn = document.getElementById("daily-tasks-btn");
const greenTasksBtn = document.getElementById("green-tasks-btn");
const addTaskBtn = document.getElementById("save-task-btn");
const backBtn = document.getElementById("back-btn");
const backGreenBtn = document.getElementById("back-green-btn");
const generateGreenTaskBtn = document.getElementById("generate-green-task-btn");
const uploadBtn = document.getElementById("upload-btn");

// Task Elements
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const dailyProgressFill = document.getElementById("daily-progress-fill");

// Green Task Elements
const greenTasksList = document.getElementById("green-tasks-list");
const greenProgressFill = document.getElementById("green-progress-fill");
const scoreDisplay = document.getElementById("score-display");

// Upload Image Elements
const uploadInput = document.getElementById("upload-input");
const uploadedImage = document.getElementById("uploaded-image");

// Data
let tasks = [];
let score = 0;
let greenTasksCompleted = 0;
let greenTasksTotal = 3;
let greenTasksData = [];

// Predefined Green Tasks
const greenTasks = [
  "Reduce your carbon footprint by walking or biking instead of driving.",
  "Conserve water by taking shorter showers and using water-efficient appliances.",
  "Use public transport to reduce emissions and pollution.",
  "Switch to renewable energy sources like solar or wind power.",
  "Support sustainable agriculture by buying local organic produce.",
  "Switch to reusable products to reduce plastic waste.",
  "Plant a tree to support biodiversity and combat deforestation.",
  "Support education for all, promoting gender equality in education.",
  "Recycle your waste to reduce the environmental impact on landfills.",
];

// Navigation Functions
function showDailyTasks() {
  mainScreen.classList.add("hidden");
  dailyTasksScreen.classList.remove("hidden");
}

function showGreenTasks() {
  mainScreen.classList.add("hidden");
  greenTasksScreen.classList.remove("hidden");
}

function goBackToMain() {
  dailyTasksScreen.classList.add("hidden");
  greenTasksScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
}

// Task Functions
function addTask(task) {
  if (task.trim() === "") return;
  tasks.push({ task, completed: false });
  renderTasks();
  taskInput.value = "";
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  updateDailyProgress();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((taskObj, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = taskObj.completed ? "completed" : "";
    taskItem.textContent = taskObj.task;
    taskItem.addEventListener("click", () => toggleTaskCompletion(index));
    taskList.appendChild(taskItem);
  });
}

function updateDailyProgress() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressPercent = (completedTasks / tasks.length) * 100 || 0;
  dailyProgressFill.style.width = `${progressPercent}%`;
}

// Green Task Functions
function generateGreenTask() {
  if (greenTasksData.length >= greenTasksTotal) {
    alert("All green tasks generated!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * greenTasks.length);
  const task = greenTasks.splice(randomIndex, 1)[0];
  greenTasksData.push({ task, completed: false });
  renderGreenTasks();
}

function toggleGreenTaskCompletion(index) {
  greenTasksData[index].completed = !greenTasksData[index].completed;
  renderGreenTasks();
  updateGreenProgress();
}

function renderGreenTasks() {
  greenTasksList.innerHTML = "";
  greenTasksData.forEach((taskObj, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = taskObj.completed ? "completed" : "";
    taskItem.textContent = taskObj.task;
    taskItem.addEventListener("click", () => toggleGreenTaskCompletion(index));
    greenTasksList.appendChild(taskItem);
  });
}

function updateGreenProgress() {
  greenTasksCompleted = greenTasksData.filter((task) => task.completed).length;
  const progressPercent = (greenTasksCompleted / greenTasksTotal) * 100 || 0;
  greenProgressFill.style.width = `${progressPercent}%`;
  updateScore();
}

function updateScore() {
  score = greenTasksCompleted * 10;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Upload Image Functions
uploadBtn.addEventListener("click", () => {
  uploadInput.click(); // Trigger file input click
});

uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) {
    alert("Please select an image first.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    uploadedImage.src = reader.result;
    uploadedImage.style.display = "block"; // Show the image once uploaded
  };
  reader.readAsDataURL(file);
});

// Event Listeners
dailyTasksBtn.addEventListener("click", showDailyTasks);
greenTasksBtn.addEventListener("click", showGreenTasks);
backBtn.addEventListener("click", goBackToMain);
backGreenBtn.addEventListener("click", goBackToMain);
addTaskBtn.addEventListener("click", () => addTask(taskInput.value));
generateGreenTaskBtn.addEventListener("click", generateGreenTask);

// Initialization
renderTasks();
renderGreenTasks();
updateDailyProgress();
updateGreenProgress();
