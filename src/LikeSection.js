import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import logo from './utils/insta_comment.png';
import ExploreIcon from '@material-ui/icons/Explore';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import './LikeSection.css';

function LikeSection({
    username,
    caption,
}) {
    const [flag, setFlag] = useState(false);
    const handleFlagChange = () => {
        setFlag(true);
    };
    const handleOutFlag = () => {
        setFlag(false);
    };
    
    return (
        <>
            <div className="likes__bar">
                <FavoriteBorderIcon className="heart"/>
                <ExploreIcon className="compass"/>
                <img
                        className="comment__logo"
                        alt="test"
                        src={logo}
                />
                <TurnedInNotIcon className="tagged"/>
            </div>

            <div className="my_caption">
                <h4>59 likes</h4>
                <span><strong>{username}</strong>{' '}{caption}</span>
            </div>
            
            <form className="comment__field">
                <input 
                    className="input__field" 
                    type="text" 
                    name="writeComment" 
                    placeholder="Add a comment..."
                    onFocus={handleFlagChange}
                    onBlur={handleOutFlag}
                    
                />
                <h4 className={ flag ? "post__btn__true" : "post__btn"} >POST</h4>
            </form>
        </>
    )
}

export default LikeSection
