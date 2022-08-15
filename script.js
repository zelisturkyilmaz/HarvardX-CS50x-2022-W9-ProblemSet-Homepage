const morningNodeList = document.getElementById("table-list-1");
for (let i = 0; i < morningNodeList.length; i++) {
    let closeButton = document.createElement("I");
    let closeButtontext = document.createTextNode("");
    closeButton.className = "bi bi-x-square";
    closeButton.appendChild(closeButtontext);
    morningNodeList[i].appendChild(closeButton);
}

let biTrashFill = document.getElementsByClassName("bi bi-trash3-fill");
for (let i = 0; i < biTrashFill.length; i++) {
    biTrashFill[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}