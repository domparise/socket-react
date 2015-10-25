var React = require('react');
var ChatClient = React.createClass({
    getInitialState: function () {
        return {
            msgs: []
        }
    },
    componentDidMount: function () {
        var component = this;
        this.props.socket.on('msg', function (data) {
            console.log(data);
            component.setState({
                msgs: component.state.msgs.concat(data)
            });
        });
    },
    sendMsg: function (evt) {
        var component = this;
        var data = {txt:document.getElementById('main_input').value};
        this.props.socket.emit('msg', data);
        component.setState({
            msgs: component.state.msgs.concat(data)
        });
    },
    render: function () {
        var msgs = this.state.msgs.map(function (msg,i) {
            return (
                <div key={i}>
                    <p>{msg.txt}</p>
                </div>
            );
        }.bind(this));

        return (
            <div id="main">
                {msgs}
                <input id='main_input' type='text' name='txt' />
                <button onClick={this.sendMsg}>send</button>
            </div>
        );
    }
});
module.exports = ChatClient;