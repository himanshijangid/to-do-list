document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key ==="Enter"){
        const input = document.querySelector("#input");
        addItem(input.value);
    }
});

document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
});
addItem  = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkboxIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = "item";
    text.textContent = input;

    checkboxIcon.className ="fa-regular fa-circle-check";
    
    checkboxIcon.style.color = "red" ;

  
    checkboxIcon.addEventListener("click" , () => {
        let color = checkboxIcon.style.color;
        if(color=='red'){
            checkboxIcon.style.color='green';
            text.style.textDecoration = "line-through"; 
        }
        else{
            
            checkboxIcon.style.color='red';
            text.style.textDecoration = "none"; 
        }
    } );
    div.appendChild(checkboxIcon);

    deleteIcon.className ="fa-solid fa-trash-can";
    deleteIcon.addEventListener("click",() => {
        item.remove();

    })
    div.appendChild(deleteIcon);
    item.appendChild (text);
    item.appendChild(div);

    document.querySelector(".to-do-list").appendChild(item);
    document.querySelector("#input").value = "";


}