const React = require('react');
const Layout = require('./Layout');

function Teas({ title, username }) {
  return (
    <Layout username={username}>
      <h1 className='d-flex justify-content-center' style={{ fontFamily: "Shanghai_rus", fontWeight: "700" , fontSize: "50px", color: "beige"}}>
        Добро пожаловать в мир чая!
      </h1>
      <link rel="stylesheet" href="/css/stylemap.css"></link>
      <script defer src="/js/teas.js"></script>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"></script>
      <div id="map" className="map" style={{borderRadius: "15px"}}></div>
    </Layout>
  );
}

module.exports = Teas;
