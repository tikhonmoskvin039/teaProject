const { urlencoded } = require("express");
const React = require("react");

function Layout({ title, children, username = "" }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
        <title>{title ? title : "ReactSSR"}</title>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/4a2bd28544.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <a href="/">
          <img
            src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925290Cofee.png"
            class="card-img-top"
            alt="..."
            style={{
              width: "35px",
              position: "fixed",
              right: "5%",
              zIndex: "100",
              height: "35px",
            }}
          />
        </a>
        <nav
          class="navbar navbar-expand-lg bg-light"
          style={{ padding: "0 5% 0", height: "auto" }}
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                {username ? (
                  <>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ cursor: "default" }}
                    >
                      Привет, <b>{username}!</b>
                    </a>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/private/admin"
                    >
                      Личный кабинет
                    </a>
                    <a class="nav-link" href="/auth/signout">
                      Выход
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/auth/signin"
                    >
                      Вход
                    </a>
                    <a class="nav-link" href="/auth/signup">
                      Регистрация
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="container pb-4 pt-4">{children}</div>
        {/* <footer
          className="d-flex justify-content-between align-items-center"
          style={{
            position: "fixed",
            bottom: "5%",
            margin: "0 50px 0",
            width: "92%",
          }}
        >
          {" "}
          <i class="fa-brands fa-telegram fa-2xl"></i>
          <p style={{ fontSize: "25px", color: "black" }}>
            Created by <b>BEARS ©</b>
          </p>
          <i class="fa-brands fa-instagram fa-2xl"></i>
        </footer> */}
        <footer
          class="text-center text-white"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div class="container pt-4">
            <section class="mb-4">
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-linkedin"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            class="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <b> © 2022 created by BEARS</b>
            <a class="text-dark" href="https://elbrusboot.camp/">
              {" "}
              Elbrus Bootcamp
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
