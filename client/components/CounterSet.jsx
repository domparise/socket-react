var React = require('react')
var OuterCounter = require('./OuterCounter.jsx')
var CounterSet = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    handleClick: function() {
        this.setState({
            count: (this.state.count += 1)
        });
    },
    render: function () {
        var colors = ['#ffcb05','#00274c','#9b9a6d'];
        var counters = [];
        for (var i = 0; i < this.props.num; i++) {
            counters.push(
                <OuterCounter background_color={colors[i%3]} text_color={colors[(i+1)%3]} incrementParent={this.handleClick} key={i} />
            );
        }
        return (
            <div>
                {counters}
                <h1>{this.state.count}</h1>
            </div>
        );
    }
});
module.exports = CounterSet;