// const { template } = require('@babel/core');
const React = require("react");
const Layout = require("./Layout");

function Private({ comments, username = "" }) {
  return (
    <Layout username={username}>
      <script defer src="/js/private.js"></script>
      <div>
        <h2>Личный кабинет </h2>
        <h2>Hello, {username}</h2>
        <div class="row">
          <div
            // class="foo"
            className="row container mt-5 p-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "20px",
            }}
          >
            {comments[0]["Teas.Comment.text"] ? (
              comments.map((comment, index) => (
                <div className="col-sm-6">
                  <h4 id="scrollspyHeading1">{comment["Teas.name"]}</h4>
                  {/* <p>{comment["Teas.Comment.createdAt"]}</p> */}
                  <p>{console.log(new Date(comment["Teas.Comment.text"]))}</p>
                  <p>{comment["Teas.Comment.text"]}</p>
                  <a
                    href="#"
                    data-delBtn={index + 1}
                    class="btn btn-primary btn-sm"
                  >
                    Удалить комментарий
                  </a>
                </div>
              ))
            ) : (
              <h3>Список комментариев пуст</h3>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Private;
