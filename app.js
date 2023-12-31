console.log("NOTES APP...");
showNotes();
//IF USER ADDS A NOTE ADD IT TO THE LOCAL STORAGE

let addBtn = document.getElementById("addBtn");
// console.log(addBtn);
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    // console.log(addTxt);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

//FUNCTION TO SHOW ELEMENTS FROM LOCALSTORAGE


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
                    <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element} </p>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>
                `
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show...`;
    }
}

// console.log(notesObj);


//FUNCTION TO DELETE NOTE
function deleteNote(index) {
    // console.log("Deleted...",index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



search = document.getElementById("searchTxt");
// console.log(search);
search.addEventListener("input", function () {
    let inputVal = search.value;
    // console.log("Searching...",inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }



    })
})







