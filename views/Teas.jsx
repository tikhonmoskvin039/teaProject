const React = require('react');
const Layout = require('./Layout');

function Teas({ title, username }) {
  return (
    
    <Layout username={username}>
        <link rel="stylesheet" href="/css/stylemap.css"></link>
        <script defer src="/js/teas.js"></script>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"></script>
        <div id="map" className="map"></div>
    </Layout>
  );
}

module.exports = Teas;
