// localStorage.setItem('name', 'Im usha');
// localStorage.setItem('age', 'im 30 years old');
// var x = localStorage.getItem('name');
// console.log(a);

const addbtn = document.getElementById('add');
addbtn.addEventListener('click', ()=>{
    addNotes()
})
function addNotes(){
    const notes = document.createElement('div');
    notes.classList.add('note');
    notes.innerHTML =`<div class="notes">
    <div class="tools">
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
       
    </div>
    <div class="main hidden"></div>
        <textarea></textarea>
     </div>`
     document.body.appendChild(notes)

}








