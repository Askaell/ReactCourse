const Messages = (props) => {
    const {messages = []} = props;

    return (
        <div className='messages'>
            {messages.map((item, index) => (
                <Message ket={index} text={item} />
            ))}
        </div>
    );
}

const Message = (props) => {
    return <div className='message'>
        {props.text}
    </div>;
};

export {Messages};
