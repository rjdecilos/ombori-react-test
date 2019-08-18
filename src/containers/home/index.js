import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { initialFetchUsers, fetchMoreUsers } from '../../modules/users';
import UserList from '../../components/users/userList';
import InfiniteScroll from 'react-infinite-scroller';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    padding: 0,
    color: '#000',
    fontFamily: 'Open Sans, Lato, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '20px',
    textRendering: 'optimizeLegibility',
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: 'auto',
  },
  header: {
    paddingTop: '35px',
    textAlign: 'center',
    fontSize: '120%',
    backgroundColor: '#dcdcdc',
    color: '#000',
    height: '50px',
  },
  pulse: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-30px',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#46cb18',
    boxShadow: '0 0 0 rgba(29,128,14, .4)',
    animation: '$pulse 2s infinite',
    display: 'block',
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(70,203,24, 0.4)',
    },
    '45%': {
      boxShadow: '0 0 0 65px rgba(29,128,14, 0.3)',
    },
    '70%': {
      boxShadow: '0 0 0 65px rgba(29,128,14, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 65px rgba(29,128,14, 0)',
    },
  },
}); 

const Home = (props) => {
  const classes = useStyles();
  useEffect(() => {
    if (props.users.length === 0)
      props.initialFetchUsers();
  });
  return (<InfiniteScroll
    pageStart={0}
    loadMore={ () => {console.log('hello', props.noUsersToLoad); if (!props.noUsersToLoad) {
        props.fetchMoreUsers();
    }} }
    hasMore={!props.noUsersToLoad}
    loader={<div className={classes.root} key={0}>Loading ...</div>}
    ><div className={classes.root}>
    
    <div className={classes.header}>
      Users
    </div>
    {
      props.isFetching &&
      props.users.length === 0 &&
      <span className={classes.pulse}></span>
    }
    {
      !props.isFetching &&
      props.users.length > 0 &&
        <UserList users={props.users} noUsersToLoad={props.noUsersToLoad} isFetching={props.isFetching} fetchMoreUsers={props.fetchMoreUsers} />
    }
  </div>
  </InfiniteScroll>)
}

const mapStateToProps = ({users}) => ({
  isFetching: users.isFetching,
  noUsersToLoad: users.noUsersToLoad,
  users: users.users,
})

const mapDispatchToProps = {
  initialFetchUsers,
  fetchMoreUsers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
