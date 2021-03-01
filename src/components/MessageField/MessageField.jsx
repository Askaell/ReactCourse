import { Message } from '../Message';
import { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import './MessageField.css';

class MessageField extends Component {
    state = {
        messages: [],
        textField: [],
    };

    addMessage = (messageText) => {
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    author: 'You',
                    text: messageText,
                    time: new Date().toLocaleString(),
                },
            ],
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.addMessage(this.state.textField);

        event.target.value = this.setState({ textField: [] });
        // фронтовые штучки

        // this.doSumthing();
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            author: 'Robot',
                            text: 'I am just a robot',
                            time: new Date().toLocaleString(),
                        },
                    ],
                });
            }, 1000);
        }
    }

    render() {
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className="messageField">
                    {messages.map((item, index) => (
                        <Message key={index} {...item} />
                    ))}
                </div>
                <form id="messageForm" onSubmit={this.handleSubmit}>
                    <Grid container spacing={0}>
                        <Grid item xs={10}>
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
                        <Grid item xs={2}>
                            <Button
                                id="sendButton"
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                                type="submit"
                            >
                                {<Icon>send</Icon>}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Fragment>
        );
    }
}

export { MessageField };
