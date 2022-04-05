
let containerButtonAddNote = document.createElement('div')
containerButtonAddNote.className = 'container'
containerButtonAddNote.innerHTML = `<div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end">
        <button onclick="formAddNote()" class="btn btn-light btn-sm border" type="button">Create Note</button>
    </div>`
document.querySelector('.elementsNotes').after(containerButtonAddNote)


function formAddNote(name='', select='', text='', date='', id=null) {

    let divContainer = document.createElement('div')
    divContainer.className = 'container formAddNote'

    divContainer.innerHTML = `<form class="needs-validation" noValidate>
        <div class="mb-3">
            <label for="exampleFormControlName" class="form-label">Name</label>
            <input required name="name" type="text" class="form-control" value="${name}"
             id="exampleFormControlName" placeholder="name">
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please write the name.</div>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlSelect" class="form-label">Category</label>
            <select name="category" class="form-select" aria-label="Default select example"
                    id="exampleFormControlSelect" required>
                <option value="${select}" selected disabled hidden>Select a category ${select}</option>
                <option value="Task">Task</option>
                <option value="Idea">Idea</option>
                <option value="Quote">Quote</option>
                <option value="Random Thought">Random Thought</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a category.</div>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea" class="form-label">Content</label>
            <textarea name="text" required class="form-control" id="exampleFormControlTextarea" rows="3">${text}</textarea>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please write the text.</div>
        </div>
        <div class="mb-3 col-2">
            <label for="exampleFormControlDate" class="form-label">Date</label>
            <input value="${date}" name="date" class="form-control" type="date" id="exampleFormControlDate">
        </div>
        <div class="d-grid gap-2">
            <div onclick="addNotes(${id})" class="btn btn-light border" id="addNoteButton">Save The Note</div>
        </div>
    </form>`

    document.querySelector('.elementsNotes').before(divContainer);
    validationFormBootstrap()
}

function renderRowActiveNotes(arrData) {
    clearHtml('.activeNote')
    arrData.forEach(el => {
        let divRow = document.createElement('div')
        divRow.className = 'row activeNote align-items-center bg-light mt-2 rounded-3 form-control-sm'
        divRow.innerHTML = `<div class="col-1">
              <img alt="icon" style="max-width: 30px" src="${el.selectImage}"/></div>
              <div class="col-2 fw-bold">${slicedText(el.name)}</div>
              <div class="col-2">${el.createDate}</div>
              <div class="col-2">${el.select}</div>
              <div class="col-2">${slicedText(el.text)}</div>
              <div class="col-2">${el.date}</div>
              <div class="col-1">
                   <div class="row justify-content-center ">
                        <div style="cursor: pointer" onclick="changeNote(${el.id})" class="col-4 p-0">
                             <img alt="img" src="img/edit.png"></div>
                        <div style="cursor: pointer" class="col-4 p-0"><img alt="img" src="img/archive.png"></div>
                        <div style="cursor: pointer" onclick="deleteNote(${el.id})" class="col-4 p-0">
                             <img alt="img" src="img/basket.png"></div>
                   </div>
              </div>`
        document.querySelector('.elementsNotes').appendChild(divRow)
    })
}

