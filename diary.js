const text= document.querySelector("textarea")
const save= document.querySelector(".ds")
const notesCont= document.querySelector(".notesCont")
const noteName = document.querySelector(".noteName")
const form = document.querySelector("form");

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

        showBut.addEventListener("click",(e)=>{
            e.preventDefault();
            let notes = document.querySelectorAll(".miniContainer");
            console.log("bh");
            notes.forEach(note => {
                if(note.contains(e.target)){
                    if (note.contains(e.target)) {
                        if (note.classList.contains('active')) {
                            note.classList.remove('active');
                            note.style.animation = "";
                        } else {
                            note.classList.add('active');
                            note.style.animation = "w 2s";
                            let textDiv = document.createElement('div');
                            textDiv.innerText = textContent;
                            showBut.style.display="none"
                            const back=document.createElement("button");
                            back.innerText="Back"
                            back.classList.add("back")
                                               
                            
                            miniContainer.insertBefore(textDiv, showBut);
                            miniContainer.append(back)
                            let notes = JSON.parse(sessionStorage.getItem('notes')) || [];
                        notes.push({
                            name: noteName.value,
                            text: textContent,
                            date: new Date().toISOString()
                        });
                        sessionStorage.setItem('notes', JSON.stringify(notes));
                            back.addEventListener("click", (e) => {
                                e.preventDefault();
                                miniContainer.removeChild(textDiv)
                                let notes = JSON.parse(sessionStorage.getItem('notes')) || [];
                                notes.forEach(note => {
                                  let miniContainer = document.createElement('div');
                                  miniContainer.classList.add('miniContainer'); 
                                  let name = document.createElement('h4');
                                  let writtedDate = document.createElement("p");
                                  const showBut = document.createElement("button");
                                  showBut.classList.add('showBut')
                                  showBut.innerText = "Read";
                                  name.innerText = note.name;
                                  miniContainer.appendChild(name);
                                  writtedDate.innerText = note.date;
                                  miniContainer.append(writtedDate)
                                  miniContainer.append(showBut)
                                  notesCont.appendChild(miniContainer)
                                });
                            
                            })
                        }
                        
                    } else {
                        note.style.display = "none";
                        // note.classList.remove('active');
                        // note.style.animation = "";
                    }
                    noteName.value = "";
                     text.value = "";
                }
                else {
                    note.style.display = "none";
                }
            });
        })
        
    }else {
        alert("You can not save empty note")
    }


});

