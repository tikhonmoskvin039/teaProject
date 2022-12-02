const React = require("react");
const Layout = require("./Layout");
function PrivateAdmin({ username, allTeas }) {
  return (
    <Layout username={username}>
      <div
        className="container mt-5 p-2 mb-5"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: "20px",
        }}
      >
        <h3>Приватная страница Администратора</h3>
        <p>
          Привет, <b className="text-danger">{username}</b>.
        </p>
        <p>
          <a
            class="btn btn-light"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Назначить администратором
          </a>
        </p>
        <div class="collapse mb-4" id="collapseExample2">
          <div
            class="card card-body"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "20px",
            }}
          >
            <h5 className="card-title text-dander">
              Внимание, выбирая пользователя, вы наделяете его правами
              редактирования и удаления!
            </h5>
            <form id="signinForm" class="adminForm" method="POST" action="/">
              <div className="form-group">
                <label htmlFor="name">
                  Введите e-mail авторизованного пользователя:
                </label>
                <input
                  className="admin form-control"
                  name="email"
                  type="text"
                  required
                />
              </div>
              <button
                type="submit"
                data-newAdmin
                className="btn btn-danger mt-2"
              >
                Назначить
              </button>
              <p class="target text-danger" style={{ display: "none" }}>
                <b>Создание администратора прошло успешно!</b>
              </p>
            </form>
          </div>
        </div>

        <p>
          <a
            class="btn btn-light"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Добавить новый чай
          </a>
        </p>
        <div class="collapse mb-4 second" id="collapseExample">
          <div
            class="card card-body"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "20px",
            }}
          >
            <h5 className="card-title text-dander">
              Все поля должны быть заполнены!
            </h5>
            <form data-addNewForm name="addNewForm" id="signinForm">
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
                <label htmlFor="info">Добавьте описание чая:</label>
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
          <div
            class="card content mb-3"
            style={{
              maxWidth: "100%",
              borderRadius: "20px",
            }}
            id={`${tea.id}`}
          >
            <div class="row">
              <div class="col-md-4">
                <img
                  name="picture_url"
                  src={`${tea.picture_url}`}
                  class="allImages img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" name="name">
                    {tea.name}
                  </h5>
                  <p class="card-text" name="info">
                    {tea.info}
                  </p>
                  <p class="card-text">
                    <p>
                      Место происхождения:{" "}
                      <b name="placeOfBirth">{tea.placeOfBirth}</b>
                    </p>
                    <p>
                      Географические координаты:{" "}
                      <b name="coordinates">{tea.coordinates}</b>
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
