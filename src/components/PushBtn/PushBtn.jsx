const PushBtn = (props) => {
    return (
        <button className='pushBtn' onClick={clickHandler}>Кнопка</button>
    );
}

export {PushBtn};

function clickHandler() {
    let messages = document.querySelector('.messages');
    messages.insertAdjacentHTML('beforeend', '<div class="message">Нормально</div>');
}