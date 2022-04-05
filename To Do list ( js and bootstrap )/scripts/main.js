let renderCondition = true

renderHeader()
statisticCategoryNotes()
renderNotes(renderCondition)


function renderNotes (condition) {
    renderCondition = condition
    head(condition)
    let notes = dataNotes.filter(el => el.active === condition)
    renderNote(notes)
    statisticNotes(dataNotes)
}

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
                createDate: createDate.toISOString().split('T')[0],
                active: true
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
        renderNotes(renderCondition)
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
    renderNotes(renderCondition)
}

function changeNote(id) {
    dataNotes.forEach(el => {
        if (el.id === id) {
            formAddNote(el.name, el.select, el.text, el.date, el.id)
        }
    })
}

function changeActive(id) {
   dataNotes = dataNotes.map(el => {
        if (el.id === id) {
            for (let key in el) {
               if(el[key] === el.active) el[key] === true? el[key] = false : el[key] = true
            }
        }
        return el
    })
    renderNotes(renderCondition)
}

function statisticNotes(notes) {
    let statisticData = [
        {
            select: "Task",
            selectImage: "img/task.png",
            active: 0,
            archive: 0
        },
        {
            select: "Idea",
            selectImage: "img/idea.png",
            active: 0,
            archive: 0
        },
        {
            select: "Quote",
            selectImage: "img/quote.png",
            active: 0,
            archive: 0
        },
        {
            select: "Random Thought",
            selectImage: "img/random.png",
            active: 0,
            archive: 0
        }
    ]
    notes.forEach(not => {
        statisticData.forEach(st => {
            if (not.select === st.select) {
                not.active? st.active += 1: st.archive += 1
            }
        })
    })
    statisticCategoryList(statisticData)
}

