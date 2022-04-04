document.getElementById('addNoteButton').addEventListener('click', addNotes)
document.querySelector('.buttonAddNote').addEventListener('click', buttonAddNote)


let dataNotes = [
    {
        createDate: "2022-04-03",
        date: "2022-04-14",
        id: 1649009213118,
        name: 'write',
        select: "Idea",
        selectImage: "img/idea.png",
        text: "write a favorite book"
    }
];

let renderRowActiveNotes = arrData => {
    let divRow = document.createElement('div')
    divRow.className = 'row align-items-center bg-light mt-2 rounded-3 form-control-sm'
    arrData.map(el => {
        return divRow.innerHTML = `<div class="col-1"><img alt="icon" style="max-width: 30px" src="${el.selectImage}"/></div>
                                   <div class="col-2 fw-bold">${slicedText(el.name)}</div>
                                   <div class="col-2">${el.createDate}</div>
                                   <div class="col-2">${el.select}</div>
                                   <div class="col-2">${slicedText(el.text)}</div>
                                   <div class="col-2">${el.date}</div>
                                   <div class="col-1">
                                           <div class="row justify-content-center ">
                                                  <div class="col-4 p-0"><img alt="img" src="img/edit.png"></div>
                                                  <div class="col-4 p-0"><img alt="img" src="img/archive.png"></div>
                                                  <div class="col-4 p-0"><img alt="img" src="img/basket.png"></div>
                                           </div>
                                   </div>`
    })

    document.querySelector('.buttonAddNote').before(divRow)
};

renderRowActiveNotes(dataNotes)

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
        case 'Task' :
            selectImage = 'img/task.png'
            break;
        case 'Idea' :
            selectImage = 'img/idea.png'
            break;
        case 'Quote' :
            selectImage = 'img/quote.png'
            break;
        case 'Random Thought' :
            selectImage = 'img/random.png'
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
        renderRowActiveNotes(dataNotes)
    }
    console.log(dataNotes)
}

function slicedText(text) {
    let sliced = text.slice(0,15);
    if (sliced.length < text.length) {
        sliced += '...';
    }
    return sliced
}




