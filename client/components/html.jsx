var React = require('react');
var Html = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                    <title>{this.props.props.title}</title>
                    <link rel='stylesheet' type='text/css' href='/css/index.min.css' />
                </head>
                <body>
                    <div id='container' dangerouslySetInnerHTML={{__html: this.props.body}} />
                    <script id='initialProps' type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(this.props.props)}} />
                    <script src='/js/react-with-addons.min.js' />
                    <script src='/js/socket.io.js' />
                    <script src='/js/index.min.js' />
                </body>
            </html>
        );
    }
});
module.exports = Html;