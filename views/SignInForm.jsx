const React = require("react");
const Layout = require("./Layout");

function SignInForm({ username, name }) {
  //JS Code

  return (
    <Layout username={username}>
      <div
        className="container mt-5 p-3"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: "20px",
        }}
      >
        <div className="m-4">
          {" "}
          <h2>Вход на сайт</h2>
        </div>
        <form id="signinForm" method="POST" action="/auth/signin">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-light m-4">
            Войти
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignInForm;
