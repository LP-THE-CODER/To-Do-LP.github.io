const inputBox = document.getElementById("input-box");
const todayList = document.getElementById("today-list");
const tomorrowList = document.getElementById("tomorrow-list");
const yearlyList = document.getElementById("yearly-list");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something..!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Determine which column to add the task to based on user input
        const selectedColumn = prompt("Enter column (today, tomorrow, yearly):").toLowerCase();
        switch (selectedColumn) {
            case "today":
                todayList.appendChild(li);
                break;
            case "tomorrow":
                tomorrowList.appendChild(li);
                break;
            case "yearly":
                yearlyList.appendChild(li);
                break;
            default:
                alert("Invalid column");
        }

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

// Add event listeners for each column
todayList.addEventListener("click", handleTaskClick);
tomorrowList.addEventListener("click", handleTaskClick);
yearlyList.addEventListener("click", handleTaskClick);

function handleTaskClick(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}

function saveData() {
    localStorage.setItem("todayData", todayList.innerHTML);
    localStorage.setItem("tomorrowData", tomorrowList.innerHTML);
    localStorage.setItem("yearlyData", yearlyList.innerHTML);
}

function showTask() {
    todayList.innerHTML = localStorage.getItem("todayData");
    tomorrowList.innerHTML = localStorage.getItem("tomorrowData");
    yearlyList.innerHTML = localStorage.getItem("yearlyData");
}
// Add these functions to your existing script.js file

function openAboutModal() {
    alert("To-Do List App\n\nThis app allows you to organize your tasks efficiently. Add tasks, mark them as completed, and manage daily, future, and long-term goals with ease.");
}

function openCreatorModal() {
    alert("Creator: Lakshmi Prasanna (LP)\n\nLP is a self-motivated developer.");
}
function showAbout() {
    document.getElementById('aboutModal').style.display = 'block';
}

function showCreator() {
    document.getElementById('creatorModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals if the user clicks outside the modal
window.onclick = function (event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

showTask();
