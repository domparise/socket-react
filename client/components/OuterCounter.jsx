var React = require('react')
var InnerCounter = require('./InnerCounter.jsx')
var OuterCounter = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    handleClick: function() {
        this.props.incrementParent();
        this.setState({
            count: (this.state.count += 1)
        });
    },
    render: function() {
        return (
            <div className='OuterCounter' style={{backgroundColor:this.props.background_color,color:this.props.text_color}}>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Outer</button>
                <InnerCounter incrementParent={this.handleClick} />
            </div>
        );
    }
});
module.exports = OuterCounter;