import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        top: '30px !important',
    }
}));

const AvatarItem = (props) => {
    const classes = useStyles();
    return <Avatar className={classes.root} alt="Remy Sharp" src={props.avatar} />
}

export default AvatarItem;