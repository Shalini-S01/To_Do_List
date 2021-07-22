var inpt=document.querySelector(".addbtn");        // access the button in form
var Tasks=document.querySelector(".collections");  // acess the ul
var clear=document.querySelector(".clr");          // access the clr button
var filter=document.querySelector(".filter");      //used to acess the filter btn
var taskInput=document.querySelector(".ip");       //used to access the i/p in the form
var pending=document.querySelector(".pending")     // used to access the footer

loadEventListeners();

function loadEventListeners(){
    inpt.addEventListener("click",addtask);            // adding tasks using add task button
    clear.addEventListener("click",clearTask);         // deleting the whole li elem using clear button
    Tasks.addEventListener("click",removeElement);     // removing tasks selectively 
    filter.addEventListener("keyup",filterEle);        // filters the tasks 
}

function addtask(e){
    e.preventDefault();
    //console.log(taskInput.value);  to check whether the event is executed/not.
    if (taskInput.value=="")
        alert("The box is empty! Add tasks");
    else{
    const li=document.createElement('li');        // creating a list and add input values into it
    li.className="listValues";
    li.appendChild(document.createTextNode(taskInput.value)); //appending the created list in the ul 

    const link = document.createElement('a');
    link.className = "deleteItem";
    link.innerHTML='<img src="./trash-2.svg">'

    li.appendChild(link);
    Tasks.appendChild(li);     //appending the created list in the ul
    pending.innerHTML="📌 "+Tasks.childElementCount+"  Tasks  pending !"; // gives the childElements count
    }
}   

function clearTask(){
    Tasks.innerHTML='';
    pending.innerHTML="📌 No Tasks  pending !";
}

function removeElement(e){
    //console.log(e.target.parentElement.parentElement) o/p: shows li tag
    //console.log(e.target.parentElement.parentElement.parentElement) shows ul tag
    if (e.target.parentElement.classList.contains('deleteItem'))
        e.target.parentElement.parentElement.remove();
        pending.innerHTML="📌 "+Tasks.childElementCount+"  Tasks  pending !";
}

function filterEle(e){
    console.log(e.target.value)                        //show the current value present 
    var txt=e.target.value.toLowerCase();
    console.log(txt)
    document.querySelectorAll(".listValues").forEach(   //iterating through the list
        function(tsk){
            console.log(tsk)
            const item=tsk.firstChild.textContent
            console.log(item)
            if(item.toLowerCase().indexOf(txt) !=-1){
                tsk.style.display='block';
            }
            else{
                tsk.style.display='none';
            }
        })
}













