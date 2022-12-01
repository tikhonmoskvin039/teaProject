const React = require("react");
const Layout = require("./Layout");

function Err404({ username }) {
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
          Страница не найдена
        </h1>
      </div>
    </Layout>
  );
}

module.exports = Err404;
