import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import apple__store from './utils/apple-store.svg';
import google__play from './utils/google-play-badge.svg';
import './App.css';
import './SignUp.css';
import Button from '@material-ui/core/Button';
import { auth } from './firebase';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const history = useHistory();
    console.log('user outside console', user);
    
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser)=> {
            if(authUser) {
                //user has logged in...
                setUser(authUser);
            } else {
                //user has logged out
                setUser(null);
            }
        })
        return () => {
            //perform some clean up
            unsubscribe();
        }
    }, []);
    const handleSignUp = (event) => {
        //To prevent refresh
        event.preventDefault();

        //Creating the user using firebase createUserWithEmailAndPassword method
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser)=> {
            authUser.user.updateProfile({
                displayName: username,
            })
        })
        .catch((error) => {
            alert(error.message);
        });

        //Rerouting to instagram home after successful sign up
        history.push('/home');
    };

    return (
        <div className='signUp__options'>
            <div className='signUp__border'>
                {/* Instagram Logo */}
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                />

                <span className="get__the__app">Sign up to see photos and videos from your friends.</span>
                
                {/* Form Fields with username and password */}
                <form className='signUp__form'>
                    <input
                            className="form__fields"
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                    <input
                        className="form__fields"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input
                        className="form__fields"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <Button
                        className="form__fields"
                        type="submit"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </form>
                
                <span className="get__the__app">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</span>
            </div>
            
            {/* Dont have an account div */}
            <div className="form__fields">
                <span>
                    Already have an Account?{' '}
                    <Link 
                        to='/login'
                    >
                        Log In
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
    )
}

export default SignUp
