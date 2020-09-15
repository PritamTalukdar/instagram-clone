import React from 'react'
import './MainBody.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function MainBody() {
    return (
        <div className="mainBody">
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default MainBody
