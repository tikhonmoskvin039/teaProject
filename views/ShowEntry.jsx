const e = require('express');
const React = require('react');
const Layout = require('./Layout');

function ShowEntry({ tea, id, name, isAdmin, username  }) {
  return (
    <Layout username={username}>
      <script defer src="/js/showentry.js"></script>
      <div className="container mt-5 p-2 mb-5"
        style={{
          maxWidth: "100%",
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: "20px",
        }}
      >
        <div
          class="card content mb-3"
          style={{
            maxWidth: "100%",
            backgroundColor: 'white',
            borderRadius: "20px",
          }}>


          <div className='description'>
            <div className="col-md-8">
              <div className="card-body">
                <h5 class="card-title tea-name">{tea[0].name}</h5>
              </div>
              <div className="imgDiv"><img src={tea[0].picture_url} alt={tea[0].name} class="img-fluid rounded-start"></img></div>
              <br />
              <div><p class="card-text">{tea[0].info}</p></div>
              <br />
              <div><p>Страна происхождения:<b>{tea[0].placeOfBirth}</b></p></div>
              <br />

             {username? (<div id="entryButton">
                <button
                  class="btn btn-outline-success"
                  value="add"
                  type="button"
                  data-details={tea[0].id}
                >
                  Оставить комментарий
                </button>
              </div>) :('') }
              <br />
              <div> Комментарии пользователей:
                <br />
                <div id='list' class="list-group">
                  {tea.map((el) => {
                    // console.log( id)
                    return (<div class="list-group-item "><div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{el['Users.name']}</h5>

                    </div>
                      <div>
                        <p class="mb-1">{el['Users.Comment.text']}</p>
                      </div>{(el['Users.id']==id || isAdmin) ?(<button id="delete-button">удалить</button>):('')}</div>)
                  })}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
}

module.exports = ShowEntry;
