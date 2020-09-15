import React from 'react'
import './PhotoAlbum.css';
import './TimeLine.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LikeSection from './LikeSection';

function PhotoAlbum({
    username,
    caption,
    imageUrl,
    headerImageUrl,
}) {
    return (
        <div className="photoAlbum">

            {/* ----------------------*/}
            {/* Header of the album */}
            <div className="photoHeader">
                <img 
                    className="headerImg"
                    alt="test"
                    src={headerImageUrl}
                />
                <div className="profileName">
                    <h4>{username}</h4>
                    <span className="font">Shivam, Bangalore</span>
                </div>
                <MoreHorizIcon className='horizonIcon'/>
            </div>

            {/* -----------------------*/}
            {/* The image itself */}
            <img
                className="gridImg"
                alt="test"
                src={imageUrl}
            />


            {/* -----------------------*/}
            {/* The Comment and like section*/}
            <LikeSection username={username} caption={caption}/>
            
        </div>
    )
};

export default PhotoAlbum;
