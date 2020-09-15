import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import './TopBar.css';

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'fixed',
    left: '33vw',
    color: 'rgba(var(--f52,142,142,142),1)',
    border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
    justifyContent: 'center',
    //position: 'relative',
    borderRadius: '3px',
    backgroundColor: 'rgba(var(--b3f,250,250,250),1)',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down(800)]: {
      left: '25vw',
    },
    [theme.breakpoints.down(675)]: {
      left: '140px',
      right: '240px',
    },
    [theme.breakpoints.down(475)]: {
      display: 'none',
    },
    [theme.breakpoints.up(280)]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    //display: 'none',
    right: '20px',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down(400)]: {
      right: 0,
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="toolbar">
        <img 
            className="instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" 
            alt="test-instagram"
        />
        
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton >
              <Badge badgeContent={17} >
              <svg 
                aria-label="Home" 
                class="_8-yf5 " 
                fill="#262626" 
                height="22" 
                viewBox="0 0 48 48" 
                width="22"
              >
                <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
              </svg>
              </Badge>
            </IconButton>
            
            <IconButton color="black">
              <Badge badgeContent={17}>
                <svg 
                  aria-label="Direct" 
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48" 
                  width="22"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </Badge>
            </IconButton>
            <IconButton color="black">
              <Badge badgeContent={17}>
                <svg 
                  aria-label="Find People"
                  fill="#262626" 
                  height="22" 
                  viewBox="0 0 48 48" 
                  width="22"
                >
                  <path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path>
                </svg>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={17}>
                <svg 
                  aria-label="Activity Feed"
                  fill="#262626" 
                  height="22" 
                  viewBox="0 0 48 48" 
                  width="22"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </Badge>
            </IconButton>
            
            <IconButton>
                <img
                    className="img"
                    alt="test"
                    src="https://instagram.fblr1-3.fna.fbcdn.net/v/t51.2885-15/e35/54446523_1068830753300846_6692444261054313633_n.jpg?_nc_ht=instagram.fblr1-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SfdlHPKeLbIAX8MhqMb&oh=ed67447da7345787c8d0a607187620d9&oe=5F5E5759"
                />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
