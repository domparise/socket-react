var React = require('react')
var InnerCounter = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },
    handleClick: function() {
        this.props.incrementParent();
        this.setState({
            count: (this.state.count += 1)
        });
    },
    render: function () {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Inner</button>
            </div>
        );
    }
});
module.exports = InnerCounter;