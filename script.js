let trashButtonNodes = document.getElementsByClassName("morning-list-item");
for (let i = 0; i < trashButtonNodes.length; i++) {
    let trashButton = document.createElement("i");
    let txt = document.createTextNode("");
    trashButton.classList.add("bi", "bi-trash3-fill", "deleteListItem");
    trashButton.appendChild(txt);
    trashButtonNodes[i].appendChild(trashButton);
}

let trashNightNodes = document.getElementsByClassName("night-list-item");
for (let i = 0; i < trashNightNodes.length; i++) {
    let trashButton = document.createElement("i");
    let txt = document.createTextNode("");
    trashButton.classList.add("bi", "bi-trash3-fill", "deleteListItem");
    trashButton.appendChild(txt);
    trashNightNodes[i].appendChild(trashButton);
}

let deleteListItem = document.getElementsByClassName("deleteListItem");

for (let i = 0; i < deleteListItem.length; i++) {
    deleteListItem[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newElementToMorning() {
    var li = document.createElement("li");
    li.className = "morning-list-item"
    var inputValue = document.getElementById("productListInput1").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("morningList").appendChild(li);
    }
    document.getElementById("productListInput1").value = "";
  
    var newListItem = document.createElement("i");
    var txt = document.createTextNode("");
    newListItem.classList.add("bi", "bi-trash3-fill", "deleteListItem");
    newListItem.appendChild(txt);
    li.appendChild(newListItem);

    for (i = 0; i < deleteListItem.length; i++) {
        deleteListItem[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

function newElementToNight() {
    var li = document.createElement("li");
    li.className = "night-list-item"
    var inputValue = document.getElementById("productListInput2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("nightList").appendChild(li);
    }
    document.getElementById("productListInput2").value = "";
  
    var newListItem = document.createElement("i");
    var txt = document.createTextNode("");
    newListItem.classList.add("bi", "bi-trash3-fill", "deleteListItem");
    newListItem.appendChild(txt);
    li.appendChild(newListItem);

    for (i = 0; i < deleteListItem.length; i++) {
        deleteListItem[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}