const taskArrayGlobal = [];

$(document).ready(function(){
    $("#AddTaskButton").click(function(){
        let textVal = $("#AddTaskInput").val();
        if(textVal){
        taskArrayGlobal.push(textVal);
        prepToDoList();
        $("#AddTaskInput").val('');
        }
        //get the value in side the text box
        //add task item in the task listing for the value
    })
});

const prepToDoListingHTML = (todotext) => {
    
    return taskArrayGlobal.map((val, i)=>{
        return prepToDoHTML(val, i);
    })
}

const prepToDoHTML = (todoText, index) => {
    return `<div class="single-task">
    <div class="single-task-check">
        <input type="checkbox" id="${index}">
    </div>
    <div class="single-task-title">
        ${todoText}
    </div>
</div>`
}

const addClickToCheckboxes = () => {
    $("#TaskListing input").click(function(){
        let index = $(this).attr('id');
        taskArrayGlobal.splice(index, 1);
        prepToDoList();
    })
}

const prepToDoList = () => {
    console.log('preparing');
    let todoHtml = prepToDoListingHTML();
    $("#TaskListing").html(todoHtml);
    addClickToCheckboxes();
}