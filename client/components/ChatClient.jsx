var React = require('react');
var ChatClient = React.createClass({
    getInitialState: function () {
        return {
            msgs: [],
            isConnected: false
        }
    },
    componentDidMount: function () {
        var component = this;
        var socket = this.props.socket;
        socket.on('open', function () {
            console.log('connected')
            component.setState({
                isConnected: true
            });
            socket.on('message', function (data) {
                console.log(data);
                component.setState({
                    msgs: component.state.msgs.concat(data)
                });
            });
            socket.on('close', function () { 
                console.log('disconnected')
                component.setState({
                    isConnected: false
                });
            });
        });
    },
    sendMsg: function (evt) {
        var component = this;
        var data = {txt:document.getElementById('main_input').value};

        if (this.state.isConnected) {
            var socket = this.props.socket;
            socket.send(data.txt);
        }

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