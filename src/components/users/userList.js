
import React, { lazy, Suspense, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

const Avatar = lazy(() => import('./avatar'));

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        color: 'black',
    },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    paddingTop: '0 !important',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#e9ebee',
    display: 'flex',
    position: 'relative',
    top: '30px !important',
  },
  noText: {
      width: '150px',
      height: '30px',
      borderRadius: '5%',
      background: '#e9ebee',
  }
}));

const UserList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <List className={classes.root}>
        {props.users.map(data => (
            <React.Fragment>
                <ListItem className={classes.listItem} alignItems="flex-start">
                    <ListItemAvatar>
                        <Suspense
                            fallback={
                                <span className={classes.avatar} />
                            }
                        >
                            <Avatar avatar={data.avatar} />
                        </Suspense>
                    </ListItemAvatar>
                    <ListItemText
                    primary={`${data.first_name} ${data.last_name}`}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {data.email}
                        </Typography>
                        {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>
        ))}
        </List>
        {props.noUsersToLoad &&
            <p>No more users to load</p>
        }
    </div>
  );
}

export default UserList;