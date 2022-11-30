const React = require("react");
const Layout = require("./Layout");

function SignUpForm({ username }) {
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
          <h2>Регистрация</h2>
        </div>
        <form id="signupForm" method="POST" action="/auth/signup">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
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
              minLength={3}
            />
          </div>
          <button type="submit" className="btn btn-light m-4">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpForm;
