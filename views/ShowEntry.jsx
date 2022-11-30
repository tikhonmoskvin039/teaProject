const React = require('react');
const Layout = require('./Layout');

function ShowEntry({ tea, username }) {
  return (
    <Layout username={username}>
        <script defer src="/js/showentry.js"></script>
      <div>
        <h2>{tea[0].name}</h2>
      </div>
      <div><img src={tea[0].picture_url} alt={tea[0].name}></img></div>
      <div>{tea[0].info}</div>
      <div><span>Страна происхождения:{tea[0].placeOfBirth}</span></div>
      <br/>
      <div id="entryButton">
      <button
            value="add"
            type="button"
            data-details={tea[0].id}
            >
                Оставить комментарий
            </button>
            </div>
      <br/>
      <div> Комментарии пользователей:
        <ul id='list'>
           { tea.map((el)=>{
           return( <li>{el['Users.name']}<p>{el['Users.Comment.text']}</p></li>)
           })}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = ShowEntry;
