const addButton = document.querySelector('#entryButton')
// console.log(addButton)
addButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const teaId = event.target.dataset.details
    const userId = 1;
    if (event.target.dataset.details) {
        addButton.innerHTML = `
    <input id="text_input" name="text" type="text">
    <button type="submit" id="inputText" data-new=${teaId}>
    Добавить отзыв
  </button>`;
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
            body: JSON.stringify({ userId, text }),
        });
        const data = await response.json();
        if(data){
            addButton.innerHTML=`      <div id="entryButton">
            <button
                  value="add"
                  type="button"
                  data-details=${teaId}
                  >
                      Оставить комментарий
                  </button>
                  </div>`;
                 const list = document.querySelector('#list');
                 list.insertAdjacentHTML("afterbegin", `<li>12<p>${text}`)
        }
    }

})