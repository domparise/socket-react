var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div id="home">
        {this.props.foo}
      </div>
    );
  }
});

module.exports = Home;