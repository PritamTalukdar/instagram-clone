import React from 'react'
import logInPic from './utils/loginPic.png';
import { Link, useHistory } from "react-router-dom";
import apple__store from './utils/apple-store.svg';
import google__play from './utils/google-play-badge.svg';
import './LogIn.css';
import './App.css';
import { Button } from '@material-ui/core';

function LogIn() {
    const history = useHistory();
    const handleSignUp = (event) => {
        //To prevent refresh
        event.preventDefault();
        //Rerouting to instagram home after successful log in
        history.push('/home');
    };
    return (
        <div className="logIn__page">
            <div className='logIn__wrapper'>
                {/* Login Page Left Section with only image */}
                <img className='logIn__image' src={logInPic} />

                {/* Right Section with the Login options */}
                <div className='logIn__options'>
                    <div className='logIn__border'>
                        {/* Instagram Logo */}
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                        />

                        {/* Form Fields with username and password */}
                        <form className='logIn__form'>
                            <input
                                className="form__fields"
                                type="text"
                                name="username"
                                placeholder="Username"
                            />
                            <input
                                className="form__fields"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <Button
                                className="form__fields"
                                type="submit"
                                onClick={handleSignUp}
                            >
                                Log In
                            </Button>
                        </form>
                    </div>
                    {/* Dont have an account div */}
                    <div className="form__fields">
                        <span>
                            Don't have an account? {' '}
                            <Link
                                to='/signup'
                            >
                                Sign Up
                        </Link>
                        </span>
                    </div>
                    {/* App Store and Google Play Link */}
                    <span className="get__the__app">Get the app.</span>
                    <div className="playstore__wrapper">
                        <a 
                            href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                            target="_blank"
                        >
                            <img
                                className="google__style"
                                src={apple__store}
                                alt="apple__store"
                            />
                        </a>

                        <a 
                            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8A86BE87-7A6D-41F8-A33F-851EC0101EC3%26utm_content%3Dlo%26utm_medium%3Dbadge"
                            target="_blank"
                        >
                            <img
                                className="google__style"
                                src={google__play}
                                alt="google__play"
                                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8A86BE87-7A6D-41F8-A33F-851EC0101EC3%26utm_content%3Dlo%26utm_medium%3Dbadge"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogIn
