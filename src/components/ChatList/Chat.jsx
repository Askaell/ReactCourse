import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Chat = (props) => {
    return (
        <ListItem button>
            <ListItemText className="item__text" primary={props.chatName} />
        </ListItem>
    );
};

export { Chat };
