import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Icon, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import { Message } from '../Message';
import './MessageField.css';

import { sendMessage } from '../../redux/actions/messageActions';

class _MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        textField: '',
    };

    fieldRef = createRef();

    addMessage = (messageText, author = '') => {
        const chatId = this.props.currentChat;
        const currentAuthor = author.length ? author : 'You';

        this.props.sendMessage(messageText, currentAuthor, chatId);
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

    componentDidUpdate() {
        if (this.fieldRef.current) {
            this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
        }
    }

    render() {
        const { messages = {}, currentChat: chatId } = this.props;

        return (
            <div className="messageFieldContainer">
                {this.props.currentChat && (
                    <div className="message-field">
                        <div className="messages" ref={this.fieldRef}>
                            {messages[chatId] &&
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
    messages: state.chat.messages,
});

const MessageField = connect(mapStateToProps, { sendMessage })(_MessageField);

export { MessageField };
