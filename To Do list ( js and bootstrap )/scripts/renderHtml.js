
let containerButtonAddNote = document.createElement('div')
containerButtonAddNote.className = 'container'
containerButtonAddNote.innerHTML = `<div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end">
        <div onclick="renderNotes(true)" class="btn btn-light btn-sm border">Active Notes</div>
        <div onclick="renderNotes(false)" class="btn btn-light btn-sm border">Archive Notes</div>
        <div onclick="formAddNote()" class="btn btn-light btn-sm border">Create Note</div>
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

function renderNote(arrData) {
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
                        <div style="cursor: pointer" onclick="changeActive(${el.id})" class="col-4 p-0">
                             <img alt="img" src="img/archive.png"></div>
                        <div style="cursor: pointer" onclick="deleteNote(${el.id})" class="col-4 p-0">
                             <img alt="img" src="img/basket.png"></div>
                   </div>
              </div>`
        document.querySelector('.elementsNotes').appendChild(divRow)
    })
}

function renderHeader() {
    let divContainer = document.createElement('div')
    divContainer.className = 'container'
    divContainer.innerHTML = `<div class="row align-items-center bg-secondary 
                  fw-bold text-white mt-2 rounded-3 form-control-sm">
            <div class="col-3 text-center">
                Name
            </div>
            <div class="col-2">
                Created
            </div>
            <div class="col-2">
                Category
            </div>
            <div class="col-2">
                Content
            </div>
            <div class="col-2">
                Dates
            </div>
            <div class="col-1">
                <div class="row justify-content-center">
                    <div class="col-4 p-0"></div>
                    <div class="col-4 p-0"><img alt="img" src="img/archive.png"></div>
                    <div class="col-4 p-0"><img alt="img" src="img/basket.png"></div>
                </div>
            </div>
        </div>`

    document.body.prepend(divContainer)
}

function head(condition) {
    clearHtml('.headerText')
    let divContainer = document.createElement('div')
    divContainer.className = 'container text-center headerText'
    let text = condition? 'Active notes': 'Archive notes'
    divContainer.innerHTML = `<h2>${text}</h2>`

    document.body.prepend(divContainer)
}

function statisticCategoryNotes() {
    clearHtml('.statistic')
    let divContainer = document.createElement('div')
    divContainer.className = 'container statistic'

    divContainer.innerHTML = `<div class="row align-items-center bg-secondary 
                  fw-bold text-white mt-2 rounded-3 form-control-sm">
            <div class="col-2"></div>
            <div class="col-4">
                Note category
            </div>
            <div class="col-3">
                Active
            </div>
            <div class="col-3">
                Archived
            </div>
        </div>`

    document.body.append(divContainer)
}

function statisticCategoryList(statisticData) {
    statisticData.forEach(el => {
        if (el.active > 0 || el.archive > 0) {
            let divRow = document.createElement('div')
            divRow.className = 'row activeNote align-items-center bg-light mt-2 rounded-3 form-control-sm'
            divRow.innerHTML = `<div class="col-2">
              <img alt="icon" style="max-width: 30px" src="${el.selectImage}"/></div>
              <div class="col-4 fw-bold">${slicedText(el.select)}</div>
              <div class="col-3">${el.active}</div>
              <div class="col-3">${el.archive}</div>`

            document.querySelector('.statistic').appendChild(divRow)
        }
    })
}