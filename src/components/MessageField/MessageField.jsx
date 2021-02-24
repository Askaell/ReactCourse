import {Message} from '../Message';
import {Component, Fragment} from 'react';

class MessageField extends Component {
    state = {
        messages: [],
    };

    addMessage = () => {
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    name: 'You',
                    value: 'hi'+Math.random(),
                    time: new Date().toLocaleString(),
                }
            ],
        });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            name: 'Robot',
                            value: 'I am just a robot',
                            time: new Date().toLocaleString(),
                        }
                    ],
                });
            }, 1000);
        }
    }

    render() {
        const {messages = []} = this.state;

        return (
            <Fragment>
                <div className='messageField'>
                    {messages.map((item, index) => (
                        <Message 
                            key={index}
                            text={item.value}
                            name={item.name}
                            time={item.time}
                        />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send</button>
            </Fragment>
        );
    }
}

export { MessageField };