
renderRowActiveNotes(dataNotes)

function clearHtml(selector) {
    let elementsNotes = document.querySelectorAll(selector)
    elementsNotes.forEach(el => el.remove())
}


function addNotes(id) {
    let date = document.getElementById('exampleFormControlDate').value
    let createDate = new Date
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
        if (id === null) {
            let note = {
                id: Date.now(),
                name: name,
                select: select,
                selectImage: selectImage,
                text: text,
                date: date,
                createDate: createDate.toISOString().split('T')[0]
            }
            dataNotes.push(note)
        } else {
            dataNotes.forEach(el => {
                if (el.id === id) {
                    el.name = name
                    el.select = select
                    el.selectImage = selectImage
                    el.text = text
                    el.date = date
                }
            })
        }
        clearHtml('.formAddNote')
        renderRowActiveNotes(dataNotes)
    }
}

function slicedText(text) {
    let sliced = text.slice(0, 15);
    if (sliced.length < text.length) {
        sliced += '...';
    }
    return sliced
}

function deleteNote(id) {
    clearHtml('.activeNote')
    dataNotes = dataNotes.filter(el => el.id !== id)
    renderRowActiveNotes(dataNotes)
}

function changeNote(id) {
    dataNotes.forEach(el => {
        if (el.id === id) {
            formAddNote(el.name, el.select, el.text, el.date, el.id)
        }
    })
}


