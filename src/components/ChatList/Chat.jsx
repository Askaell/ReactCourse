import React from 'react';
import { ListItem, ListItemText, Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Chat = (props) => {
    const haveUnreadMessage = props.haveUnreadMessage !== 'false' ? true : false;
    return (
        <ListItem button data-chatid={props.chatId}>
            <ListItemText className="item__text" primary={props.chatName}></ListItemText>
            {haveUnreadMessage && (
                <Icon
                    color="secondary"
                    style={{ fontSize: '0.7rem' }}
                    className="icon_unread_message"
                >
                    circle
                </Icon>
            )}
            <div className="icon_delete" data-chatid={props.chatId} onClick={props.onClick}>
                <DeleteIcon style={{ fontSize: '1.0rem' }} />
            </div>
        </ListItem>
    );
};

export { Chat };
