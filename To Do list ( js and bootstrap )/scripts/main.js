document.getElementById('addNoteButton').addEventListener('click', addNotes)
document.querySelector('.buttonAddNote').addEventListener('click', buttonAddNote)


let dataNotes = [];


function buttonAddNote() {
    document.getElementById('formData').style.display = 'block';
}


function addNotes(event) {
    event.preventDefault();
    let date = new Date
    let name = document.getElementById('exampleFormControlName').value
    let select = document.getElementById('exampleFormControlSelect').value
    let text = document.getElementById('exampleFormControlTextarea').value
    let selectImage = ''

    switch (select) {
        case 'Task' : selectImage = 'img/task.png'
            break;
        case 'Idea' : selectImage = 'img/idea.png'
            break;
        case 'Quote' : selectImage = 'img/quote.png'
            break;
        case 'Random Thought' : selectImage = 'img/random.png'
            break;
    }

    if (name !== '' && select !== '' && text !== '') {
        let note = {
            id: Date.now(),
            name: name,
            select: select,
            selectImage: selectImage,
            text: text,
            date: document.getElementById('exampleFormControlDate').value,
            createDate: date.toISOString().split('T')[0]
        }
        dataNotes.push(note)
        document.getElementById('formData').reset()
        document.getElementById('formData').style.display = '';
    }
    console.log(dataNotes)
}






