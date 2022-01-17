window.addEventListener('load', (e) => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("input");
    const list_el = document.querySelector("#tasks");

    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if(!task) {
            alert("Please add a Task");
        } else {
            console.log("Task is added Successfully");
        }

        //creating the task level div
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //creating the content level div
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        //no longer needed
        //task_content_el.innerText = task;

        //creating the input type text under content level div
        const task_content_input_el = document.createElement("input");
        task_content_input_el.classList.add("text");
        task_content_input_el.setAttribute("readonly","readonly");
        task_content_input_el.value=task;

        //adding the input content as a child node to content level div
        task_content_el.appendChild(task_content_input_el);

        //adding the content div as a child node to task div
        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_action_edit_el = document.createElement("button");
        task_action_edit_el.classList.add("edit");
        task_action_edit_el.innerHTML="Edit";

        const task_action_delete_el = document.createElement("button");
        task_action_delete_el.classList.add("delete");
        task_action_delete_el.innerHTML="Delete";

        task_actions_el.appendChild(task_action_edit_el);
        task_actions_el.appendChild(task_action_delete_el);

        task_el.appendChild(task_actions_el);

        //adding the task as a child node to tasks level div
        list_el.appendChild(task_el);

        input.value="";

        //to edit event listener
        task_action_edit_el.addEventListener('click', (e) => {
            if(task_action_edit_el.innerText.toLowerCase() == "edit") {
                task_content_input_el.removeAttribute("readonly");
                task_content_input_el.focus();
                task_action_edit_el.innerText = "Save";
            } else {
                task_content_input_el.setAttribute("readonly","readonly");
                task_action_edit_el.innerText = "Edit";
            }           
        });
        //to delete event listener
        task_action_delete_el.addEventListener("click", (e) => {
            //either we use this or we can use the parent element to remove the child element
            //task_el.remove();
            list_el.removeChild(task_el);
        });
    });

});