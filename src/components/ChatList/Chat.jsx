import React from 'react';
import { ListItem, ListItemText, Icon } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const Chat = (props) => {
    const haveUnreadMessage = props.haveUnreadMessage !== 'false' ? true : false;
    return (
        <ListItem button>
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
        </ListItem>
    );
};

export { Chat };
