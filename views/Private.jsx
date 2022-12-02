// const { template } = require('@babel/core');
const React = require("react");
const Layout = require("./Layout");

function Private({ commentsArr, commentes, username = "" }) {
  //console.log(commentsArr)
  return (
    <Layout username={username}>
      <script defer src="/js/private.js"></script>
      <div>
        <h2>Личный кабинет </h2>
        <h2>Hello, {username}</h2>
        <div class="row">
          <div
            className="row container mt-5 p-3 private_box"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            {commentsArr ? (
              commentsArr.reverse().map((comment, index) => (
                <div
                  className="comment-box"
                  style={{
                    maxWidth: "100%",
                    marginBottom: "2%",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    borderRadius: "20px",
                    padding: "2%",
                  }}
                  id={`${comment.comment_id}`}
                  data-updtext={`${comment.text}`}
                  data-teaname={commentes[index]["Teas.name"]}
                  data-date={comment.time.toDateString()}
                >
                  <div>
                    <h4 id="scrollspyHeading1">
                      {commentes[index]["Teas.name"]}
                    </h4>

                    <p>{comment.time.toDateString()}</p>

                    <p>{comment.text}</p>

                    <button
                      href="#"
                      data-updbtn={`${comment.comment_id}`}
                      data-updbtntext={`${comment.text}`}
                      class="button btn btn-outline-success"
                    >
                      Редактировать комментарий
                    </button>
                    <button
                      href="#"
                      data-delBtn={comment.comment_id}
                      class="button btn btn-outline-danger"
                    >
                      Удалить комментарий
                    </button>
                  </div>
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
