const addButton = document.querySelector('#entryButton')
const IdTea = document.querySelector('.card-title').id


// console.log(addButton)
addButton?.addEventListener('click', async (event) => {
    event.preventDefault()
    const teaId = event.target.dataset.details
    if (event.target.dataset.details) {
        addButton.innerHTML = `

        <div class="mb-3">
        <label  name="text" type="text" class="form-label">Оставьте комментарий:</label>
        <textarea class="form-control" id="text_input" rows="3"></textarea>
        </br>
        <button
        class="btn btn-outline-success"
        value="Добавить отзыв"
        type="submit" id="inputText" data-new=${teaId}>Добавить отзыв</button>
        </div>`;
    }

    if (event.target.id === "inputText") {
        const teaId = event.target.dataset.new
        console.log(event.target.dataset.new)
        // console.log(addButton.querySelector('#text_input').value)
        const text = addButton.querySelector('#text_input').value
        console.log(text)
        const response = await fetch(`/teas/${teaId}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        // console.log(data)
        const {id, name, isAdmin, commentId} = data
        console.log(data)
        if (name) {
            addButton.innerHTML = `                <button
            class="btn btn-outline-success"
            value="add"
            type="button"
            data-details=${teaId}
          >Оставить комментарий
          </button>`;
            const list = document.querySelector('#list');
            list.insertAdjacentHTML("afterbegin", `<div class="list-group-item "><div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${name}</h5>

          </div>
            <div>
              <p class="mb-1">${text}</p>
            </div><button class="btn btn-outline-success btn-sm m-2" data-change=${commentId}>изменить</button><button class="btn btn-outline-success btn-sm m-2" data-delete=${commentId}>удалить</button></div>`)
        }
    }


})
let Boxes = document.querySelector('.list-group')
console.log(Boxes)
Boxes.addEventListener('click', async (event)=>{
        if(event.target.dataset.delete){
            console.log(event.target)
            const deleteMessage = event.target.dataset.delete
            const response = await fetch(`/teas/${deleteMessage}`, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json',
                },
              });
              const data = await response.json();
              if (data) {
                console.log(data);
                event.target.closest('.list-group-item').remove()
              }
        }

        if(event.target.dataset.change){
            console.log(event.target)
            let box =  event.target.closest('.list-group-item')
            const text = box.querySelector('p').innerHTML
            const messageId = event.target.dataset.change
            console.log(messageId)
            box.innerHTML= `   <div class="mb-3">
            <label  name="text" type="text" class="form-label">Измените комментарий:</label>
            <textarea class="form-control" id=${messageId} rows="3">${text}</textarea>
            </br>
            <button
            class="btn btn-outline-success"
            value="Добавить отзыв"
            type="submit" id="changeText">Изменить отзыв</button>
            </div>`}
            if (event.target.id === "changeText"){
                 const changeMessage = event.target.closest('div').querySelector('.form-control').value
                const messageId = event.target.closest('div').querySelector('.form-control').id
                const box = event.target.closest('div').parentNode
                console.log(box)
            const response = await fetch(`/teas/${IdTea}`, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify({ changeMessage, messageId }),
              });
              const data = await response.json();
               const {name} = data
               console.log('.....',data)
              if (data) {
                box.innerHTML = `<div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${name}</h5>
    
              </div>
                <div>
                  <p class="mb-1">${changeMessage}</p>
                </div><button class="btn btn-outline-success btn-sm m-2" data-change=${messageId}>изменить</button><button class="btn btn-outline-success btn-sm m-2" data-delete=${messageId}>удалить</button>`
               }
        }

})
