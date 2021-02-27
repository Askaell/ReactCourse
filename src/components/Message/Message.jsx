const Message = (props) => {
    return (
        <div className='message'>
            Author: {props.name}
            <br></br>
            Time: {props.time}
            <br></br>
            {props.text}
            <br></br>
            <br></br>
        </div>
    );
};

export {Message};
