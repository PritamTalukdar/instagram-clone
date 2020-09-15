import React, { useState, useEffect } from 'react'
import './TimeLine.css';
import { db } from './firebase';

function TimeLine({username}) {
    const [timelinePosts, setTimelinePosts] = useState([]);
    useEffect(()=> {
        db.collection('timelines__posts').onSnapshot(snapshot => {
            setTimelinePosts(snapshot.docs.map(doc => doc.data()));
        })
    },[]);
    return (
        <div className="timeLine__body">
            {
                timelinePosts.map(timelinePost => {
                    return (
                        <div className="image__text__holder">
                            <img 
                                className="timeLine__img"
                                alt="test"
                                src={timelinePost.imageUrl}
                            />
                            <span className="font">{timelinePost.username}</span>
                        </div>
                    );
                }
            )}
            
        </div>
    )
}

export default TimeLine
