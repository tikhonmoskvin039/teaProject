const React = require("react");
const Layout = require("./Layout");

function MapAuth({ username }) {
  //JS Code
  return (
    <Layout username={username}>
      <div
        class="card card-body"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: "20px",
        }}
      >
        <h1
          class="error404"
          className="d-flex justify-content-center"
          style={{
            fontWeight: "700",
            color: "black",
          }}
        >
          Для просмотра подробной информации, пожалуйста войдите на сайт, или
          зарегистрируйтесь.
        </h1>
        <div className="d-flex justify-content-around mt-2">
          <button type="button" class="btn btn-light">
            <a
              href="/auth/signin"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "700",
              }}
            >
              Войдите
            </a>
          </button>
          <button type="button" class="btn btn-light">
            {" "}
            <a
              href="/auth/signup"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "700",
              }}
            >
              Зарегистрируйтесь
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MapAuth;
