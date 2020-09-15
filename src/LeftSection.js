import React, { useState, useEffect } from 'react'
import TimeLine from './TimeLine';
import PhotoAlbum from './PhotoAlbum';
import './Leftsection.css';
import { db } from './firebase';

function LeftSection() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ 
                id: doc.id,
                post: doc.data(),
            })));
        })
    }, []);
    return (
        <div className='leftSection'>
            <TimeLine />
            {
                posts.map(({ id, post }) => (
                    <>
                        <PhotoAlbum key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} headerImageUrl={post.headerImageUrl}/>
                    </>
                )
            )}
        </div>
    )
}

export default LeftSection
