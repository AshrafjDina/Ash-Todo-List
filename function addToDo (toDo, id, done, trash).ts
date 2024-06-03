function addToDo (toDo, id, done, trash){
    if(trash){return;}

    const DONE = done? CHECK : UNCHECK
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job = "complete" id="${id}"></i>
                    <p class="text"${LINE}"> ${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                    </li>
                    `;

    const positin = "beforeend";
    list.insertAdjacentHTML(position, item);          
}
//add an item to the list usrer the enter key

document.addEventListener("keyup",functioin(even){
    if(event.keyCode == 13)
    const toDo = input.value;

    // if the input isnt't empty
    if(toDo){
        addToDo(toDo);
    }
})
addToDo