import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TextField, Button, Grid, List } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Chat } from './Chat';
import './ChatList.css';

import { addChat, deleteChat } from '../../redux/actions/chatActions';

class _ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };

    state = {
        textChatField: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.textChatField.length === 0) {
            return;
        }
        this.addChat(this.state.textChatField);
        this.setState({ textChatField: [] });
    };

    addChat = (chatName) => {
        const chatId = Object.keys(this.props.chats).length;
        this.props.addChat(chatId, chatName);
    };

    handleDeleteChat = (event) => {
        event.preventDefault();
        let chatId = event.target.getAttribute('data-chatid');
        if (!chatId) {
            chatId = event.target.parentNode.parentNode.getAttribute('data-chatid');
        }
        this.props.push('/');
        this.props.deleteChat(chatId);
    };

    render() {
        const { chats } = this.props;

        return (
            <List className="chat_list_container">
                <div className="chat_input">
                    <form id="chat_input_form" onSubmit={this.handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={9}>
                                <TextField
                                    id="textChatField"
                                    name="textChatField"
                                    label="New chat"
                                    variant="outlined"
                                    fullWidth
                                    value={this.state.textChatField}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    id="sendChatButton"
                                    color="primary"
                                    variant="contained"
                                    onClick={this.handleSubmit}
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div className="chat_list">
                    {Object.keys(chats).map((item, index) => (
                        <NavLink key={index} to={`/chat/${item}`} activeClassName="selected-chat">
                            <div className="chat_item">
                                <Chat
                                    onClick={this.handleDeleteChat}
                                    chatId={`${item}`}
                                    chatName={`${chats[item].chatName}`}
                                    haveUnreadMessage={`${
                                        chats[item].haveUnreadMessage ? true : false
                                    }`}
                                />
                            </div>
                        </NavLink>
                    ))}
                </div>
            </List>
        );
    }
}

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
});

const ChatList = connect(mapStateToProps, { addChat, deleteChat, push })(_ChatList);

export { ChatList };
