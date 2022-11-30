const privateDelBtns = document.querySelectorAll('[data-delBtn]');
const privateUpdBtns = document.querySelectorAll('[data-delBtn]');
//console.log('private----------',privateDelBtns)

privateDelBtns?.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
        // console.log(event)
        event.target.closest('.col-sm-6').remove();
       // console.log(event.target.closest('.col-sm-6'))
        const comment_id = event.target.getAttribute('data-delBtn');
        console.log(comment_id)
        const response = await fetch('/private/del', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                comment_id : comment_id
            })
        });
        const delInfo = await response.json();
        console.log("del.info", delInfo)
    });
})

privateDelBtns&.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
        const comment_id = event.target.getAttribute('data-delBtn');
        console.log(comment_id)
        const response = await fetch('/private/upd', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                comment_id : comment_id
            })
        });
        const delInfo = await response.json();
        console.log("del.info", delInfo)
    });
    })
})