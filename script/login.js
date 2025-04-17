// Button 
const completeBtn = document.querySelectorAll('.complete-btn');
// console.log(completeBtn.length)
const taskCount = document.getElementById('left-count');
taskCount.innerText = completeBtn.length.toString().padStart(2, '0');


for (let i = 0; i < completeBtn.length; i++) {
    const element = completeBtn[i];
    element.addEventListener("click", function (event) {
        event.target.classList.remove('cursor-pointer', "hover:bg-primary")
        event.target.classList.add('cursor-not-allowed',);
        event.target.disabled = true;
        // event.target.setAttribute("disabled", "true");

        let count = parseInt(taskCount.innerText);
        count = count - 1;
        taskCount.innerText = count.toString().padStart(2, '0');

        // Total Count
        const countTask = document.getElementById('task-count');
        let countNumber = parseInt(countTask.innerText);
        countNumber = countNumber + 1;
        countTask.innerText = countNumber.toString().padStart(2, '0');

        alert('Task Complete Successfully');

        if (count == 0) {
            alert("Congrats!!! You have complete all the current task.");
        }

    })}

   // Current Date & Time
let currentDateElement = document.getElementById('current-date');
let currentDate = new Date();
let options = { year: 'numeric', month: 'short', day: 'numeric' };
let date = currentDate.toLocaleDateString('en-US', options);
currentDateElement.innerText = date;

let currentDay = document.getElementById('current-day');
let optionsDay = { weekday: 'short' };
let day = currentDate.toLocaleDateString("en-us", optionsDay);
currentDay.innerText = day + ",";
