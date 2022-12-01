const privateDelBtns = document.querySelectorAll('[data-delBtn]');
const privateUpdBtns = document.querySelectorAll('[data-updBtn]');

//console.log('private----------',privateDelBtns)

privateDelBtns?.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
        // console.log(event)
        event.target.closest('.col-sm-6').remove();
        // console.log(event.target.closest('.col-sm-6'))
        const comment_id = event.target.getAttribute('data-delBtn');
        //console.log(comment_id)
        const response = await fetch('/private/del', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                comment_id: comment_id
            })
        });
        const delInfo = await response.json();
        console.log("del.info", delInfo)
    });
})











privateUpdBtns?.forEach((btn) => {
    btn.addEventListener('click', (event) => {

        //  const comm = event;
        const arr = event.target.getAttribute('data-updBtn');
        const [comment_id, comment_text] = arr?.split(",")
        // const comment_id = info[0]
        // const comment_text = info[1]
        console.log(arr)
        console.log("hhh", comment_id)
        console.log("hhh", comment_text)
        console.log(event.target.parentNode)

       // const commentBox = document.querySelector('.comment-box');
       
        event.target.parentNode.innerHTML =
            `
        <div class="mb-3">
        <form data-new="">
        <label  name="text" type="text" class="form-label"> комментарий:</label>
        <textarea  class="form-control input" id="text_input" rows="3"></textarea>
        </br>
        <button
        class="btn btn-outline-success"
         id="inputText" >редактировать</button>
        </form>
        </div>
        
        `
      //  const updNewBtn = document.querySelector('[data-new]');
        document.querySelector('[data-new]')?.addEventListener('submit', (event) => {

            event.preventDefault()
            document.querySelector('[data-new]').value
            console.log(event.target.dataset.new)
            console.log(event.target.childNodes)
            // const updated_comment = btn.getAttribute('data-new').valueOf
            // console.log(updated_comment)
        
        })


        // const response = await fetch('/private/upd', {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        //     body: JSON.stringify({
        //         comment_id: comment_id,
        //         text: text
        //     })
        // });
        // const delInfo = await response.json();
        // console.log("del.info", delInfo)
    });
})


