import React from 'react'
import './RightSection.css';
import './PhotoAlbum.css';
import RightSectionHeader from './RightSectionHeader';
import RightSectionBody from './RightSectionBody';
import RightSectionFooter from './RightSectionFooter';

function RightSection() {
    return (
        <div className='rightSection'>
            <RightSectionHeader />

            <RightSectionBody />
            <RightSectionBody />

            <RightSectionFooter /> 
        </div>
    )
}

export default RightSection
