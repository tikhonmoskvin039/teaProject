const React = require("react");
const Layout = require("./Layout");
function PrivateAdmin({ username, allTeas }) {
  //JS Code
  return (
    <Layout username={username}>
      <div className="container mt-5">
        <h3>Приватная страница Администратора</h3>
        <p>
          Привет, <b className="text-danger">{username}</b>.
        </p>
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Добавить новый чай
          </a>
        </p>
        <div class="collapse mb-4" id="collapseExample">
          <div class="card card-body">
            <h5 className="card-title text-dander">
              Все поля должны быть заполнены!
            </h5>
            <form id="signinForm" method="POST" action="/private/admin">
              <div className="form-group">
                <label htmlFor="name">Название чая:</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture_url">Введите URL картинки:</label>
                <input
                  className="form-control"
                  name="picture_url"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture_url">Добавьте описание чая:</label>
                <textarea
                  className="form-control"
                  name="info"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="placeOfBirth">
                  Добавьте страну происхождения:
                </label>
                <input
                  className="form-control"
                  name="placeOfBirth"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="coordinates">
                  И введите географические координаты:
                </label>
                <input
                  className="form-control"
                  name="coordinates"
                  type="text"
                  placeholder="Пример: 35.421522, 104.144439"
                  required
                />
              </div>
              <button type="submit" className="btn btn-light mt-2">
                Добавить карточку чая
              </button>
            </form>
          </div>
        </div>
        {allTeas.map((tea) => (
          <div class="card content mb-3" style={{ maxWidth: "100%" }} id={`${tea.id}`}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={`${tea.picture_url}`}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{tea.name}</h5>
                  <p class="card-text">{tea.info}</p>
                  <p class="card-text">
                    <p>
                      Место происхождения: <b>{tea.placeOfBirth}</b>
                    </p>
                    <p>
                      Географические координаты: <b>{tea.coordinates}</b>
                    </p>
                    <small class="text-muted">
                      Запись создана: <b>{tea.createdAt.toTimeString()}</b>
                    </small>
                    <hr />
                    <small class="text-muted">
                      Запись редактирована:{" "}
                      <b>{tea.updatedAt.toTimeString()}</b>
                    </small>
                    <div className="d-flex justify-content-around mt-2">
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        data-updateBtn={`${tea.id}`}
                      >
                        Редактировать
                      </button>
                      <button
                        type="submit"
                        data-delBtn={`${tea.id}`}
                        class="btn btn-outline-danger"
                      >
                        Удалить
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <script src="/js/client.js"></script>
    </Layout>
  );
}

module.exports = PrivateAdmin;

//   <li className="entry" data-id={`${tea.id}`}>
//     <span className="teaName">{tea.name}</span>
//     <img src={tea.picture_url} alt="" />
//     <ul className="entry-links">
//       <li className="entry-link">
//         <a href={`entries/${tea.id}`}>details</a>
//       </li>
//       <li className="entry-link">
//         <a
//           data-update={`${tea.id}`}
//           //   href={`entries/${entry.id}/edit`}
//         >
//           edit
//         </a>
//       </li>
//       <li className="entry-link">
//         <a id={`${tea.id}`} data-del href={`entries/${tea.id}/delete`}>
//           delete
//         </a>
//       </li>
//     </ul>
//   </li>;
