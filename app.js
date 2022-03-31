shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let Textarea1 = document.getElementById('Textarea1');
    let Addtittle = document.getElementById('addtittle')
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        text: Textarea1.value,
        Addtittle: Addtittle.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    Textarea1.value = "";
    Addtittle.value = "";
    console.log(notesObj);
    //console.log("working");
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html +=`<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.Addtittle}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });

    let noteElem = document.getElementById("notes");
    if(notesObj.length != 0){
        noteElem.innerHTML = html;
    }
    else{
        noteElem.innerHTML =`Nothing to show! To take notes please click on "Add Notes"`
    }

}

//function deleting notes

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}

//function for search

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value;
    console.log("it works!",inputVal);
    let noteCards = document.getElementsByClassName("notecard");
    Array.from(noteCards).forEach(function(element){
        let noteTxt = element.getElementsByTagName("p")[0].innerText;
        if(noteTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })
})  