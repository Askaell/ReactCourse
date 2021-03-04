import React from 'react';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { Chat } from './Chat';

const ChatList = () => {
    const [chats, addChat] = React.useState([
        { chatId: 0, chatName: 'first chat' },
        { chatId: 1, chatName: 'second chat' },
        { chatId: 2, chatName: 'third chat' },
    ]);

    return (
        <List className="chat_list">
            {chats.map((item, index) => (
                <Link key={index} to={`/chat/${item.chatId}`}>
                    <Chat {...item} />
                </Link>
            ))}
        </List>
    );
};

export { ChatList };
