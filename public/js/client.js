const container = document.querySelector(".container.pb-4.pt-3");

const template = `
   <div class="card card-body edit">
            <form id="updForm">
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

              <button data-Cancel type="button" class="btn btn-outline-danger mt-2" href="/private/admin">Отменить</button>
              <button data-save type="submit" class="btn btn-outline-warning mt-2" >Сохранить</button>
              </div>
            </form>
          </div>
`;

container.addEventListener("click", async (e) => {
  const bigTeaBox = e.target.closest(".card");
  console.log("bigTeaBox", bigTeaBox);
  const oldData = bigTeaBox.innerHTML;
  console.log("oldData", oldData);
  if (e.target.textContent === "Удалить") {
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
    } catch (err) {
      console.log("err");
    }
  } else if (e.target.textContent === "Редактировать") {
    bigTeaBox.innerHTML = template;
  }

  const editCard = document.querySelector(".card.card-body.edit");
  console.log("editCard", editCard);

  editCard.addEventListener("click", async (e) => {
    const updateForm = document.querySelector("#updForm");
    const id = e.target.closest(".card.content").id;
    const name = updateForm.name.value;
    const picture_url = updateForm.picture_url.value;
    const info = updateForm.info.value;
    const placeOfBirth = updateForm.placeOfBirth.value;
    const coordinates = updateForm.coordinates.value;

    if (e.target.textContent === "Сохранить") {
      editCard.innerHTML = `
        <div
            class="card content mb-3"
            style={{
              maxWidth: "100%",
              borderRadius: "20px",
            }}
            id="${id}"
          >
            <div class="row">
              <div class="col-md-4">
                <img
                  src="${picture_url}"
                  class="allImages img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${info}</p>
                  <p class="card-text">
                    <p>
                      Место происхождения: <b>${placeOfBirth}</b>
                    </p>
                    <p>
                      Географические координаты: <b>${coordinates}</b>
                    </p>
                    <small class="text-muted">
                      Запись создана: <b>${new Date().toTimeString()}</b>
                    </small>
                    <hr />
                    <small class="text-muted">
                      Запись редактирована:
                      <b>${new Date().toTimeString()}</b>
                    </small>
                    <div className="d-flex justify-content-around mt-2">
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        data-updateBtn="${id}"
                      >Редактировать</button>
                      <button
                        type="submit"
                        data-delBtn="${id}"
                        class="btn btn-outline-danger"
                      >Удалить</button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
      `;
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
      } catch (err) {
        console.log("err", err);
      }
    } else if (e.target.textContent === "Отменить") {
      const bigTeaBox = e.target.closest(".card.card-body.edit");
      console.log("bigTeaBox", bigTeaBox);

      const editCard = document.querySelector(".card.card-body.edit");
      editCard.innerHTML = oldData;
    }
  });
});

const newAdminBtn = document.querySelector("[data-newAdmin]");

newAdminBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const adminInput = document.querySelector(".admin");
  const email = adminInput.value;

  const target = document.querySelector(".target");
  target.style.display = "block";
  setTimeout(() => {
    target.style.display = "none";
  }, 3000);

  let response;
  try {
    response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();
    if (response.status === 200) window.location.href = "/private/admin";
  } catch (err) {
    console.log("err");
  }
});

const addNewTea = document.querySelector("[data-addNewForm]");

addNewTea.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.forms.addNewForm.name.value;
  const picture_url = document.forms.addNewForm.picture_url.value;
  const info = document.forms.addNewForm.info.value;
  const placeOfBirth = document.forms.addNewForm.placeOfBirth.value;
  const coordinates = document.forms.addNewForm.coordinates.value;
  let response;
  try {
    response = await fetch("/private/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        picture_url,
        info,
        placeOfBirth,
        coordinates,
      }),
    });
    const data = await response.json();
    const container = e.target.closest(".container");

    const template = `
 <div
            class="card content mb-3"
            style={{
              maxWidth: "100%",
              borderRadius: "20px",
            }}
            id="${data.create.id}"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${data.create.picture_url}"
                  class="img-fluid rounded-start"
                  style={{ width: "400px", height: "400px" }}
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.create.name}</h5>
                  <p class="card-text">${data.create.info}</p>
                  <p class="card-text">
                    <p>
                      Место происхождения: <b>${data.create.placeOfBirth}</b>
                    </p>
                    <p>
                      Географические координаты: <b>${data.create.coordinates}</b>
                    </p>
                    <small class="text-muted">
                      Запись создана: <b>${data.create.createdAt}</b>
                    </small>
                    <hr />
                    <small class="text-muted">
                      Запись редактирована:
                      <b>${data.create.updatedAt}</b>
                    </small>
                    <div class="d-flex justify-content-around mt-2">
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        data-updateBtn="${data.create.id}"
                      >Редактировать</button>
                      <button
                        type="submit"
                        data-delBtn="${data.create.id}"
                        class="btn btn-outline-danger"
                      >Удалить</button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
`;
    container.insertAdjacentHTML("beforeend", template);
    const collapse = document.querySelector(".mb-4.collapse");
    collapse.classList.remove('show')
    console.log('collapse', collapse)
  } catch (err) {
    console.log("err", err);
  }
});
