const React = require('react');
const Layout = require('./Layout');

function Teas({ title, username }) {
  return (
    <Layout username={username}>
      <div className="container">
      <div class="centralText" style={{ fontFamily: "Shanghai_rus", fontWeight: "700" , color: "beige"}}>
        Добро пожаловать в мир чая!
      </div>
      <link rel="stylesheet" href="/css/stylemap.css"></link>
      <script defer src="/js/teas.js"></script>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"></script>
      <div id="map" class="map" className="map" style={{borderRadius: "15px"}}></div>

      </div>
    </Layout>
  );
}

module.exports = Teas;
