const React = require('react');
const Layout = require('./Layout');

function Index({ title, username }) {
  return (
    <Layout username={username}>
      <div>
        <h2>{title}</h2>
      </div>
    </Layout>
  );
}

module.exports = Index;
