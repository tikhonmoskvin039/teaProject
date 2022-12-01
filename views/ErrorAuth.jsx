const React = require("react");
const Layout = require("./Layout");

function ErrAuth({ username }) {
  //JS Code
  return (
    <Layout username={username}>
      <div className="container">
        <div
          class="card card-body"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            borderRadius: "20px",
          }}
        >
          <div
            class="errMainAuth"
            className="d-block"
            style={{
              fontWeight: "700",
              color: "black",
            }}
          >
            <span className="d-flex justify-content-center">
              Доступ запрещён.
            </span>
            <hr />
            <h1
              className="d-flex justify-content-center"
              class="errMessageAuth"
              style={{
                fontWeight: "700",
                color: "black",
              }}
            >
              Для перехода в личный кабинет необходимо зайти на сайт или
              зарегистрироваться
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ErrAuth;
