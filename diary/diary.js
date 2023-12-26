const text= document.querySelector("textarea")
const save= document.querySelector(".ds")
const notesCont= document.querySelector(".notesCont")
const noteName = document.querySelector(".noteName")
const form = document.querySelector("form");
const searchInput = document.getElementById("search");

function createNoteContainer(name, date, content) {
    let miniContainer = document.createElement('div');
    miniContainer.classList.add('miniContainer');
    let noteName = document.createElement('h4');
    let writtedDate = document.createElement("p");
    const showBut = document.createElement("button");
    showBut.classList.add('showBut');
    showBut.innerText = "Read";
    noteName.innerText = name;
    miniContainer.appendChild(noteName);
    writtedDate.innerText = date;
    miniContainer.append(writtedDate);
    miniContainer.append(showBut);


    let textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');
    textDiv.innerText = content;

    textDiv.style.display = "none";

    miniContainer.insertBefore(textDiv, showBut);


    showBut.addEventListener("click", () => {
        if (miniContainer.classList.contains('active')) {
            miniContainer.classList.remove('active');
            miniContainer.style.animation = "";
            showBut.innerText = "Read";
            textDiv.style.display = "none";
        } else {
            miniContainer.classList.add('active');
            miniContainer.style.animation = "w 2s";
            showBut.innerText = "Back";
            textDiv.style.display = "block";
        }
    });

    return miniContainer;
}


function filterNotes(searchText) {
    let filteredNotes = [];
    let notes = document.querySelectorAll(".miniContainer");

    notes.forEach(note => {
        let name = note.querySelector('h4').innerText.toLowerCase();
        if (name.includes(searchText.toLowerCase())) {
            filteredNotes.push(note);
        }
    });

    return filteredNotes;
}


function displayFilteredNotes(filteredNotes) {
    notesCont.innerHTML = "";
    filteredNotes.forEach(note => {
        notesCont.appendChild(note);
    });
}


searchInput.addEventListener("input", (e) => {
    let searchText = e.target.value.trim();
    let filteredNotes = filterNotes(searchText);

    displayFilteredNotes(filteredNotes);
});

form.addEventListener("submit", (e) => {
   e.preventDefault();

    if(noteName.value!=="" && text.value!=="" ){
        const textContent=text.value;
        let miniContainer= document.createElement('div')
        miniContainer.classList.add('miniContainer'); 
        let name= document.createElement('h4')
        let writtedDate= document.createElement("p")
        const showBut= document.createElement("button");
        showBut.classList.add('showBut')
        showBut.innerText="Read"
        name.innerText=noteName.value;
        miniContainer.appendChild(name);
        let date= new Date();
        let day= date.getDate();
        let month= date.getMonth()+1;
        let year=date.getFullYear();
        writtedDate.innerText=`${day}/${month}/${year}`;
        miniContainer.append(writtedDate)
        miniContainer.append(showBut)
        notesCont.appendChild(miniContainer)
        showBut.addEventListener("click", (e) => {
            e.preventDefault();
            let notes = document.querySelectorAll(".miniContainer");
        
            notes.forEach(note => {
                if (note.contains(e.target)) {
                    if (note.classList.contains('active')) {
                        note.classList.remove('active');
                        note.style.animation = "";
                        showBut.innerText = "Read";
                        let textDiv = note.querySelector('.textDiv');
                        if (textDiv) {
                            textDiv.remove();
                        }
                        showBut.style.display = "block";
        
                        let backBtn = note.querySelector('.back');
                        if (backBtn) {
                            backBtn.remove();
                        }
                    } else {
                        note.classList.add('active');
                        note.style.animation = "w 2s";
                        showBut.innerText = "Back";
                        let textDiv = document.createElement('div');
                        textDiv.classList.add('textDiv');
                        textDiv.innerText = textContent;
                        showBut.style.display = "none";
                        note.insertBefore(textDiv, showBut);
                
                        if (!note.querySelector('.back')) {
                            let back = document.createElement("button");
                            back.innerText = "Back";
                            back.classList.add("back");
                            note.appendChild(back);
        
                            back.addEventListener("click", (e) => {
                                e.preventDefault();
                                note.removeChild(textDiv);
                                showBut.style.display = "block";
                                showBut.innerText = "Read";
        
                                back.remove();
                            });
                        }
                    }
                }
            });
        })   
        
    }else {
        alert("You can not save empty note")
    }


});

