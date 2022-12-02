const privateDelBtns = document.querySelectorAll('[data-delBtn]');
const commentBox = document.querySelector('.private_box')

privateDelBtns?.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
        event.target.closest('.col-sm-6').remove();
        const comment_id = event.target.getAttribute('data-delBtn');
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











commentBox.addEventListener('click', async (event) => {

    //console.log(event.target.parentNode.parentNode.id)



    if (event.target.dataset.updbtn) {
        let comment_id ='';
        let text = ""
        if (event.target.parentNode.parentNode.className !== "comment-box") {
            text = event.target.parentNode.getAttribute('data-updtext');
            //console.log(event.target.parentNode)
            comment_id= event.target.parentNode.id;
        }
        else {
            //console.log("------------", event.target.parentNode)
            text = event.target.parentNode.parentNode.getAttribute('data-updtext');
            comment_id= event.target.parentNode.parentNode.id;
        }
         //console.log('commentId', comment_id)
        // console.log(event.target.parentNode.parentNode)
         //console.log(text)
        event.target.parentNode.innerHTML =
            `
        

        <form data-new=""        
        data-idbtn=${comment_id}
        data-updbtntext=${text}>
        <label  name="text" type="text" class="form-label"> комментарий:</label>
        <textarea  class="form-control input" id="text_input" rows="3">${text}</textarea>
        </br>
        <button

        class="btn btn-outline-success"
         id="inputText" >редактировать</button>
        </form>
        
        
        `}


    if (event.target.id === "inputText") {
        let box = event.target.closest('div').parentNode
        let text = event.target.closest("div").parentNode.querySelector(".form-control").value
        const comment_id = event.target.closest("form").dataset.idbtn
        console.log('------>', comment_id)
        const tea = event.target.closest("div").parentNode.dataset.teaname
        // console.log(comment_id)
        // console.log(text)
        // console.log(box)


        const response = await fetch('/private/upd', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                comment_id: comment_id,
                text: text
            })
        });
        const updInfo = await response.json();
        //console.log("updinfo", updInfo)
        const { tea_id, updatedAt } = updInfo
let count = 0;
        if (updInfo) {
            count+=1;
            event.target.closest("div").parentNode.dataset.updtext = updInfo.text
            //console.log(data)
            console.log(box)
           if(count===0) {box.innerHTML = `
            <h4 id="scrollspyHeading1">${tea}</h4>
            <p>${new Date(updatedAt).toDateString()}</p>

            <p>${updInfo.text}</p>
            <a
              href="#"
              data-updbtn=${comment_id}
              class="btn btn-outline-success"
            >
              Редактировать комментарий
            </a>
            <a
              href="#"
              data-delBtn=${comment_id}
              class="btn btn-outline-danger p-1"
            >
              Удалить комментарий
            </a>
            `} else {
                box = event.target.closest('div')
                box.innerHTML = `
            <h4 id="scrollspyHeading1">${tea}</h4>
            <p>${new Date(updatedAt).toDateString()}</p>

            <p>${updInfo.text}</p>
            <a
              href="#"
              data-updbtn=${comment_id}
              class="btn btn-outline-success"
            >
              Редактировать комментарий
            </a>
            <a
              href="#"
              data-delBtn=${comment_id}
              class="btn btn-outline-danger p-1"
            >
              Удалить комментарий
            </a>`              
            }
        }
    }
});

