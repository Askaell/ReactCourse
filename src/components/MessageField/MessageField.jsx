import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Icon, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import { Message } from '../Message';
import './MessageField.css';

import { sendMessage, loadMessages } from '../../redux/actions/messageActions';

class _MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        loadMessages: PropTypes.func.isRequired,
    };

    state = {
        textField: '',
    };

    fieldRef = createRef();

    addMessage = (messageText, author = '') => {
        const chatId = this.props.currentChat;
        const currentAuthor = author.length ? author : 'You';

        this.props.sendMessage(messageText, currentAuthor, chatId);

        // fetch(`http://localhost:3000/messages/${chatId}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ text: messageText, author: currentAuthor }),
        // });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.textField.length === 0) {
            return;
        }
        this.addMessage(this.state.textField);
        this.setState({ textField: [] });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount() {
        // fetch('/api/messages.json')
        //     .then((res) => res.json())
        //     .then(this.props.uploadMessages);
        this.props.loadMessages();
    }

    componentDidUpdate() {
        if (this.fieldRef.current) {
            this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
        }
    }

    render() {
        const { messages = {}, currentChat: chatId, isLoading = false } = this.props;

        if (isLoading) {
            return <div className="messageFieldContainer">Loading...</div>;
        }

        return (
            <div className="messageFieldContainer">
                {this.props.currentChat && (
                    <div className="message-field">
                        <div className="messages" ref={this.fieldRef}>
                            {chatId in messages &&
                                messages[chatId].map((item, index) => (
                                    <Message key={index} {...item} />
                                ))}
                        </div>
                        <div className="message-input">
                            <form id="messageForm" onSubmit={this.handleSubmit}>
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <TextField
                                            id="textField"
                                            name="textField"
                                            label="New message"
                                            autoFocus={true}
                                            fullWidth
                                            value={this.state.textField}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton
                                            id="sendButton"
                                            color="primary"
                                            onClick={this.handleSubmit}
                                            type="submit"
                                        >
                                            {<Icon>send</Icon>}
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    isLoading: state.messages.isLoading,
});

const MessageField = connect(mapStateToProps, { sendMessage, loadMessages })(_MessageField);

export { MessageField };
