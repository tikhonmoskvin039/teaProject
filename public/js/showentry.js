const addButton = document.querySelector('#entryButton')
const deleButton = document.querySelectorAll('.list-group-item')
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
        const {id, name, isAdmin} = data
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
            </div></div>`)
        }
    }

})
console.log(deleButton)
deleButton.forEach((el)=>{
    
    console.log(el?.querySelector("#delete-button"))
    el?.querySelector("#delete-button")?.addEventListener('click', ()=>{
         el.remove()
})
})