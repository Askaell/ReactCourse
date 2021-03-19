import './Message.css';

const Message = (props) => {
    return (
        <div>
            <div
                className={
                    props.author === 'You' ? 'message message_your' : 'message message_other'
                }
            >
                <div className="message__text">{props.text}</div>
                <div className="message__author">{props.author}</div>
                <div className="message__time">{props.time}</div>
            </div>
        </div>
    );
};

export { Message };
