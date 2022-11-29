const { template } = require('@babel/core');
const React = require('react');
const Layout = require('./Layout');

function Private({ comments }) {
    return (
        <Layout>
            <div>
                <h2>Личный кабинет </h2>
                {/* <h2>Hello, {username}</h2> */}
                <div class="row">
                    {/* <div class="col-4">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                        </div>
                    </div> */}
                    <div class="foo" className="row">
                        {comments ? comments.map((comment,index) => (
                            <div className="col-sm-6">
                                <h4 id="scrollspyHeading1">{comment['Teas.name']}</h4>
                                {/* <p>{comment["Teas.Comment.createdAt"]}</p> */}
                                <p>{console.log(new Date(comment["Teas.Comment.text"]))}</p>
                                <p>{comment["Teas.Comment.text"]}</p>
                                <a href='#' data-delBtn={(index + 1)} class="btn btn-primary btn-sm">Удалить комментарий</a>
                            </div>            
                        )) : <h3>Список комментариев пуст</h3>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Private;