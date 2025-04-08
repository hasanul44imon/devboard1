// Button 
const completeBTn = document.querySelectorAll('.complete-btn');
const taskCount = document.getElementById('left-count')
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
        const countTask = document.getElementById('count-task');
        let countNumber = parseInt(countTask.innerText);
        countNumber = countNumber + 1;
        countTask.innerText = countNumber.toString().padStart(2, '0');

        alert('Task Complete Successfully');

        if (count == 0) {
            alert("Congrats!!! You have complete all the current task.");
        }