import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Icon, Grid } from '@material-ui/core';

import { Message } from '../Message';

import './MessageField.css';

class MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
    };

    state = {
        messages: {
            0: [
                {
                    author: 'You',
                    text: 'first chat',
                    time: new Date().toLocaleString(),
                },
            ],
            1: [
                {
                    author: 'You',
                    text: 'second chat',
                    time: new Date().toLocaleString(),
                },
            ],
            2: [
                {
                    author: 'You',
                    text: 'third chat',
                    time: new Date().toLocaleString(),
                },
            ],
        },
        textField: [],
    };

    fieldRef = createRef();

    addMessage = (messageText) => {
        const { currentChat } = this.props;
        this.setState({
            messages: {
                ...this.state.messages,
                [currentChat]: [
                    ...this.state.messages[currentChat],
                    {
                        author: 'You',
                        text: messageText,
                        time: new Date().toLocaleString(),
                    },
                ],
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.textField);
        if (this.state.textField.length === 0) {
            return;
        }
        this.addMessage(this.state.textField);

        event.target.value = this.setState({ textField: [] });

        this.robotAnswer();
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    robotAnswer() {
        setTimeout(() => {
            const { currentChat } = this.props;
            this.setState({
                messages: {
                    ...this.state.messages,
                    [currentChat]: [
                        ...this.state.messages[currentChat],
                        {
                            author: 'Robot',
                            text: 'I am just a robot',
                            time: new Date().toLocaleString(),
                        },
                    ],
                },
            });
        }, 1000);
    }
    componentDidUpdate() {
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = [] } = this.state;
        const { currentChat } = this.props;

        return (
            <div className="messageFieldContainer">
                {currentChat && (
                    <div className="message-field">
                        <div className="messages" ref={this.fieldRef}>
                            {messages[currentChat] &&
                                messages[currentChat].map((item, index) => (
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
                                            label="Message"
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

export { MessageField };
