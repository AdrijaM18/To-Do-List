const inputBox = document.getElementById("input-box");
const listContnr = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === '')
    {
        alert("Please add something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContnr.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";   //for cross sign7
        li.appendChild(span);

    }
    inputBox.value = "";
    savedata();
}

listContnr.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata()
{
    localStorage.setItem("data",listContnr.innerHTML);
}

function showList()
{
    listContnr.innerHTML = localStorage.getItem("data");
}