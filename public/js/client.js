const allDeleteBtns = document.querySelectorAll("[data-delBtn]");

allDeleteBtns.forEach((del) => {
  del.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = e.target.closest(".card").id;
    e.target.closest(".card").remove();

    let response;
    try {
      response = await fetch("/private/admin", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      if (response.status === 200) window.location.href = "/private";
    } catch (err) {
      console.log("err");
    }
  });
});

const allUpdateBtns = document.querySelectorAll("[data-updatebtn]");

const template = `
   <div class="card card-body">
            <form id="updForm" method="POST" action="/private/admin">
              <div class="form-group">
                <label htmlFor="name" style="width: 100%;">Название чая:</label>
                <input
                  className="form-control"
                  style="width: 100%;"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture_url" style="width: 100%;">Введите URL картинки:</label>
                <input
                  className="form-control"
                  name="picture_url"
                  type="text"
                  style="width: 100%;"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture_url">Добавьте описание чая:</label>
                <textarea className="form-control"
                  name="info"
                  type="text"
                  style="width: 100%;"
                  required>
                  </textarea>
                      </div>
              <div className="form-group">
                <label htmlFor="placeOfBirth" style="width: 100%;">
                  Добавьте страну происхождения:
                </label>
                <input
                  className="form-control"
                  name="placeOfBirth"
                  type="text"
                  style="width: 100%;"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="coordinates" style="width: 100%;">
                  И введите географические координаты:
                </label>
                <input
                  className="form-control"
                  style="width: 100%;"
                  name="coordinates"
                  type="text"
                  placeholder="Пример: 35.421522, 104.144439"
                  required
                />
              </div>
              <div class="d-flex justify-content-around">

              <button data-Cancel type="button" class="btn btn-outline-danger mt-2" href="/private/admin">
                Отменить
              </button>
              <button data-save type="submit" class="btn btn-outline-warning mt-2" >
                Сохранить
              </button>
              
              </div>
            </form>
          </div>
`;

allUpdateBtns?.forEach((upd) => {
  upd.addEventListener("click", async (e) => {
    e.preventDefault();
    const teaBox = e.target.closest(".card-body");
    teaBox.insertAdjacentHTML("afterbegin", template);

    const cancelButton = document?.querySelector("[data-Cancel]");
    cancelButton.addEventListener("click", (e) => {
      e.preventDefault();
      const box = e.target.closest(".card.card-body");
      box.remove();
    });
    const dataSave = document?.querySelector("[data-save]");
    console.log("dataSave", dataSave);
    dataSave.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const updateForm = document.querySelector("#updForm");
    console.log("updateForm", updateForm);
    updateForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = e.target.closest(".card.content").id;
      const name = updateForm.name.value;
      const picture_url = updateForm.picture_url.value;
      const info = updateForm.info.value;
      const placeOfBirth = updateForm.placeOfBirth.value;
      const coordinates = updateForm.coordinates.value;
      let response;
      try {
        response = await fetch("/private/admin", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            picture_url,
            info,
            placeOfBirth,
            coordinates,
          }),
        });
        const data = await response.json();
        if (response.status === 200) window.location.href = "/private/admin";
      } catch (err) {
        console.log("err");
      }
    });
  });
});
